import { Sidebar } from './sidebar';
import { Chat } from "./chat";

export function ChatPage() {
    return (
        <div style={{ display: "flex", height: "100vh", width: "100%" }}>
            <Sidebar />
            <Chat />
        </div>
    )
}