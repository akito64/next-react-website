import Link from 'next/link'
import styles from 'style/nav.module.css'

export default function Nav() {
    return (
      <nav>
        <ul className={style.list}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>  
            </Link>
            </li>
            <li>
               <Link href="/blog">
                 <a>Blog</a> 
                </Link> 
              </li>  
          </ul>
        </nav>  
    )
}