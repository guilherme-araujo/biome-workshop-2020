import { Col } from 'react-bootstrap';
import { Evento } from '../../types/api';

type Props = {
  evento: Evento
  num: number
}

export default function EventItem({ evento, num }: Props) {
  return (
      <>
      <Col xl={2} className={  (num % 2 ? 'bg-row-1' : 'bg-row-2') }>
        <div className="">

          {
            evento.showDate ? (
              evento.inicio.substr(0,5)
            ) : ( '' )
          }

          {
            (evento.fim) ? (
              <>
                <strong> até </strong>
                {evento.fim.substr(0,5)}
              </>
            ) : (
                <> </>
              )}
        </div>
      </Col>
      <Col xl={10} className={  (num % 2 ? 'bg-row-1' : 'bg-row-2') }>
              <strong>{evento.tipo}: </strong>
              <span>{evento.titulo}</span>
              <br/>
              <strong>{evento.speaker}</strong>
      </Col>
      </>

  )
}
