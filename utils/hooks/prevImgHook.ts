// 이미지 미리보기

const [IMG, setIMG] = useState<string>("");
const [IMG_FILE, setIMG_FILE] = useState<FileList | null>(); //이미지파일

useEffect(() => {
  usePrevImg(IMG_FILE, setIMG);
}, [IMG_FILE]);

function usePrevImg(file: any, setter: any) {
  if (file) {
    const actualFile = file[0];
    const reader = new FileReader();
    console.log(reader);
    reader.onload = () => {
      setter(reader.result);
    };
    reader.readAsDataURL(actualFile);
  }
}

export default usePrevImg;
