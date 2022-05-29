import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import axios from "axios";
import Add from "../components/Add";
import AddButton from "../components/AddButton";

export default function Home({ pizzaList, admin }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Featured />
      {admin && <AddButton setIsModalOpen={setIsModalOpen} />}
      <PizzaList pizzaList={pizzaList} />

      {isModalOpen && <Add setIsModalOpen={setIsModalOpen} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;
  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const response = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: response.data,
      admin,
    },
  };
};
