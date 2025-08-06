import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { SplitText } from 'gsap/all'

function Hero() {

    useGSAP(() => {
        const title = new SplitText('.title', { type: 'chars,words' });
        const subtitle = new SplitText('.subtitle', { type: 'lines' });
        title.chars.forEach(ch => ch.classList.add('text-gradient'));

        gsap.from(title.chars, {
            yPercent: 100,
            stagger: 0.06,
            duration:1,
            ease: 'expo.out'
        })
        gsap.from(subtitle.lines,
            {
                opacity: 0,
                yPercent: 100,
                stagger: 0.09,
                delay: 0.7,
                ease: 'expo.out'

            }
        )
    }, [])

    return (
        <>
            <section id='hero' className='noisy'>
                <h1 className='title'>Choco Latte</h1>
                <div className='body'>
                    <div className='content'>
                        <div className='space-y-5 hidden md:block'>
                            <p>Crisp.Rich.Sweet</p>
                            <p className='subtitle'>Heavenly Taste <br />in every sip</p>
                        </div>
                        <div className='view-cocktails'>
                            <p className='subtitle'>
                                A smooth blend of rich espresso, steamed milk, and melted chocolate — creamy, comforting, and indulgent.
                            </p>
                            <a href="#lattes">View Lattes</a>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default Hero
