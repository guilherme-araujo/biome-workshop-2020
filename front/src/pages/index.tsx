import { GetStaticProps } from 'next'
import { Container } from 'react-bootstrap'

import client from '../graphql/client'
import GET_EVENTOS from '../graphql/queries/getEventos'
import GET_LANDING_PAGE_CONTENT from '../graphql/queries/getLandingPageContent'

import { DiaEvento, LandingPageContent } from '../types/api'

import Layout from '../components/Layout'
import EventDay from '../components/EventDay'
import HeadBanner from '../components/HeadBanner'
import TextDisplay from '../components/TextDisplay'

type Props = {
  diaEventos: Array<DiaEvento>
  landPage: LandingPageContent
}

const IndexPage = ({ diaEventos, landPage }: Props) => (
  <Layout title={landPage.MainContent.Title.titleText}>
    <HeadBanner>{landPage.MainContent.Title.titleText}</HeadBanner>

    <Container className="py-5">
      <TextDisplay text={ landPage.MainContent.Presentation.presentationText } />
      <h5>Programação:</h5>
      {diaEventos.map((dia, i) => (
        <EventDay diaEvento={dia} key={i} />
      ))}
    </Container>

  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const { diaEventos } = await client.request(GET_EVENTOS)
  const { landPage } = await client.request(GET_LANDING_PAGE_CONTENT)

  return {
    props: {
      diaEventos,
      landPage
    }
  }
}

export default IndexPage

