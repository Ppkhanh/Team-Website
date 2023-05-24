import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Member from '../components/Member'
import { sortByDate } from '../utils'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import Banner from '../components/Banner'; 
export default function Home({ members }) {
  return (
    <div className='m-0'>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossorigin="anonymous"
        />
      </Head>
      <Banner/>
      <Container fluid="md" className='pt-5'>
      <Row className=''>
        {members.map((member, index) => (
          <Member key={index} member={member} />
        ))}
      </Row>

    </Container>

    </div >
  )
}

export async function getStaticProps() {
  // Get files from the members dir
  const files = fs.readdirSync(path.join('members'))

  // Get slug and frontmatter from members
  const members = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('members', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      members: members.sort(sortByDate),
    },
  }
}