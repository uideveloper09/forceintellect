import { EXPERTISE_CONTENT } from '@/constants/content';
import { IMAGES } from '@/constants/images';
import { VideoPlayer } from '@/components/common/VideoPlayer';
import { Container } from '@/components/ui/Container';

export function ExpertiseSection() {
  const [intro, implementation] = EXPERTISE_CONTENT.description.split(' Our Spectrum ERP ');

  return (
    <section className="section-padding border-b border-border bg-surface">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-['Raleway',sans-serif] text-[2rem] font-normal leading-tight text-[#606060]">
              {EXPERTISE_CONTENT.title}
            </h2>
            <div className="mt-10 space-y-2 font-['Open_Sans',sans-serif] text-[1.25rem] leading-[1.8] text-[#606060]">
              <p>{intro}</p>
              <p>Our Spectrum ERP {implementation}</p>
            </div>
          </div>

          <VideoPlayer
            src={IMAGES.video.erpOverview}
            title="Force Intellect ERP Products & Solutions for Manufacturing SMEs"
          />
        </div>
      </Container>
    </section>
  );
}
