"use client";

import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { heroLeftLeaf, heroRightLeaf } from "@/constants/images";

const Hero = () => {
  useGSAP(() => {}, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1>MOJITO</h1>

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
