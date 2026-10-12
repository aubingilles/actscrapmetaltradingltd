import type { SyntheticEvent } from 'react';

// Shown when a product image link is broken or the host blocks embedding.
export const IMAGE_FALLBACK =
  'data:image/svg+xml;charset=utf-8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">' +
      '<rect width="400" height="300" fill="#f3f4f6"/>' +
      '<text x="200" y="158" font-family="sans-serif" font-size="16" fill="#9ca3af" text-anchor="middle">Image unavailable</text>' +
      '</svg>'
  );

export const handleImageError = (e: SyntheticEvent<HTMLImageElement>) => {
  const img = e.currentTarget;
  if (img.src !== IMAGE_FALLBACK) img.src = IMAGE_FALLBACK;
};
