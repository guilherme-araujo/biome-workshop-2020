export type Evento = {
  titulo?: string
  inicio: string
  fim?: string
  tipo: string
  speaker?: string
  showDate: boolean
}

export type DiaEvento = {
  dia: string,
  eventos: Array<Evento>
}

export type LandingPageContent = {
  MainContent: {
    Title: {
      titleText: string
    },
    Presentation: {
      presentationText: string
    }
  }
}
