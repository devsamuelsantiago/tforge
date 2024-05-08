"use client";
import Link from "next/link";
import { useEffect } from "react";
import NavItem from "./nav-item";

export default function Sidebar() {
  return (
    <nav className="grid items-start px-4 text-sm font-medium">
      <NavItem href="/">Dashboard</NavItem>

      <NavItem href="/projects">Projects</NavItem>

      <NavItem href="#">Tasks</NavItem>

      <NavItem href="#">Team</NavItem>

      <NavItem href="#">Settings</NavItem>
    </nav>
  );
}
