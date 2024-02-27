/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/12Ft5O0ppWo
 */

import G2 from "@/public/images/G2.png";
import Image from "next/image";


export function Hero2() {
  return (
    <section className="max-w-7xl mx-auto py-8"
    data-aos="fade-up"
    data-aos-delay="200">
      <div className="lg:flex justify-between items-center md:grid grid-cols-1">
        <div className="text-center">
          <h2 className="text-xl lg:text-2xl font-bold text-black">7,000,000+</h2>
          <p className="text-sm lg:text-lg text-gray-700 mt-2">happy copywriters, marketers & entrepreneurs</p>
        </div>
        <div className="text-center">
          <h2 className="text-xl lg:text-2xl font-bold text-black">4.9/5</h2>
          <p className="text-sm lg:text-lg text-gray-700 mt-2">satisfaction rating from 1000+ reviews on G2</p>
        </div>
        <div className="text-center">
          <h2 className="text-xl lg:text-2xl font-bold text-black">25,000,000+ hours</h2>
          <p className="text-sm lg:text-lg text-gray-700  mt-2">and $500 million+ saved in content writing so far</p>
        </div>
      </div>
      <div className="flex justify-center mt-4">
      <Image
                  className="h-7 w-10"
                  src={G2}
                  width={540}
                  height={405}
                  alt="Features 02"
                />
        <p className="text-sm lg:text-lg font-semibold text-gray-600 ml-2 mr-5">4.9/5</p>
      </div>
    </section>
  )
}