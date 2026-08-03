import Experience from '@/pages/Experience';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Experience - Daniel Liu',
	description: 'Daniel Liu\'s professional experience as a Software Developer, including projects and technical expertise.',
};

export default function ExperiencePage() {
	return <Experience />;
}