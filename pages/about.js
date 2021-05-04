import Link from 'next/link'

export default function About() {
  return <div>
    <h1>Hi I'm Nicky</h1>

    <p>Here is a little bit about me...</p>

    <footer>
      <Link href='/'>
        Home &larr;
      </Link>
    </footer>
  </div>
}