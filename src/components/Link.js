function Link(props) {
    return (
        <a href={props.link ?? ''} className={props.classes ?? ''} onClick={props.click ?? (evt => { })}>{props.text}</a>
    )
}

export default Link;