function Section(props) {
    return (
        <section id={props.id} className={`section ${props.classes}`}>
            <div className="section-title">
                <h3>{props.title}</h3>
                <p>{props.tagline}</p>
            </div>
            <div className="container">
                {props.content}
            </div>
        </section>
    )
}

export default Section;