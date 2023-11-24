import Link from 'next/link'
import style from 'styles/logo.module.css'

export default function Logo({ boxOn = false}) {
    return (
      <Link href="/">
        <a className={boxOn ? StyleSheet.box : StyleSheet.basic}>CUBE</a>
      </Link>  
    )
}