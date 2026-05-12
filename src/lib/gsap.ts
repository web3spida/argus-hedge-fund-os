import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function flashUpdate(el: HTMLElement) {
  gsap.fromTo(el,
    { color: "var(--accent)", backgroundColor: "var(--accent-dim)" },
    { color: "var(--text-primary)", backgroundColor: "transparent", duration: 0.8, ease: "power2.out" }
  );
}

export { gsap };
