import { useRef, useState } from 'react';
import { IMAGES } from '@/constants/images';
import { cn } from '@/utils/cn';

interface VideoPlayerProps {
  src: string;
  title: string;
  className?: string;
}

function VideoPoster({ onPlay, title }: { onPlay: () => void; title: string }) {
  return (
    <div className="absolute inset-0 flex flex-col bg-white">
      <div className="flex flex-1 items-center justify-center px-10 py-8">
        <img
          src={IMAGES.logo}
          alt="Force Intellect — adding value, enabling growth"
          className="max-h-[5.5rem] w-auto max-w-[85%] object-contain sm:max-h-28"
          width={280}
          height={72}
        />
      </div>

      <div className="relative px-3 pb-3 pt-12">
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"
          aria-hidden="true"
        />
        <div className="relative flex items-center gap-3">
          <button
            type="button"
            onClick={onPlay}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label={`Play video: ${title}`}
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
          <span className="shrink-0 text-[11px] tabular-nums text-white/90">0:00</span>
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/25">
            <div className="h-full w-[2%] rounded-full bg-white/90" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function VideoPlayer({ src, title, className }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const handlePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (!hasStarted) {
      video.src = src;
      video.load();
      setHasStarted(true);
    }

    try {
      await video.play();
    } catch {
      setHasStarted(false);
    }
  };

  return (
    <div
      className={cn(
        'video-player relative overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-premium)] ring-1 ring-black/[0.04]',
        className,
      )}
    >
      <div className="relative aspect-video w-full bg-white">
        <video
          ref={videoRef}
          className={cn('h-full w-full bg-black object-contain', !hasStarted && 'invisible')}
          controls={hasStarted}
          preload="none"
          playsInline
          aria-label={title}
        />

        {!hasStarted && <VideoPoster onPlay={handlePlay} title={title} />}
      </div>
    </div>
  );
}
