import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { access_token } = req.query;

  axios
    .get(`https://kapi.kakao.com/v2/user/me`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    })
    .then((response) => {
      res.json(response.data.kakao_account);
    })
    .catch((error) => console.log(error));
}

export default handler;
