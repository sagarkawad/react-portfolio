import React from 'react';
import { useScrollTo } from '../../hooks/useScrollTo';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  disableBlue?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ 
  href, 
  children, 
  className = '', 
  disableBlue = false 
}) => {
  const scrollTo = useScrollTo();
  const targetId = href.replace('#', '');

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollTo(targetId);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`relative group ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {!disableBlue && (
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
      )}
    </a>
  );
};