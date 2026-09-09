import type { ReactNode } from "react";
import NavbarComponent from "./navbar.tsx";
import FooterComponent from "./footer.tsx";

interface layoutProps{
    children: ReactNode;
}

function Layout({children}: layoutProps){
    return(
        <>
        <NavbarComponent/>
        <main> {children}  </main>
        <FooterComponent/>
        </>
    );
}

export default Layout;