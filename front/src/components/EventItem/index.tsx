import { Row, Col } from 'react-bootstrap';
import Moment from "react-moment";
import { Evento } from '../../types/api';

type Props = {
  evento: Evento
}

export default function EventItem({ evento }: Props) {
  return (
    <Row className="p-3">
      <Col xl={8} lg={8} md={6} sm={12} xs={12} className="">
        <div className="">
          <Moment format="DD/MM/YYYY HH:mm">{evento.inicio}</Moment>
          {
            (evento.fim) ? (
              <>
                <strong> até </strong>
                <Moment format="HH:mm">{evento.fim}</Moment>
              </>
            ) : (
              <> </>
          )}
        </div>
      <div className="">{evento.tipo}</div>
      <div className="">{evento.detalhe}</div>
      <div className="">{evento.speaker}</div>
      </Col>
    </Row >
  )
}
