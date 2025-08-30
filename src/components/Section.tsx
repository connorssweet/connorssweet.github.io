import React, { ReactNode, forwardRef } from 'react';
import '../styles/Section.css';

const Section = forwardRef<
  HTMLElement,
  {
    id: string;
    className: string;
    title: string;
    children: ReactNode;
  }
>(({ id, className = '', title, children, ...rest }, ref) => (
  <section
    id={id}
    className={`section ${className}`}
    ref={ref as React.RefObject<HTMLElement>}
    {...rest}
  >
    {title && <h2>{title}</h2>}
    {children}
  </section>
));

Section.displayName = 'Section';

export default Section;
