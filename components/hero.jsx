"use client";

import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { heroLeftLeaf, heroRightLeaf } from "@/constants/images";

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });
  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>

        <Image src={heroLeftLeaf} className="left-leaf" alt="left-leaf" width={200} height={200} />

        <Image
          src={heroRightLeaf}
          className="right-leaf"
          alt="right-leaf"
          width={200}
          height={200}
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients, creative flair, and
                timeless recipes — designed to delight your senses.
              </p>
              <Link href="#cocktails">View cocktails</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
