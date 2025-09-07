import { NavLink } from "react-router-dom";

export default function SectionTabs() {
  const tabs = [
    { label: "USLUGE", page: "/gradevinska" },
    { label: "PROJEKTI", page: "/" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        marginBottom: "1rem",
        paddingLeft: "1.5rem",
      }}
    >
      {tabs.map((tab) => (
        <NavLink
          key={tab.page}
          to={tab.page}
          style={({ isActive }) => ({
            background: "none",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
            color: isActive ? "#004080" : "#888888",
            textDecoration: isActive ? "underline" : "none",
            fontSize: "1.5rem",
            textAlign: "left",
            padding: 0,
            lineHeight: "2rem",
            outline: "none",
            boxShadow: "none",
          })}
          aria-current={({ isActive }) => (isActive ? "page" : undefined)}
        >
          {tab.label}
        </NavLink>
      ))}
    </div>
  );
}
