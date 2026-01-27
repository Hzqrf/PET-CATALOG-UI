import { AppShell, Container, Text } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
import Header from "../pages/Header";
import LeftSidebar from "../pages/LeftSidebar";
import { useDisclosure } from "@mantine/hooks";

export default function Layout() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure(true);
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      layout="alt"
      header={{ height: 70 }}
      navbar={{
        width: { sm: 200, lg: 250 },
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      // aside={{ width: 300, breakpoint: 'md', collapsed: { desktop: false, mobile: true } }}
    >
      
      <LeftSidebar />
      <Container size="xl">
        {" "}
        {/* This controls the max width */}
        <AppShell.Main  w={1225} >
          <Header
            mobileOpened={mobileOpened}
            desktopOpened={desktopOpened}
            toggleMobile={toggleMobile}
            toggleDesktop={toggleDesktop}
          />
          <Outlet />
          <Footer />
        </AppShell.Main>
      </Container>
    </AppShell>
  );
}
