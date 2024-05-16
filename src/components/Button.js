import Link from './Link';
function Button(props) {
    const button = {
        ...props,
        classes: `theme-button ${props.classes}`
    }
    return (
        <Link {...button} />
    )
}

export default Button;
