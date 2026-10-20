import React from 'react';

interface AbtLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  alt?: string;
}

export const AbtLogo: React.FC<AbtLogoProps> = ({ 
  className = "h-12 sm:h-14 md:h-16 lg:h-[70px] w-auto shrink-0", 
  variant = 'light',
  alt = "ABT Environmental"
}) => {
  // Use exact picture uploaded by user without modifying it:
  // Top header: exact image_37104ec2.png on white background
  // Footer: exact image_20a90b7a.png on matching dark green background #123C32
  const logoSrc = variant === 'light' 
    ? '/assets/aistudio/image_37104ec2.png' 
    : '/assets/aistudio/image_20a90b7a.png';

  const width = variant === 'light' ? 2000 : 2016;
  const height = 512;

  return (
    <img 
      src={logoSrc}
      alt={alt}
      width={width}
      height={height}
      style={{ aspectRatio: `${width} / ${height}` }}
      className={`shrink-0 block select-none object-contain ${className}`}
      loading="eager"
      decoding="async"
    />
  );
};
