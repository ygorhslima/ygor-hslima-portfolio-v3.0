import { redirect } from 'next/navigation';

export default function RootPage() {
  // No build estático, o Next gera um meta-refresh ou redirecionamento via JS
  redirect('/home');
  return null;
}