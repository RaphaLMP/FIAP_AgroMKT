import React from 'react';
import Navbar from "../../components/navbar";
import "../../styles/app.css";
import Footer from '../../components/footer';

function Home() {
    return (
        <div className="flex flex-col min-h-screen">
          {/* Navbar*/}
          <Navbar />
    
          {/* Conteúdo principal */}
          <main className="flex-1 p-6">
            <h1 className="text-2xl font-bold">Bem-vindo ao Site</h1>
            <p className="mt-4">Aqui vai o conteúdo principal da página.</p>
          </main>
    
          {/* Footer*/}
          <Footer />
        </div>
      );
    }

export default Home;
