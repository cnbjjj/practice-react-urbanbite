import SocialLinks from './SocialLinks'

function Footer(props) {
    return (
        <footer>
            <div className="container flex flex-sb">
                <SocialLinks {...props} />
                <div className="copyright">&copy;2024 UrbanBite</div>
            </div>
        </footer>
    )
}

export default Footer