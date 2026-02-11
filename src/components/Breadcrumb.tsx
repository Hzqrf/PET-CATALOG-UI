import { Breadcrumbs, Anchor } from "@mantine/core";
import { useLocation, Link } from "react-router-dom";
import { TbHome } from "react-icons/tb";

const Breadcrumb = () => {
  const location = useLocation();

  // Define breadcrumb mappings for each route
  const breadcrumbMap: Record<string, { label: string; path?: string }[]> = {
    "/dashboard": [{ label: "Home", path: "/dashboard" }, { label: "Dashboard" }],
    "/tools-dashboard": [{ label: "Home", path: "/dashboard" }, { label: "Tools Dashboard" }],
    "/pet-list": [{ label: "Home", path: "/dashboard" }, { label: "Pet List" }],
    "/pet-profile": [{ label: "Home", path: "/dashboard" }, { label: "Pet Profile" }],
    "/life-management": [{ label: "Home", path: "/dashboard" }, { label: "Life Management" }],
    "/media-memory": [{ label: "Home", path: "/dashboard" }, { label: "Media Memory" }],
    "/appointments": [{ label: "Home", path: "/dashboard" }, { label: "Appointments" }],
    "/vaccinations": [{ label: "Home", path: "/dashboard" }, { label: "Vaccinations" }],
    "/billing-details": [{ label: "Home", path: "/dashboard" }, { label: "Billing Details" }],
    "/reports": [{ label: "Home", path: "/dashboard" }, { label: "Reports" }],
  };

  const breadcrumbs = breadcrumbMap[location.pathname] || [{ label: "Home", path: "/dashboard" }];

  const items = breadcrumbs.map((item, index) => {
    const isLast = index === breadcrumbs.length - 1;

    if (isLast) {
      return (
        <span key={item.label} style={{ color: "var(--mantine-color-dimmed)" }}>
          {item.label}
        </span>
      );
    }

    return (
      <Anchor
        key={item.label}
        component={Link}
        to={item.path || "/dashboard"}
        style={{ color: "var(--mantine-color-blue-6)" }}
      >
        {item.label}
      </Anchor>
    );
  });

  // Add home icon to the first breadcrumb
  if (items.length > 0 && breadcrumbs[0]?.label === "Home") {
    items[0] = (
      <Anchor
        key="home"
        component={Link}
        to="/dashboard"
        style={{ display: "flex", alignItems: "center", gap: "4px", color: "var(--mantine-color-blue-6)" }}
      >
        <TbHome size={16} />
        Home
      </Anchor>
    );
  }

  return (
    <Breadcrumbs separator=">" mb="md" mt="sm">
      {items}
    </Breadcrumbs>
  );
};

export default Breadcrumb;