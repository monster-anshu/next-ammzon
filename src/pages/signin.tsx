import { getProviders, signIn, getSession, getCsrfToken } from "next-auth/react";
import { authProviderType } from "../utils/commonTypes";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const signin : React.FC<{providers: authProviderType}> = ({ providers }) : JSX.Element  => {
  return (
  <>
    <Head>
          <title>Amazon - Sign in</title>
    </Head>

  <div className="w-screen h-screen bg-white">
    <div className="flex flex-col items-center pt-14">
      <Link href='/'>
        <Image src={'/amazon_dark_logo.png'} width={150} height={50} alt="amazon logo"/>
      </Link>
      <div className="border-solid border border-[#bfbfbf] rounded-md flex flex-col
          mt-6 max-w-[18em] xs-l:max-w-[23em] p-5">
        <span className="text-3xl pb-4">Sign in</span>

        <div 
          className='flex justify-center mb-4 cursor-pointer
          bg-gradient-to-b from-amazon_grad-start to-amazon_grad-stop
          border-solid border border-x-[#b1820f] border-t-[#c89411] border-b-[#99710d] 
          rounded-[0.3em] py-2 px-4 font-semibold'
          onClick={() => signIn(providers.google.id)}
          >
          <span className="">Sign in with {providers.google.name}</span>
        </div>

        <div className="text-xs">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</div>
 
      </div>
    </div>
  </div>
  </>
  );
}
  
  export default signin;

export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });
  
  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }

  return {
    props: {
      providers : await getProviders(),
      csrfToken: await getCsrfToken(context),
    },
  };
  }

