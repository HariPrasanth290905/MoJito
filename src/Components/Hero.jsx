import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { SplitText, ScrollTrigger } from 'gsap/all'
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

function Hero() {
    const videoRef = useRef(null);
    const isMobile = useMediaQuery({ maxWidth: 768 });

   useGSAP(() => {
  const title = new SplitText('.title', { type: 'chars,words' });
  const subtitle = new SplitText('.subtitle', { type: 'lines' });

  title.chars.forEach(ch => ch.classList.add('text-gradient'));

  gsap.from(title.chars, {
    yPercent: 100,
    stagger: 0.06,
    duration: 1,
    ease: 'expo.out'
  });

  gsap.from(subtitle.lines, {
    opacity: 0,
    yPercent: 100,
    stagger: 0.09,
    delay: 0.7,
    ease: 'expo.out'
  });

  const startTrigger = isMobile ? 'top 50%' : 'center 60%';
  const endTrigger = isMobile ? '120% top' : 'bottom top';

  const video = videoRef.current;

  ScrollTrigger.create({
    trigger: 'video',
    start: startTrigger,
    end: endTrigger,
    scrub: 1,
    pin: true,
    onUpdate: (self) => {
      if (video && video.duration) {
        const targetTime = self.progress * video.duration;
        requestAnimationFrame(() => {
          video.currentTime = targetTime;
        });
      }
    },
  });
}, []);


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
                            <a href="#lattes" className='subtitle' style={{ textAlign: 'left' }}>View Lattes</a>
                        </div>
                    </div>
                </div>
            </section>
           <div className="video absolute inset-0 w-full h-full">
  <video
    ref={videoRef}
    src="/videos/output.mp4"
    muted
    playsInline
    preload='auto'
    className="w-full h-full object-cover"
  />
</div>

        </>
    );
}

export default Hero;
