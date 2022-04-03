//현재시간 가져오기

function useGetCurrent() {
  const date = new Date();
  const year = date.getFullYear().toString().slice(2);

  let month: any = date.getMonth() + 1;
  month = month < 10 ? "0" + month.toString() : month.toString();

  let day: any = date.getDate();
  day = day < 10 ? "0" + day.toString() : day.toString();

  let hour: any = date.getHours();
  hour = hour < 10 ? "0" + hour.toString() : hour.toString();

  let minites: any = date.getMinutes();
  minites = minites < 10 ? "0" + minites.toString() : minites.toString();

  let seconds: any = date.getSeconds();
  seconds = seconds < 10 ? "0" + seconds.toString() : seconds.toString();

  return year + month + day + hour + minites + seconds;
}

export default useGetCurrent;
