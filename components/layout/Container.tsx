export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div
            style={{
                maxWidth: "var(--container)",
                margin: "0 auto",
                padding: "0 24px",
            }}
        >
            {children}
        </div>
    );
}
