import type { WebhookEvent } from "@clerk/clerk-sdk-node";
import { client } from "../../../../server/primsa-client";
import { NextResponse } from "next/server";

export async function createUser(event: WebhookEvent) {
  if (event.type !== "user.created") return;
  const user = await client.user.create({
    data: {
      email: event.data.email_addresses[0].email_address,
      clerk_id: event.data.id,
      name: `${event.data.first_name ?? ""} ${
        event.data.last_name ?? ""
      }`.trim(),
      image: event.data.image_url,
    },
  });
  return user;
}
