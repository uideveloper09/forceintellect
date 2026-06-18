import { useEffect, useState } from 'react';
import { cn } from '@/utils/cn';
import { getGoogleMapsEmbedUrl } from '@/utils/maps';

interface GoogleMapEmbedProps {
  query: string;
  title: string;
  locationLabel?: string;
  className?: string;
}

const LOADER_DOTS = ['#1877F2', '#FF0000', '#0A66C2', '#103f6b'] as const;

function MapLoadingState({ locationLabel }: { locationLabel?: string }) {
  return (
    <div
      className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-surface/95"
      role="status"
      aria-live="polite"
      aria-label={locationLabel ? `Loading map for ${locationLabel}` : 'Loading map'}
    >
      <div className="flex items-center gap-2.5" aria-hidden="true">
        {LOADER_DOTS.map((color, index) => (
          <span
            key={color}
            className="map-loader-dot h-2.5 w-2.5 rounded-full"
            style={{
              backgroundColor: color,
              animationDelay: `${index * 0.15}s`,
            }}
          />
        ))}
      </div>
      {locationLabel ? (
        <p className="mt-3 text-xs font-medium text-text-muted">{locationLabel}</p>
      ) : null}
    </div>
  );
}

export function GoogleMapEmbed({ query, title, locationLabel, className }: GoogleMapEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [query]);

  return (
    <div className={cn('relative overflow-hidden bg-surface-muted', className)}>
      {!loaded && <MapLoadingState locationLabel={locationLabel} />}
      <iframe
        title={title}
        src={getGoogleMapsEmbedUrl(query)}
        className={cn(
          'h-full w-full border-0 transition-opacity duration-500 motion-reduce:transition-none',
          loaded ? 'opacity-100' : 'opacity-0',
        )}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
