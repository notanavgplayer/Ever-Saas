import { ArrowUpNarrowWide, BookOpen, BotIcon, ChefHatIcon, Image, Newspaper, Speech } from "lucide-react";
import Link from "next/link";

export const Feature = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2 mb-10 -mt-24"  data-aos="fade-up">
      <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-8 border-b sm:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600 sm:w-16 sm:h-16">
              <BotIcon />
            </div>
            <h6 className="mb-2 font-bold leading-5 text-black text-xl">Chat Conversations</h6>
            <p className="mb-3 text-sm text-gray-900">
            Engage your visitors with this interactive tool that allows them to chat with a virtual assistant 24/7. Answer frequently asked questions, provide product recommendations, or even troubleshoot technical issues – all in a natural and engaging way.
            </p>
          </div>
        </div>
        <div className="p-8 border-b lg:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600 sm:w-16 sm:h-16">
              <Image />
            </div>
            <h6 className="mb-2 font-bold leading-5 text-black text-xl">Image Generation</h6>
            <p className="mb-3 text-sm text-gray-900">
            No need for expensive photoshoots! This tool uses artificial intelligence to create unique and high-quality images based on your descriptions. Generate product visuals, illustrate blog posts, or design social media graphics – all within your website.
            </p>
          </div>
        </div>
        <div className="p-8 border-b sm:border-r lg:border-r-0">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600 sm:w-16 sm:h-16">
              <Speech />
            </div>
            <h6 className="mb-2 font-bold leading-5 text-black text-xl">Text to Speech</h6>
            <p className="mb-3 text-sm text-gray-900">
            Enhance accessibility and cater to a wider audience with this tool. Convert website text into natural-sounding audio, allowing visitors to listen to your content while multitasking or browsing hands-free.
            </p>
          </div>
        </div>
        <div className="p-8 border-b lg:border-b-0 lg:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600 sm:w-16 sm:h-16">
              <Newspaper />
            </div>
            <h6 className="mb-2 font-bold leading-5 text-black text-xl">Article Summarizer</h6>
            <p className="mb-3 text-sm text-gray-900">
            Help visitors quickly grasp key points from lengthy articles or blog posts. This tool intelligently condenses content, highlighting the main ideas and saving users valuable time.
            </p>
          </div>
        </div>
        <div className="p-8 border-b sm:border-b-0 sm:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600 sm:w-16 sm:h-16">
            <BookOpen />
            </div>
            <h6 className="mb-2 font-bold leading-5 text-black text-xl">Story Generator</h6>
            <p className="mb-3 text-sm text-gray-900">
            Spark creativity and captivate your audience with this innovative tool. Generate story ideas, outlines, or even full narratives based on your prompts. Perfect for writers, bloggers, or anyone looking for a creative nudge.
            </p>
          </div>
        </div>
        <div className="p-8">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600 sm:w-16 sm:h-16">
              <ArrowUpNarrowWide />
            </div>
            <h6 className="mb-2 font-bold leading-5 text-black text-xl">Text Expander</h6>
            <p className="mb-3 text-sm text-gray-900">
            Boost productivity and eliminate repetitive typing with this AI-powered tool. Create custom shortcuts that automatically expand into frequently used phrases, saving you time and effort.


            </p>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};