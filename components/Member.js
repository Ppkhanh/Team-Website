import Link from 'next/link'
import { Card, Button, CardImg, Col } from 'react-bootstrap';

export default function Member({ member }) {
  return (
<Col className="d-flex justify-content-center">
    <Card style={{ width: '20rem'}} className="mb-5 text-center border-0">
      <Card.Img variant="top" src={member.frontmatter.cover_image} />
    <Card.Body>
        <Card.Title>{member.frontmatter.title}</Card.Title>
          <Card.Text>
            Alter: {member.frontmatter.age}
          </Card.Text>
          <Card.Text>
            Skills: {member.frontmatter.skill}
          </Card.Text>
          <Card.Text>
            {member.frontmatter.semester}. Fachsemester
          </Card.Text>
          <Card.Text>
            Job: {member.frontmatter.job}
          </Card.Text>
        <Button variant="primary" href={`/blog/${member.slug}`}>Mehr erfahren</Button>
    </Card.Body>
    </Card>
    </Col>


  )
}
