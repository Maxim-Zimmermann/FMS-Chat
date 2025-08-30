import { SidebarItem } from "./sidebarItem";

export function Sidebar() {
    return (
        <div style={{ width: "20%", minWidth: "200px", borderRight: "1px solid var(--secondary)" }}>
            <div className="topper" style={{ display: "flex", alignItems: "center", borderBottom: "1px solid var(--secondary)" }}>
                <h2 style={{ margin: "1em" }}>FMS-Chat</h2>
            </div>
            <div className="chatList" style={{ overflowY: "auto", maxHeight: "calc(100vh - 100px)", marginTop: "1em" }}>
                <SidebarItem />
                <SidebarItem />
            </div>
        </div>
    )
}