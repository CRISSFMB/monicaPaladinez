
import type { Metadata } from 'next';
import Hero from "./components/Hero/Hero";
import SectionWhyUs from './components/section-why-us/SectionWhyUs';


export const metadata: Metadata = {
  title: 'Home Page',
  description: 'home page description',
  keywords: ['home', 'monica paladinez', "properties in Orlando"],
};


export default function Home() {
  return (
    <main>
      <Hero />
      <SectionWhyUs />
    </main>
  );
}
