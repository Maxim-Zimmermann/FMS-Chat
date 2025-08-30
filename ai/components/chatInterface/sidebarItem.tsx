"use client";
import { Icon } from "./icon_plus";

export function SidebarItem() {
    return (
        <div style={{ width: "100%", paddingLeft: "1em", paddingRight: "1em", display: "flex", alignItems: "center" }}>
            <div
                style={{ margin: "0.2em", display: "flex", alignItems: "center", borderRadius: "var(--default-border-radius)", cursor: "pointer", width: "100%"}}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--background)")}
                onMouseLeave={e => (e.currentTarget.style.background = "")}
            >
                <div className="iconArea" style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "var(--default-border-radius)" }}>
                    <Icon />
                </div>
                <div className="textArea" style={{ marginLeft: "0.2em", marginRight: "0.5em" }}>Chat Name</div>
            </div>
        </div>
    )
}
