import type { ContactFormData } from '@/types';

export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean }> {
  // Placeholder for future API integration
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.info('Contact form submission:', data);
  return { success: true };
}
