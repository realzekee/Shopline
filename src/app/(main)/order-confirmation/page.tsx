import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

export default function OrderConfirmationPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-20rem)] text-center py-10">
      <CheckCircle2 className="h-24 w-24 text-green-500 mb-6" />
      <h1 className="font-headline text-4xl font-bold mb-4 text-primary">Order Confirmed!</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-md">
        Thank you for your purchase. Your order has been successfully placed and is being processed. You'll receive an email confirmation shortly.
      </p>
      <Link href="/products">
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Continue Shopping
        </Button>
      </Link>
    </div>
  );
}
