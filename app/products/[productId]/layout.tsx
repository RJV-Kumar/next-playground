export default function ProductDetailsLayout({
  children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
            <footer style={{ fontFamily: "var(--font-geist-mono)", padding: "1rem", backgroundColor: "#746565" }}>
                <h2>Feature Product From ProductDetailsLayout</h2>
            </footer>
        </>
    )
}   