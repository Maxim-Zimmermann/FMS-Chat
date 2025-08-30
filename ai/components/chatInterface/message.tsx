import { IconAccount } from "./icon_account";
import { IconSuccess } from "./icon_success";

export function Message({ type = 1, message = "TEST", hasMessageAbove = false }) {
    switch (type) {
        case 1:
            // User message
            return (
                <div style={{ width: "100%", paddingLeft: "1em", paddingRight: "1em", paddingTop: (!hasMessageAbove ? "0.7em" : "0.5em"), display: "grid", gridTemplateColumns: "1fr 40px", gap: "1em" }}>
                    <div
                        className="message"
                        style={{
                            maxWidth: "80%",
                            background: "var(--primary)",
                            padding: "1em",
                            borderRadius: "var(--default-border-radius)",
                            justifySelf: "end",
                            display: "inline-block",
                            wordBreak: "break-word",
                            width: "auto",
                            minWidth: "40px",
                        }}
                    >
                        <div
                            className="messageText"
                            style={{
                                textAlign: "right",
                                wordBreak: "break-word",
                                whiteSpace: "pre-wrap",
                            }}
                        >
                            {message}
                        </div>
                    </div>
                    <div className="icon" style={{ width: "40px", height: "40px", background: !hasMessageAbove ? "var(--accent)" : "transparent", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {!hasMessageAbove && (
                            <IconAccount dark={true} />
                        )}
                    </div>
                </div >
            )
            break;
        case 2:
            // AI message
            return (
                <div style={{ width: "100%", paddingLeft: "1em", paddingRight: "1em", paddingTop: (!hasMessageAbove ? "0.7em" : "0.5em"), display: "grid", gridTemplateColumns: "40px 1fr", gap: "1em" }}>
                    <div className="icon" style={{ width: "40px", height: "40px", background: !hasMessageAbove ? "var(--secondary)" : "transparent", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {!hasMessageAbove && (
                            <IconAccount dark={false} />
                        )}
                    </div>
                    <div
                        className="message"
                        style={{
                            maxWidth: "80%",
                            background: "var(--primary)",
                            padding: "1em",
                            borderRadius: "var(--default-border-radius)",
                            justifySelf: "start",
                            display: "inline-block",
                            wordBreak: "break-word",
                            width: "auto",
                            minWidth: "40px",
                        }}
                    >
                        <div
                            className="messageText"
                            style={{
                                textAlign: "left",
                                wordBreak: "break-word",
                                whiteSpace: "pre-wrap",
                            }}
                        >
                            {message}
                        </div>
                    </div>
                </div >
            )
            break;
        case 3:
            // system success message
            return (
                <div style={{ width: "100%", paddingLeft: "1em", paddingRight: "1em", paddingTop: (!hasMessageAbove ? "0.7em" : "0.5em"), display: "grid", gridTemplateColumns: "40px 1fr", gap: "1em" }}>
                    <div className="icon" style={{ width: "40px", height: "40px", background: !hasMessageAbove ? "var(--secondary)" : "transparent", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {!hasMessageAbove && (
                            <IconAccount dark={false} />
                        )}
                    </div>
                    <div
                        className="message"
                        style={{
                            maxWidth: "60%",
                            background: "var(--success-bg)",
                            padding: "1em",
                            borderRadius: "var(--default-border-radius)",
                            border: "1px solid var(--success-border)",
                            display: "grid",
                            gridTemplateColumns: "20px 1fr",
                            gap: "0.5em",
                            width: "auto",
                            minWidth: "40px",
                        }}
                    >
                        <div className="successIcon" style={{ width: "24px", height: "20px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <IconSuccess />
                        </div>
                        <div
                            className="messageText"
                            style={{
                                color: "var(--success-color)",
                                textAlign: "left",
                                wordBreak: "break-word",
                                whiteSpace: "pre-wrap",
                            }}
                        >
                            {message}
                        </div>
                    </div>
                </div >
            )
            break;
        default:
            break;
    }
    return (
        <div style={{ width: "100%", padding: "0.5em" }}>
            <div className="message" style={{ width: "100%", background: "var(--primary)", padding: "1em", borderRadius: "var(--default-border-radius)", display: "grid", gridTemplateColumns: `${type === 1 ? "1fr" : "40px 1fr"}`, gap: "0.5em" }}>
                <div className="icon"></div>
                <div className="messageText">{message}</div>
            </div>
        </div >
    )
}
