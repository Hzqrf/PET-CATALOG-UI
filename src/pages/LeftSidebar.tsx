import { AppShell, NavLink, Text, Image, ScrollArea } from "@mantine/core";
import { useNavigate, useLocation } from "react-router-dom";
import {
  TbLayoutDashboard,
  TbLayoutDashboardFilled,
  TbPackage,
  TbShoppingCart,
  TbShoppingCartFilled,
  TbGift,
  TbDeviceGamepad2,
  TbShieldCheck,
  TbCash,
  TbArrowsLeftRight,
  TbBriefcase,
  TbUser,
  TbHistory,
  TbCloud,
  TbRefresh,
} from "react-icons/tb";
import cat from "../assets/test.jpg";

const LeftSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AppShell.Navbar
      p={"md"}
      style={{ gap: "10px" }}
      classNames={{ navbar: "" }}
    >
      <AppShell.Section>
        <Image src={cat} fit="contain" h={"50px"}/>
      </AppShell.Section>

      {/* {Array(15)
        .fill(0)
        .map((_, index) => (
          <Skeleton key={index} h={28} mt="sm" animate={false} />
        ))} */}
      <ScrollArea type="never" scrollbars="y">
        <Text
          size="xs"
          c="dimmed"
          ta={"left"}
          pl={10}
          fw={500}
          // style={{
          //   textAlign: "center",
          //   width: "100%",
          // }}
        >
          MAIN
        </Text>
        <NavLink
          label="Dashboard"
          onClick={() => navigate("/dashboard")}
          style={{ margin: "2px" }}
          active={location.pathname === "/dashboard"}
          leftSection={
            location.pathname === "/dashboard" ? (
              <TbLayoutDashboardFilled size={16} />
            ) : (
              <TbLayoutDashboard size={16} />
            )
          }
        />
        <NavLink
          label="Tools"
          style={{ margin: "5px" }}
          childrenOffset={16}
          leftSection={<TbPackage />}
        >
          <NavLink
            label="tools-dashboard"
            onClick={() => navigate("/tools-dashboard")}
            style={{ margin: "5px" }}
            active={location.pathname === "/tools-dashboard"}
          />
          <NavLink
            label="Product Items"
            onClick={() => navigate("/products/product-items")}
            style={{ margin: "2px" }}
            active={location.pathname === "/products/product-items"}
          />
        </NavLink>
        <NavLink
          label="Pets"
          onClick={() => navigate("/pet-profile")}
          style={{ margin: "5px" }}
          active={location.pathname === "/pet-profile"}
          leftSection={
            location.pathname === "/pet-profile" ? (
              <TbShoppingCartFilled size={16} />
            ) : (
              <TbShoppingCart size={16} />
            )
          }
        />
        <NavLink
          label="tools-dashboard"
          onClick={() => navigate("/tools-dashboard")}
          style={{ margin: "5px" }}
          active={location.pathname === "/tools-dashboard"}
          leftSection={
            location.pathname === "/tools-dashboard" ? (
              <TbShoppingCartFilled size={16} />
            ) : (
              <TbShoppingCart size={16} />
            )
          }
        />
        <NavLink
          label="Appointments"
          onClick={() => navigate("/appointments")}
          style={{ margin: "2px" }}
          active={location.pathname === "/appointments"}
          leftSection={<TbDeviceGamepad2 />}
        />
        <NavLink
          label="Vaccinations"
          onClick={() => navigate("/vaccinations")}
          style={{ margin: "2px" }}
          active={location.pathname === "/vaccinations"}
          leftSection={<TbShieldCheck />}
        />
        <NavLink
          label="Billing Details"
          onClick={() => navigate("/billing-details")}
          style={{ margin: "2px" }}
          active={location.pathname === "/billing-details"}
          leftSection={<TbCash />}
        />
        <NavLink
          label="Reports"
          onClick={() => navigate("/reports")}
          style={{ margin: "2px" }}
          active={location.pathname === "/reports"}
          leftSection={<TbArrowsLeftRight />}
        />
      </ScrollArea>
    </AppShell.Navbar>
  );
};

export default LeftSidebar;
