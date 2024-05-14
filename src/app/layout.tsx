import { ThemeProvider } from "next-themes";
import Script from "next/script";
import ScrollToTop from "~/components/footer/ScrollToTop";
import Navbar from "~/components/navbar";
import Offcanvas from "~/components/offcanvas";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        ></link>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        ></link>
      </head>
      <body>
        <ThemeProvider
          attribute="data-bs-theme"
          enableSystem={true}
          themes={["light", "dark"]}
          defaultTheme="light"
        >
          <Navbar />
          <div className="container-fluid py-3">{children}</div>
          <Offcanvas />
          <ScrollToTop />
          {/* <Footer /> */}
        </ThemeProvider>

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        ></Script>
      </body>
    </html>
  );
}
