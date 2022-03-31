import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { access_token } = req.query;

  axios
    .post(
      `https://kapi.kakao.com/v1/user/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      }
    )
    .then((response) => res.json(response.data))
    .catch((error) => console.log(error));
}

export default handler;
