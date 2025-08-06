import { useGSAP } from '@gsap/react'
import { navLinks } from '../Constants/index'
import gsap from 'gsap'
function Navbar() {

    useGSAP(() => {
        const tween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top'
            }
        });

        tween.fromTo('nav',
            {
                backgroundColor: 'transparent'
            },
            {
                backgroundColor: '#00000050',
                duration: 1,
                ease: 'power1.inOut'
            }
        )
    }, [])
    return (
        <nav>
            <div>
                <a href="#home" className='flex items-center gap-3'>
                    <img src="/images/logo2.png" className='w-12' alt="logo" />

                    <p className=''>IrahIqu</p>

                </a>

                <ul>
                    {
                        navLinks.map(
                            links => (
                                <li key={links.id}>
                                    <a href={`#${links.id}`} >
                                        {links.title}
                                    </a>
                                </li>

                            )
                        )
                    }
                </ul>
            </div>

        </nav>
    )
}

export default Navbar
