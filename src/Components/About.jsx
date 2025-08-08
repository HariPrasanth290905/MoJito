import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

function About() {


    useGSAP(() => {

        const aboutSplit = SplitText.create('#about h2', { type: 'words' });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top center",
            }
        })
        tl
            .from([aboutSplit.words, '.badge'], {
                yPercent: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.02,
                ease: "expo.out"
            })
            .from('.top-grid div, .bottom-grid div',
                {
                    opacity: 0,
                    duration: 1,
                    stagger: 0.04,
                    ease: "power1.inOut"
                }, '-=0.2'
            )


    }, [])


    return (
        <div id='about'>
            <div className='mb-16 md:px-0 px-5'>
                <div className='content'>
                    <div className='md:col-span-8'>
                        <p className='badge'>Latte Délicieuse</p>
                        <h2>
                            Welcome to Choco Latte where we blend <span className='text-white'>-</span>
                            rich flavors of chocolate
                        </h2>
                    </div>
                    <div className='sub-content'>
                        <p>
                            At Choco Latte, we believe in the magic of chocolate. Our lattes are crafted with the finest ingredients, ensuring every sip is a delightful experience. From classic recipes to innovative creations, we invite you to explore the world of chocolate lattes like never before.
                        </p>
                        <div>
                            <p className='md:text-3xl text-xl font-bold'>
                                <span>4.5</span>/5

                            </p>
                            <p className='text-sm text-white-100'>Holding More than 98 country brances for 20+ Years</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='top-grid'>
                <div className='md:col-span-3'>
                    <img src="/images/abt1.png" alt="" />
                </div>
                <div className='md:col-span-6'>
                    <img src="/images/abt2.png" alt="" />
                </div>
                <div className='md:col-span-3'>
                    <img src="/images/abt3.png" alt="" />
                </div>
            </div>
            <div className='bottom-grid'>
                <div className='md:col-span-8'>
                    <img src="/images/abt4.png" alt="" />
                </div>
                <div className='md:col-span-4'>
                    <img src="/images/abt5.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default About;
