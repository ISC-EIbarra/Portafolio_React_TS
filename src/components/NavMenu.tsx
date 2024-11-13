import { Navbar, NavbarBrand } from '@nextui-org/react';

export default function NavMenu() {
  return (
    <Navbar maxWidth="full" isBordered>
      <NavbarBrand>
        <p className="text-3xl text-blue-500 font-bold">Portafolio</p>
      </NavbarBrand>
    </Navbar>
  );
}
