import Head from "next/head";
import React, { useEffect } from "react";
import {Header, Banner, ProductFeed} from "../components";
import fetchFakeStoreAPI from "../utils/fetchFakeStoreAPI";
import { storeProductType } from "../utils/commonTypes"; 


const Home : React.FC<{products: storeProductType[]}> = ({products}) : JSX.Element => {
  return (
    <div>
      <Head>
        <title>Amazon - Online Shopping site</title>
      </Head>
      <div>

        {/* HomePage Navbar */}
        <Header /> 

        <main className="max-w-screen-2xl mx-auto">
          <Banner />
          <ProductFeed products = {products}/>
        </main>

      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products : storeProductType[] = await fetchFakeStoreAPI()
  return {
    props : {
      products
    },  
  };
  }

export default Home;