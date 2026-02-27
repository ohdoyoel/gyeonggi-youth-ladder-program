"use client";

import { useEffect, useRef, ReactNode } from "react";

type Variant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade-in"
  | "scale-up"
  | "blur-in";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 500,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.setProperty("--scroll-delay", `${delay}ms`);
    el.style.setProperty("--scroll-duration", `${duration}ms`);

    let revealed = false;
    const reveal = () => {
      if (revealed) return;
      revealed = true;
      el.classList.add("scroll-revealed");
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          if (once) observer.unobserve(el);
        } else if (!once) {
          revealed = false;
          el.classList.remove("scroll-revealed");
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      },
    );

    // 페이지 바닥에 도달하면 남은 요소 모두 reveal
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200
      ) {
        reveal();
        if (once) {
          window.removeEventListener("scroll", handleScroll);
          observer.unobserve(el);
        }
      }
    };

    observer.observe(el);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [delay, duration, once]);

  return (
    <div ref={ref} className={`scroll-reveal scroll-${variant} ${className}`}>
      {children}
    </div>
  );
}
