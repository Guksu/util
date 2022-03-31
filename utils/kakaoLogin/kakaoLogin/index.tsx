import { useRouter } from "next/router";

function KakaoLogin() {
  // ----------- variables ---------------
  const router = useRouter();
  const REST_API_KEY = "2d35dd11e68222099eb09ae0e2c1ce8e";
  const REDIRECT_URI = "http://localhost:3000/kakaoLogin/loginRedirect";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  // ----------- events ---------------

  // ----------- functions ---------------

  return (
    <div>
      <a href={KAKAO_AUTH_URL}>
        <button>KaKaoLogin</button>
      </a>
      <button onClick={() => router.push("/kakaoLogin/profile")}>
        Profile
      </button>
    </div>
  );
}

export default KakaoLogin;
