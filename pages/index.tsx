import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled, {css} from 'styled-components';

const H1 = styled.h1`
  color: red;
`;

const Badge = styled.span`
  margin: 0.5rem;
  padding: 0.25rem 0.5rem;
  font-weight: bold;
  text-align: center;
  color: white;
  background: red;
  border-radius: 0.25rem;
`;

type ButtonProps = {
  color: string;
  backgroundColor: string;
}

const PropButton = styled.button<ButtonProps>`
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  border: 2px solid ${props => props.color};

  font-size: 1.5rem;
  margin: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
`;

const redBox = css`
  padding: 1rem;
  border: 2px solid #ff0000;
  border-radius: 0.25rem;
`;

const blueFont = css`
  color: #1e90ff;
  font-size: 2rem;
`;

const MixinButton = styled.button`
  background: transparent;
  margin: 1rem;
  cursor: pointer;

  ${redBox}
  ${blueFont}
`;

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <H1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </H1>

        <Badge>This is a Badge styled component</Badge>
        <PropButton color="red" backgroundColor="white">Push Me!</PropButton>
        <PropButton color="white" backgroundColor="blue">Push Me!</PropButton>
        <PropButton color="white" backgroundColor="orange">Push Me!</PropButton>
        <PropButton color="grey" backgroundColor="black">Push Me!</PropButton>

        <MixinButton>Push Me!</MixinButton>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
