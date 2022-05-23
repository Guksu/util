export default function Regex() {
  //이메일 정규식
  const emailRegex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  //핸드폰 정규식
  const tellRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

  //URL 정규식
  const urlRegex = /^(http(s)?:\/\/)([^\/]*)(\.)(com|net|kr|my|shop)(\/)/gi;

  //숫자 정규식
  const numRegex = /^[0-9\b ]{0,13}$/;

  //숫자,"-" 정규식
  const num2Regex = /^[0-9\b -]{0,13}$/;

  //숫자 + 콤마 변경
  const numWithCommaRegex = (e: string) => {
    //첫번째는 문자를 숫자로 변환
    //두번째는 3자리마다 콤마 추가
    e.replace(/^0+|\D+/g, "").replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
  };
}
