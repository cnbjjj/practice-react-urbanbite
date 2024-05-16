import Section from "./Section";
import GalleryItem from "./GalleryItem";

function Gallary(props) {
    const config = {
        ...props.section,
        content: <div className="flex flex-wrap flex-sb">{props.items.map(item => <GalleryItem key={item.title} {...item} />)}</div>
    };
    return (<Section {...config} />);
}

export default Gallary;