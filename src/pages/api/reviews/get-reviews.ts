import type { NextApiRequest, NextApiResponse } from "next";
import Reviews from "utils/schema/Review";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const client = await clientPromise
  // const db = client.db('ReviewT_App')

  if (req.method === "GET") {
    try {
      const reviews = await Reviews.find({});
      return res.json({ status: 200, reviews });
    } catch (error) {
      return res.json({ status: 400, error: "Bad request" });
    }
  }

  return res.json({
    status: 400,
    error: "This API call only accepts GET methods",
  });
}
