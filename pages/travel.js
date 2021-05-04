import Link from 'next/link'

export default function Travel() {
  return <div>
    <h1>Here Are All The Places I've Been</h1>

    <footer>
      <Link href='/'>
        Home &larr;
      </Link>
    </footer>
  </div>
}