export const metadata = {
  title: "Plura - AI Powered Tools!",
  description: "Page description",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Zigzag from "@/components/zigzag";
import Testimonials from "@/components/testimonials";
import Header from "@/components/ui/header";
import { Hero2 } from "@/components/hero2";
import { Feature } from "@/components/logoclouds";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Feature/>
      <Zigzag />
      <Testimonials />
    </>
  );
}
