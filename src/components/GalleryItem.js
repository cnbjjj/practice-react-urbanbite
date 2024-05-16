function GalleryItem(props) {
    return (
        <figure className="card ct-25">
            <div className="image"><img src={props.image} alt={props.title} /></div>
            <div className="content flex">
                <div className="card-icon"></div>
                <h2>{props.title}</h2>
                <ul>
                    <li>{props.text}</li>
                </ul>
            </div>
        </figure>
    );
}

export default GalleryItem;