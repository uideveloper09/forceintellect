import { EXPERTISE_CONTENT } from '@/constants/content';
import { IMAGES } from '@/constants/images';
import { VideoPlayer } from '@/components/common/VideoPlayer';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function ExpertiseSection() {
  return (
    <section className="section-padding border-b border-border bg-surface">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionTitle size="large">{EXPERTISE_CONTENT.title}</SectionTitle>
            <p className="mt-5 text-base leading-relaxed text-text-secondary">{EXPERTISE_CONTENT.description}</p>
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
