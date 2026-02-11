import { AppShell, NavLink, Text, Image, ScrollArea } from "@mantine/core";
import { useNavigate, useLocation } from "react-router-dom";
import {
  TbLayoutDashboard,
  TbLayoutDashboardFilled,
  TbShoppingCart,
  TbShoppingCartFilled,
  TbCash,
  TbTool,
  TbCalendarClock,
  TbVaccine,
  TbClipboardText,
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
            label="Pets"
            onClick={() => navigate("/pet-list")}
            style={{ margin: "5px" }}
            active={location.pathname === "/pet-list"}
            leftSection={
              location.pathname === "/pet-list" ? (
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
          leftSection={<TbCalendarClock />}
        />
        <NavLink
          label="Vaccinations"
          onClick={() => navigate("/vaccinations")}
          style={{ margin: "2px" }}
          active={location.pathname === "/vaccinations"}
          leftSection={<TbVaccine />}
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
          leftSection={<TbClipboardText />}
        />
        <NavLink
          label="Tools"
          style={{ margin: "5px" }}
          childrenOffset={16}
          leftSection={<TbTool />}
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
      </ScrollArea>
    </AppShell.Navbar>
  );
};

export default LeftSidebar;
