const GET_EVENTOS = /* GraphQL */ `
{
    eventos{
      titulo
      id
      created_at
      inicio
      fim
      detalhe
      tipo
      speaker
    }
  }
`

export default GET_EVENTOS