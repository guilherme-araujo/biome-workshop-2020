import { GetStaticProps } from 'next'
import { Container } from 'react-bootstrap'

import client from '../graphql/client'
import GET_EVENTOS from '../graphql/queries/getEventos'

import { Evento } from '../types/api'

import Layout from '../components/Layout'
import EventItem from '../components/EventItem'
import HeadBanner from '../components/HeadBanner'

type Props = {
  eventos: Array<Evento>
}

const IndexPage = ({ eventos }: Props) => (
  <Layout title="Workshop 2021 - BioME">
    <HeadBanner>Workshop 2021 - BioME</HeadBanner>
    <Container className="py-5">
      {eventos.map((evento, i) => (
        <EventItem evento={evento} key={i} />
      ))}
    </Container>

  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const { eventos } = await client.request(GET_EVENTOS)

  return {
    props: {
      eventos
    }
  }
}

export default IndexPage

