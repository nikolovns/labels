// import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "../utils/api";
import { Container, Typography } from "@mui/material";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Animals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container maxWidth="sm">
          <Typography sx={{ mt: '100px' }}>
            Please, go to <Link style={{ textDecoration: 'underline' }} href="/animals">Animal</Link> page and add animal and if you want label/s to it
          </Typography>
        </Container>
      </main>
    </>
  );
};

export default Home;
