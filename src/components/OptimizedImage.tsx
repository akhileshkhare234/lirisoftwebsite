import React from 'react';

type OptimizedImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  referrerPolicy?: React.ImgHTMLAttributes<HTMLImageElement>['referrerPolicy'];
};

function optimizeSrc(src: string) {
  if (!src.includes('images.unsplash.com')) return src;

  const hasQuery = src.includes('?');
  const separator = hasQuery ? '&' : '?';
  if (src.includes('fm=webp')) return src;

  return `${src}${separator}auto=format&fm=webp&q=75`;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  referrerPolicy,
}) => {
  return (
    <img
      src={optimizeSrc(src)}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      referrerPolicy={referrerPolicy}
    />
  );
};
