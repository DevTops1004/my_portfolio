import Contact from '@/pages/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact - Daniel Liu',
	description: 'Get in touch with Daniel Liu, a Software Developer specializing in full-stack development.',
};

export default function ContactPage() {
	return <Contact />;
}