import { MOBILE_WIDTH } from './UseIsMobile';

export const FadeInSectionItems = <T>(
  arr: T[],
  sectionRef: React.MutableRefObject<HTMLDivElement | null>,
  fn: (_: React.SetStateAction<number[]>) => void
) => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        let delay = 0;
        arr.forEach((_, index) => {
          setTimeout(() => {
            fn((prev) => [...prev, index]);
          }, delay);
          delay += 500;
        });
      }
    },
    { threshold: window.innerWidth < MOBILE_WIDTH ? 0.1 : 0.2 }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => {
    if (sectionRef.current) {
      observer.unobserve(sectionRef.current);
    }
  };
};

export const FadeInItems = <T>(
  arr: T[],
  fn: (_: React.SetStateAction<T[]>) => void,
  delayBetween: number
) => {
  let delay = 0;
  arr.forEach((index) => {
    setTimeout(() => {
      fn((prev) => [...prev, index]);
    }, delay);
    delay += delayBetween;
  });
};
