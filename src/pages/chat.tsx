import Link from 'next/link'
import { selectUser } from '../features/userSlics'
import { useAppSelector } from '../hooks/useRTK';




export default function chat() {
    const user = useAppSelector(selectUser);

  
  return (
    <>
      
       
<h1>a</h1>
      
       <Link href="/">
        Homeに戻る
      </Link>


       <div >
         {/* <Avatar alt="User" src={user.photoUrl} /> */}
         {/* <div >{user.displayName}</div> */}
           <div>{user.email}</div>
      </div>




    </>
  )
}