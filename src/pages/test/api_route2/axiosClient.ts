import axios from "axios";
const serverSideBaseURL = "http://localhost:4100/api/t2";
const clientSideBaseURL = "http://localhost:3000/api/t2";

// GETリクエスト
export const getJSON = async (): Promise<any> => {
    const url = serverSideBaseURL;
    const response = await axios.get(url);
    console.log(response.data);
    console.log("get");
    return response.data;
};

// POSTリクエスト
export const postJSON = async (): Promise<any> => {
    const url = "https://jsonplaceholder.typicode.com/posts"; // サンプルコード用、実際リクエストはしない
    const data = {
        title: "foo",
        body: "bar",
        userId: 1,
    };
    const response = await axios.post(url, data);
    console.log(response.data);
    console.log("post");
};
