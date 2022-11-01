export default function (props) {
  return (
    <div class='about-raw'>
      <span>
        <b>{props.label}:</b>
      </span>
      <span>{<a href={props.url}> {props.text}</a>} </span>
    </div>
  )
}
