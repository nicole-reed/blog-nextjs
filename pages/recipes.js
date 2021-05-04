import Link from 'next/link'

export default function Recipes() {
  return <div>
    <h1>Here Are Some Of My Favorite Things To Make</h1>

    <footer>
      <Link href='/'>
        Home &larr;
      </Link>
    </footer>
  </div>
}