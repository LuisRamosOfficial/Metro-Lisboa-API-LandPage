import { Title } from "@solidjs/meta";
import { createResource } from "solid-js";
import "~/styles/landing.scss";


const fetchData = async () => {
  const response = await fetch("https://api.metrolisboa.pt:8243/estadoServicoML/1.0.1/estadoLinha/todos", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
      accept: "application/json",
    },
  });
  return response.json();
}

export default function Home() {
  return (
    <>
      <Title>Metro Lisboa</Title>
      <h1>Welcome to Metro Lisboa</h1>
      <h2>Get data:</h2>
      <button onClick={async () => {
        const data = await fetchData();
        console.log(data);
      }}>Fetch Metro Data</button>
    </>
  );
}
