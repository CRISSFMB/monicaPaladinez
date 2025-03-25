import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Service Page',
    description: 'service page description',
    keywords: ['service', 'monica paladinez'],
};

export default function ServicePage() {
    return (
        <div>
            <h1>ServicePage</h1>
        </div>
    );
}