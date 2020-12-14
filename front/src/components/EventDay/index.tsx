import { Row, Col } from 'react-bootstrap';
import { DiaEvento } from '../../types/api';
import EventItem from '../EventItem';

type Props = {
  diaEvento: DiaEvento
}

export default function EventDay({ diaEvento }: Props) {
  const date = new Date(diaEvento.dia)
  return (
    <>
    <Row className="p-3">
      <Col xl={12} className="text-white bg-info">
          { date.toLocaleDateString('pt-BR') }
      </Col>

    </Row>
    <Row className='p-3 '>
    { diaEvento.eventos.map((evento, i) => (
      <EventItem evento={evento} key={i} num={i} />
    ))}
    </Row>
    </>
  )
}
