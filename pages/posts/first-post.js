import Link from "next/link";
import Head from "next/head"
import Layout from "../../components/layout"
import styles from '../../styles/Home.module.css'

export default function FirstPost() {
    return(
      <>
      <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <p>
          <Link href="/"><a>Home Page</a></Link>
      </p>
      </Layout>
      </>  
    ) 
}