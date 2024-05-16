import Navigation from './Navigation';
import Link from './Link';

function Header(props) {
    return (
        <header>
            <div className="container flex flex-sb">
                <h1><Link key={props.title} text={props.title} link="#landing" /></h1>
                <Navigation navs={props.navs} />
            </div>
        </header >
    );
}

export default Header;