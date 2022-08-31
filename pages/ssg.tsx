import {GetStaticProps, NextPage} from "next";
import Head from "next/head";
import {CountButton} from "../sharedComponents/CountButton";

type SSGProps = {
  message: string
}

const SSG: NextPage<SSGProps> = (props) => {
  const {message} = props;
  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>SSG</h1>
        <p>
          このページは静的サイトによってビルド時に生成されたページです
        </p>
        <p>
          {message}
        </p>
        <CountButton label="Count here" maximum={20} />
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps<SSGProps> = async (_) => {
  const timestamp = new Date().toLocaleString();
  const message = `/ssg のページは ${timestamp} に生成されました`
  console.log(message);
  return {
    props: {
      message
    }
  }
}

export default SSG
