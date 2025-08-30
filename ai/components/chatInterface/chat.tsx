import { IconSend } from "./icon_send";
import { Message } from "./message";


export function Chat() {
    return (
        <div style={{ width: "100%", height: "100%", background: "var(--background)", display: "grid", gridTemplateRows: "auto 5em" }}>
            <div className="messageArea" style={{ overflowY: "auto", padding: "1em" }}>
                <Message type={1} message="Hello, how can I assist you today?" />
                <Message type={1} message="Hello, how can I assist you today?" hasMessageAbove={true}/>
                <Message type={1} message="Hello, how can I assist you today?" hasMessageAbove={true}/>
                <Message type={1} message="Hello, how can I assist you today?" hasMessageAbove={true}/>
                <Message type={1} message="I need help with my account." hasMessageAbove={true}/>
                <Message type={3} message="Your changes have been saved successfully." />
                <Message type={2} message="Hello, how can I assist you today?" hasMessageAbove={true} />
            </div>
            <div className="inputField" style={{ width: "100%", padding: "1em", borderTop: "1px solid var(--secondary)", background: "var(--primary)", display:"grid", gridTemplateColumns: "1fr 50px", gap: "1em" }}>
                <input type="text" placeholder="Type your message..." style={{ width: "100%", height: "100%", padding: "0.5em", borderRadius: "var(--default-border-radius)", border: "1px solid var(--secondary)", background: "var(--background)", fontSize: "0.9em" }} />
                <div className="sendButtonContainer" style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <div className="sendButton" style={{ width: "50px", height: "50px", background: "var(--secondary)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",  overflow: "hidden"}}>
                        <IconSend darkInfil={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}
