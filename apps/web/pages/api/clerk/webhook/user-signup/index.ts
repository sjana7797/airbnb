import type { WebhookEvent } from "@clerk/clerk-sdk-node";
import { createUserSchema } from "../../../../../zod/clerk/webhook";

import { createUser } from "../../../../../utils/server/clerk/webhook/createUser";
import { NextApiRequest, NextApiResponse } from "next/types";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const event = request.body as WebhookEvent;

  switch (event.type) {
    case "user.created":
      const user = await createUser(event);
      return response.status(201).json({ user });
    default:
      return response.status(500).json({ error: "Internal Server Error" });
  }
}
