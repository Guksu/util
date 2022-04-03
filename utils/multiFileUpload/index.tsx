import { ChangeEventHandler, useState } from "react";

function FileUpload() {
  const [file1, setfile1] = useState<FileList | null>();
  const [file2, setfile2] = useState<FileList | null>();
  const [file3, setfile3] = useState<FileList | null>();
  const [fileArr, setFileArr] = useState<any[]>();
  console.log(file2);

  const onFileUpload: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.currentTarget.files && e.currentTarget.files.length < 4) {
      if (!fileArr) {
        setFileArr(Array.from(e.currentTarget.files));
      } else if (fileArr && fileArr.length + e.currentTarget.files.length < 4) {
        setFileArr([...fileArr, ...Array.from(e.currentTarget.files)]);
      } else {
        alert("파일은 3개 까지만 업로드 가능");
      }
    } else {
      alert("파일은 3개 까지만 업로드 가능");
    }
  };

  const onSubmitClick = () => {
    if (fileArr) {
      {
        fileArr[0] && setfile1(fileArr[0]);
      }
      {
        fileArr[1] && setfile2(fileArr[1]);
      }
      {
        fileArr[2] && setfile3(fileArr[2]);
      }
    }
  };

  return (
    <div>
      <input type={"file"} multiple onChange={onFileUpload} />
      <ul>
        {fileArr?.map((item) => {
          return (
            <div key={item.lastModified}>
              <li>{item.name}</li>
              <button
                onClick={() => {
                  setFileArr(
                    fileArr.filter(
                      (items) => items.lastModified !== item.lastModified
                    )
                  );
                }}
              >
                X
              </button>
            </div>
          );
        })}
      </ul>
      <button onClick={onSubmitClick}>제출</button>
    </div>
  );
}

export default FileUpload;
