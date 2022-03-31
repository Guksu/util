import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import KaKaoProfile from "./profile";
import { useDispatch } from "react-redux";
import { getToken } from "../../store/kakoLogin";

function LoginRedirect() {
  // ----------- variables ---------------
  const router = useRouter();
  const dispatch = useDispatch();
  const { code } = router.query;
  const REST_API_KEY = "2d35dd11e68222099eb09ae0e2c1ce8e";
  const REDIRECT_URI = "http://localhost:3000/kakaoLogin/loginRedirect";
  const CLIENT_SECRET = "0fmzSk6iyFQQPS97Zi42hizwDt60IUqw";

  // ----------- events ---------------

  useEffect(() => {
    if (code) {
      axios
        .post(
          `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}&client_secret=${CLIENT_SECRET}`,
          {},
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          }
        )
        .then((res) => {
          console.log(res);
          dispatch(getToken({ access_token: res.data.access_token }));
          router.push("/kakaoLogin");
        })
        .catch((error) => console.log(error));
    }
  }, [code]);

  // ----------- functions ---------------
  return <div></div>;
}

export default LoginRedirect;
