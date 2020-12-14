import ReactMarkdown from "react-markdown";
import { strapiAddr } from '../../utils/strapiAddr'

type Props = {
  text: string
}

export default function TextDisplay( { text } : Props) {
  text = text.replace('(/uploads','('+strapiAddr+'/uploads')
  return (
    <div className="textMarkdown">
      <ReactMarkdown escapeHtml={true} source={text} />
    </div>
  )
}
