import Link from './Link';

function SocialLinks(props) {
    return (
        <ul className="contact flex flex-sb flex-center gap-20">
            {props.socials.map(social => (
                <li key={social.faicon} className="grid grid-center">
                    <Link key={social.text} link={social.link} text={<i className={`fa-brands ${social.faicon}`}></i>} />
                </li>
            ))}
        </ul>
    );
}

export default SocialLinks;