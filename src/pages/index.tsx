import Layout from '@/components/Layout'
import Link from 'next/link'
import { useLoginCheck } from '../hooks/useLoginCheck';

export default function Home() {
    const isLogin = useLoginCheck();
  return (
    <Layout>
      <section className="h-screen w-4/5 max-w-5xl mx-auto flex items-center justify-center flex-col">
      <h1 className="mb-4 text-green-500 text-3xl">サンプル</h1>
        <p className="mb-2 text-center">sample text</p>
        <Link href="/login">
        こちら
      </Link>
      <button className="btn-blue">Let's Start!!</button>
      </section>
    </Layout>
  )
}
