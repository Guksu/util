import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { useRouter } from "next/router";

function KaKaoProfile() {
  const router = useRouter();
  const tokenSelector = useSelector(
    (state: RootState) => state.kakaoLogin.value
  );

  const [name, setName] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    axios
      .get(`/api/profile?access_token=${tokenSelector.access_token}`)
      .then((res) => {
        setName(res.data.profile.nickname);
        setProfileImg(res.data.profile.profile_image_url);
        setEmail(res.data.email);
      });
  }, []);

  const onLogOutClick = () => {
    axios
      .get(`/api/logout?access_token=${tokenSelector.access_token}`)
      .then((res) => {
        res.status === 200 && router.push("/kakaoLogin");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div>
        <div>닉네임 : {name}</div>
        <img src={profileImg} alt={"프로필 이미지"} width={50} height={50} />
        <div>이메일 : {email}</div>
        <button onClick={onLogOutClick}>LogOut</button>
      </div>
    </>
  );
}

export default KaKaoProfile;
