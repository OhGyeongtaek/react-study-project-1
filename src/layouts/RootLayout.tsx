import { Outlet } from 'react-router-dom';
import { Header, Footer, Sidebar } from '@/components/common';

export function RootLayout() {
  return (
    <div>
      <Header />
      <div className="content">
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
} 