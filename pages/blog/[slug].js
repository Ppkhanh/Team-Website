import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {marked} from 'marked'
import Link from 'next/link'
import { Card, Button, Container } from 'react-bootstrap';

export default function MemberPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <>
    <Container className="d-flex justify-content-center p-5">
      <Card style={{ width: '40rem'}} className="mb-5 border-0">
        <Card.Img variant="top" src={cover_image} />
        <Card.Body className="p-4">
            <Card.Text>
              <div dangerouslySetInnerHTML={{ __html: marked(content.toString()) }}></div>
            </Card.Text>
            <Button variant="primary" href="/">Zurück</Button>
        </Card.Body>
      </Card>
    </Container>
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('members'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('members', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}
