import Link from 'next/link'
import Router from 'next/router'
import { googleLogin } from "../models/authApplicationServics"


const handler = (path:string) => {
  Router.push(`${path}/`)
}
  
  const google = async () => {
    const result = await googleLogin()
  handler('/chat')
  }


export default function login() {
  return (
    <>
      
      <Link href="/">
        Homeに戻る
      </Link>

     
      
     <button onClick={google}>
        googleログイン
      </button>


      
      
   
    </>
  )
}
