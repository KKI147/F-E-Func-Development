import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface FormTypes {
  email: string;
  password: string;
}

// const useQueryClient=useQueryClient()
// const Api = () => {
//   const queryClient = useQueryClient();
//   const getJoin = useQuery("login", () =>
//     axios.get(`${process.env.NEXT_PUBLIC_API_URL}/join`).then((result) => {
//       return result.data;
//     })
//   );
//   const postLogin = async (login: FormTypes): Promise<FormTypes> => {
//     const { data } = await axios.post<FormTypes>(
//       `${process.env.NEXT_PUBLIC_API_URL}/join`,
//       login
//     );
//     return data;
//   };
//   return (
//     <div>
//       {getJoin.isLoading && "로딩중"}
//       {getJoin.error && "접속실패"}
//       {getJoin.data && getJoin.data}
//     </div>
//   );
// };
// export const postLogin = async (login: FormTypes): Promise<FormTypes> => {
//   const { data } = await axios.post<FormTypes>(
//     `${process.env.NEXT_PUBLIC_API_URL}/join`,
//     login
//   );
//   return data;
// };

// export const postLogin = useMutation() => {
// return axios.post(API_URL + url, data);
// }

export const get = async (url: string, data: object) => {
  return await axios.get<FormTypes>(API_URL + url, { data });
};

export const post = async (url: string, data: object) => {
  return await axios.post<FormTypes>(API_URL + url, { data });
};
export const uploadPost = async (url: string, data: any, headers: any) => {
  return await axios.post<any>(API_URL + url, data, headers);
};

export const put = async (url: string, data: object) => {
  return await axios.put<FormTypes>(API_URL + url, { data });
};

export const cancel = async (url: string, data: object) => {
  return await axios.delete<FormTypes>(API_URL + url, { data });
};
