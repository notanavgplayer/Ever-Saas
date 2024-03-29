import Image from "next/image";

import TestimonialImage01 from "@/public/images/testimonial-01.jpg";
import TestimonialImage02 from "@/public/images/testimonial-02.jpg";
import TestimonialImage03 from "@/public/images/testimonial-03.jpg";

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div>
            <div className="relative isolate">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20" data-aos="fade-down">
                <h2 className="h2 mb-4 tracking-tight text-black">
                  #PluraAI: Client Testimonials Sharing the ❤️ for AI
                  Content Creation
                </h2>
                <p className="text-[17px] lg:text-lg tracking-tight text-zinc-600">
                  The journey from blank page to brilliant content can be
                  daunting. But with Plura AI by your side, it's an
                  exciting adventure! Our clients share their unique stories,
                  highlighting the challenges they faced and the incredible
                  content they were able to create with our help.
                </p>
              </div>

              {/* Testimonials */}
              <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
                {/* 1st testimonial */}
                <div
                  className="flex flex-col h-full p-6 bg-gray-800"
                  data-aos="fade-up"
                >
                  <div>
                    <div className="relative inline-flex flex-col mb-4">
                      <Image
                        className="rounded-full"
                        src={TestimonialImage01}
                        width={48}
                        height={48}
                        alt="Testimonial 01"
                      />
                      <svg
                        className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-blue-600"
                        viewBox="0 0 24 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                      </svg>
                    </div>
                  </div>
                  <blockquote className="text-md grow text-white">
                    — Before Plura AI, writer's block was my nemesis. Now,
                    the AI story generator sparks fresh ideas, and the text
                    expander saves me tons of time on repetitive phrases. It's a
                    game-changer for busy bloggers!
                  </blockquote>
                  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    <cite className="text-gray-200 not-italic">
                      Sarah Johnson
                    </cite>{" "}
                    -{" "}
                    <a className="text-blue-600 transition duration-150 ease-in-out">
                      {" "}
                      Lifestyle Blogger
                    </a>
                  </div>
                </div>

                {/* 2nd testimonial */}
                <div
                  className="flex flex-col h-full p-6 bg-gray-800"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div>
                    <div className="relative inline-flex flex-col mb-4">
                      <Image
                        className="rounded-full"
                        src={TestimonialImage02}
                        width={48}
                        height={48}
                        alt="Testimonial 02"
                      />
                      <svg
                        className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-blue-600"
                        viewBox="0 0 24 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                      </svg>
                    </div>
                  </div>
                  <blockquote className="text-md grow text-white">
                    — My social media engagement was drowning. Plura's
                    image generation tool brought unique visuals to my posts,
                    and text-to-speech created grabby audio clips. My audience
                    loves it!
                  </blockquote>
                  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    <cite className="text-gray-200 not-italic">
                      Alex Rodriguez
                    </cite>{" "}
                    -{" "}
                    <a className="text-blue-600 transition duration-150 ease-in-out">
                      Social Media Influencer
                    </a>
                  </div>
                </div>

                {/* 3rd testimonial */}
                <div
                  className="flex flex-col h-full p-6 bg-gray-800"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div>
                    <div className="relative inline-flex flex-col mb-4">
                      <Image
                        className="rounded-full"
                        src={TestimonialImage03}
                        width={48}
                        height={48}
                        alt="Testimonial 03"
                      />
                      <svg
                        className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-blue-600"
                        viewBox="0 0 24 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                      </svg>
                    </div>
                  </div>
                  <blockquote className="text-md grow text-white">
                    — I wasn't sure how AI could help my writing, but
                    Plura surprised me! It sparks creativity, saves time,
                    and offers a variety of tools for any content need. Give it
                    a try - you won't regret it
                  </blockquote>
                  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    <cite className="text-gray-200 not-italic">David Lee</cite>{" "}
                    -{" "}
                    <a className="text-blue-600 hover:text-gray-200 transition duration-150 ease-in-out">
                      {" "}
                      Entrepreneur
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
