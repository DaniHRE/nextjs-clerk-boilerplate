'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useClerk } from '@clerk/nextjs';
import { Card, CardContent } from '@/components/ui/card';
import { CircleNotch } from '@phosphor-icons/react';

export default function LogoutPage() {
    const router = useRouter();
    const { signOut } = useClerk();

      useEffect(() => {
        const timeout = setTimeout(async () => {
          await signOut();
          router.push('/log-in');
        }, 2000);

        return () => clearTimeout(timeout);
      }, [router, signOut]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-muted">
            <Card className="w-full max-w-md text-center">
                <CardContent className="py-10 flex flex-col items-center gap-4 !p-4">
                    <CircleNotch className="animate-spin h-6 w-6 text-primary" />
                    <h1 className="text-xl font-semibold">Saindo da conta...</h1>
                    <p className="text-muted-foreground text-sm">Você será redirecionado em instantes.</p>
                </CardContent>
            </Card>
        </div>
    );
}