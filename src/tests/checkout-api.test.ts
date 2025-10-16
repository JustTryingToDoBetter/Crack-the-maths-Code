import { POST } from "../app/api/payfast/checkout/route";
import { NextRequest } from "next/server";
import {test, expect} from "@playwright/test";

test("checkout builds PayFast form correctly", async () => {
  const formData = new FormData();
  formData.append("name", "Jaydin");
  formData.append("email", "jaydin@example.com");
  const req = new NextRequest("http://localhost:3000/api/payfast/checkout", {
    method: "POST",
    body: formData as any,
  });

  const res = await POST(req);
  const text = await res.text();

  expect(text).toContain("form");
  expect(text).toContain("merchant_id");
  expect(text).toContain("Crack the Maths Code");
});
