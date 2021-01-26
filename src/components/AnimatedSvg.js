import React, { createRef, useEffect, useState } from 'react'
import './AnimatedSvg.css';
import BackgroundPatternDesktop from '../images/bg-pattern-desktop.svg'
import BackgroundPatternMobile from '../images/bg-pattern-mobile.svg'
import IllustrationWoman from '../images/illustration-woman-online-desktop.svg'
import IllustrationBox from '../images/illustration-box-desktop.svg'
import useWindowSize from '../hooks/useWindowSize';
import { animated, useSpring } from 'react-spring';

function AnimatedSvg() {

    const windowSize = useWindowSize()
    const [bg, setBgPattern] = useState(undefined)
    const [lg, setLg] = useState(undefined)
    const boxAnim = useSpring({
        from: { marginLeft: '-200px' },
        to: { marginLeft: lg ? '0px' : '110%' },
        config: { mass: 5, },
        reset: true,

    })
    const womanAnim = useSpring({
        from: { bottom: '-400px' },
        to: { bottom: '-120px' },
        config: { mass: 5, friction: 20 },
        reset: true,

    })
    useEffect(() => {
        if (windowSize && windowSize.width)
            if (windowSize.width > 1050) {
                setBgPattern(BackgroundPatternDesktop)
                setLg(true);
            } else {
                setBgPattern(BackgroundPatternMobile)
                setLg(false);
            }
    }, [windowSize])

    return (
        <div className="bgPattern" >
            <div className="containerImgDownTop" >
                <div>
                    <img alt="bg-pattern" className="bgPatternImg" src={bg} alt=" Background Pattern Desktop" ></img>
                </div>
                <animated.img alt="bg-woman" style={womanAnim} className="illWoman" src={IllustrationWoman} alt=" Background Pattern Desktop" ></animated.img>
            </div>
            <animated.img alt="bg-box" className="illBox" style={boxAnim} src={IllustrationBox} alt=" Background Pattern Desktop" ></animated.img>
        </div>
    );
}

export default AnimatedSvg;
