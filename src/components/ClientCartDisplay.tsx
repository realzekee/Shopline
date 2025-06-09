"use client";

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const CartDisplay = dynamic(() => import('@/components/CartDisplay'), {
    ssr: false,
    loading: () => <div>Loading cart...</div>, // Optional loading component
});

export default function ClientCartDisplay() {
    return (
        <Suspense fallback={<div>Loading cart...</div>}>
            <CartDisplay />
        </Suspense>
    );
}