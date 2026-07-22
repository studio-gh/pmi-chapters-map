import type {Metadata} from "next";
import "./globals.css";
export const metadata:Metadata={title:"PMI Chapter Map",description:"Interactive map of active Project Management Institute chapters.",other:{"codex-preview":"development"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
