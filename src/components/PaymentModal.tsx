"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  open: boolean;
  uuid?: string | null;
  onClose: () => void;
};

export default function PaymentModal({ open, uuid, onClose }: Props) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open || !uuid) return;
    // @ts-ignore payfast global injected by /payfast-inline.js
    const pay = (window as any).payfast_do_onsite_payment;
    if (typeof pay === "function") {
      pay({
        uuid,
        // we still set return/cancel for safety, but UI remains on-page
        return_url: "/thank-you",
        cancel_url: "/buy",
      });
    }
  }, [open, uuid]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur"
            onClick={onClose}
          />
          {/* glass card */}
          <motion.div
            initial={{ y: 20, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 10, scale: 0.98, opacity: 0 }}
            className="relative w-[min(620px,92vw)] rounded-3xl border border-white/15 bg-white/7 p-6 shadow-[0_0_40px_rgba(155,108,183,.35),0_0_20px_rgba(62,211,180,.25)]"
          >
            <div className="absolute -inset-px rounded-3xl pointer-events-none
              bg-[radial-gradient(400px_180px_at_10%_-10%,rgba(155,108,183,.28),transparent_60%),radial-gradient(360px_160px_at_90%_0%,rgba(62,211,180,.22),transparent_60%)]" />
            <div className="relative">
              <div className="mb-4">
                <h3 className="text-xl font-semibold">Secure Payment</h3>
                <p className="text-sm text-white/70">Complete your payment below.</p>
              </div>
              {/* PayFast injects its iframe into the DOM; we just host the modal */}
              <div ref={mountRef} id="pf-onsite-container" className="min-h-[420px]" />
              <button
                onClick={onClose}
                className="mt-6 w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm hover:bg-white/15"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
