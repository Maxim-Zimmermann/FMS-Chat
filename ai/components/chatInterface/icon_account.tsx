export function IconAccount({ dark: darkIcon = false }) {
    return (
        <svg fill="none" height="25" stroke={!darkIcon ? "var(--accent)" : "var(--primary)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
        </svg>
    )
}