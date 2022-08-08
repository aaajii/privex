import axios from "axios";

export const fetchData = async () => {
  const { data: response } = await axios.get(
    "https://aji-privex.free.beeceptor.com/data"
  );

  return response.data;
};
