import React from 'react'
import Button from './Button'

function Banner(props) {
    const primary = {
        text: "Order Now",
        link: "#menu",
        classes: "primary"
    };
    const secondary = {
        text: "Track Order",
        link: "#order",
        classes: "secondary"
    };
    return (
        <section id="landing" className="landing">
            <div className="hero">
                <div className="container hero-container">
                    <div className="hero-content grid grid-center">
                        <h1>{props.title}</h1>
                        <p>{props.text}</p>
                        <div className="flex gap-10">
                            <Button key={primary.text} {...primary} />
                            <Button key={secondary.text} {...secondary} />
                        </div>

                    </div>
                </div>
            </div>
            <div className="empty"></div>
        </section>
    );
}

export default Banner