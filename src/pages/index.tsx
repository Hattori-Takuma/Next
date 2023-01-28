import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import './index.css';
// import PageRouter from '../routes/PageRouter';



  const inter = Inter({ subsets: ['latin'] })

  const container = document.getElementById('root')!;
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
      
      </Provider>
    </React.StrictMode>
  );







//(下記一旦削除仮)

// export default function Home() {
//   return (
//     <>
//       <section className="h-screen w-4/5 max-w-5xl mx-auto flex items-center justify-center flex-col">
//       <h1 className="mb-4 text-green-500 text-3xl">サンプル</h1>
//         <p className="mb-2 text-center">sample text</p>
//         <Link href="/login">
//         こちら
//       </Link>
//       <button className="btn-blue">Let's Start!!</button>
//       </section>
//     </>
//   )
// }
