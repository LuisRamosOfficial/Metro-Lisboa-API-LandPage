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
    <main>
      <Title>Metro Lisboa</Title>
      <nav>
      <img />
      <h1>Welcome to Metro Lisboa</h1>
      </nav>
      

      <div class="status-container">
        <h2>Estado da Rede:</h2>
      </div>
    </main>
  );
}
