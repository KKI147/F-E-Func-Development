import axios from "axios";

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3000/uploads");
  const data = res.data;

  return { props: { data } };
}
