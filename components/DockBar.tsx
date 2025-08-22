"use client";
import Dock from "../components/layout/navbar";
import { Icon } from "@iconify/react";
import React from "react";

const items = [
    { icon: <Icon icon="hugeicons:home-11" className="text-2xl text-neutral-100"/>, label: "Home", onClick: () => alert("Home!") },
    { icon: <Icon icon="hugeicons:archive-02" className="text-2xl text-red-100"/>, label: "Archive", onClick: () => alert("Archive!") },
    { icon: <Icon icon="hugeicons:user-square" className="text-2xl text-red-100"/>, label: "Profile", onClick: () => alert("Profile!") },
    { icon: <Icon icon="hugeicons:settings-04" className="text-2xl text-red-100"/>, label: "Settings", onClick: () => alert("Settings!") },
];

export default function DockBar() {
    return (
        <nav className="absolute bottom-0 left-48">
            <Dock
                items={items}
                panelHeight={68}
                baseItemSize={50}
                magnification={70}
            />
        </nav>
    );
}
