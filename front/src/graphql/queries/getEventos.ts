const GET_EVENTOS = /* GraphQL */ `
{
  diaEventos(sort: "dia:asc"){
    dia
    eventos(sort: "inicio:asc"){
      titulo
      tipo
      inicio
      fim
      speaker
      showDate
    }
  }
}
`

export default GET_EVENTOS
