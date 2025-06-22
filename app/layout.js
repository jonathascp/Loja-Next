
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { CarrinhoProvider } from "@/contexts/CarrinhoContext";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="d-flex flex-column min-vh-100">
        <CarrinhoProvider>
          <Header/>
          <div className="my-4">
            {children}
          </div>
        <Footer/>
        </CarrinhoProvider>
        
      </body>
    </html>
  );
}
