import ProtectedLayout from '@/components/ProtectedLayout';

export default function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  return <ProtectedLayout>{children}</ProtectedLayout>;
}
