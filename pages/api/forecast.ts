// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  results: {}
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { lat,lon } = req.query
  res.status(200).json({ results: {lat: lat, lon:lon}})
}
