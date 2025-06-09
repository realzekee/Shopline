import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MailCheck } from 'lucide-react';

export default function MessageSentPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-20rem)] text-center py-10">
      <MailCheck className="h-24 w-24 text-green-500 mb-6" />
      <h1 className="font-headline text-4xl font-bold mb-4 text-primary">Message Sent!</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-md">
        Thank you for contacting us. We have received your message and will get back to you as soon as possible.
      </p>
      <div className="flex space-x-4">
        <Link href="/">
          <Button size="lg" variant="outline">
            Back to Homepage
          </Button>
        </Link>
        <Link href="/products">
          <Button size="lg">
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
}
