import { Outlet } from 'react-router-dom';
import NavMenu from '../components/NavMenu';

export default function AppLayout() {
  return (
    <>
      <NavMenu />
      <section className="max-w-full mx-auto">
        <Outlet />
      </section>
      <footer className="py-4">
        <p className="font-medium text-center">
          © Todos los derechos reservados {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}
