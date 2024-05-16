import Link from "./Link";

function Navigation(props) {
    return (
        <nav>
            <ul className="flex gap-40">
                {
                    props.navs.map(
                        nav => <li key={nav.text}><Link key={nav.text} {...nav} /></li>
                    )
                }
            </ul>
        </nav>
    )
}

export default Navigation;