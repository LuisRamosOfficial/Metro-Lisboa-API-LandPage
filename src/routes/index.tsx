import { Stylesheet, Title } from "@solidjs/meta";
import { onMount, createResource } from "solid-js";
import styles from "~/styles/landing.module.scss";

const fetchData = async () => {
  const response = await fetch(
    "https://api.metrolisboa.pt:8243/estadoServicoML/1.0.1/estadoLinha/todos",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        accept: "application/json",
      },
    }
  );
  return response.json();
};
onMount(async () => {
  console.log(import.meta.env.VITE_API_TOKEN);
  console.log(await fetchData());
});

export default function Home() {
  const linhas = [
    { name: "Linha Azul", img: "/Azul.png", estado: "On", color: "#1d4f7f" },
    {
      name: "Linha Amarela",
      img: "/Amarela.png",
      estado: "On",
      color: "#7e6a1d",
    },
    { name: "Linha Verde", img: "/Verde.png", estado: "On", color: "#19371c" },
    {
      name: "Linha Vermelha",
      img: "/Vermelha.png",
      estado: "On",
      color: "#7f1d1d",
    },
  ];

  return (
    <main>
      <Title>Metro Lisboa</Title>

      <div class={styles["status-container"]}>
        <h2>Estado da Rede:</h2>
        {linhas.map((linha) => (
          <div
            onMouseEnter={() =>
              document.documentElement.style.setProperty("--color", linha.color)
            }

            class={styles.linebox}
          >
            <span class={styles.linename}>
              <img src={linha.img} alt={linha.name} width="60" />
              <p>{linha.name}</p>
            </span>
            <span class={styles.linestatus}>
              {linha.estado === "On" ? "Operação Normal" : "Interrupção"}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
