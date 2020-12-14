const GET_LANDING_PAGE_CONTENT = /* GraphQL */ `
{
  landPage {
    MainContent {
      Title {
        titleText
      }
      Presentation {
        presentationText
      }
    }
  }
}
`

export default GET_LANDING_PAGE_CONTENT
