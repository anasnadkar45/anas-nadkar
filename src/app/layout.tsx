import { ThemeProvider } from '@/components/ui/theme-provider';
import './globals.css';
import { Amaranth, Dancing_Script, Inter, Lato, Poppins, Titillium_Web, Urbanist } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Image from 'next/image';

export const inter = Inter({ subsets: ["latin"] });
export const poppins = Poppins({ weight: "900", subsets: ["latin"] });
export const dancing = Dancing_Script({ weight: "400", subsets: ["latin"] });
export const lato = Lato({ weight: "400", subsets: ["latin"] });
export const urbanist = Urbanist({ weight: "400", subsets: ["latin"] });
export const titillium_Web = Titillium_Web({ weight: "400", subsets: ["latin"] });
export const amaranth = Amaranth({ weight: "400", subsets: ["latin"] });
import Footer from '../../public/Portfolio2.png'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${titillium_Web.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className='max-w-4xl mx-auto px-4'>
            {children}
          </div>
          <div className='max-w-7xl mx-auto py-4'>
            <Image src={Footer} alt="Portfolio" className='px-5' />
          </div>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}