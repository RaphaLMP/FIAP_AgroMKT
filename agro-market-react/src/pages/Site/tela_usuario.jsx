import React from "react";
import DashboardCard from "../../components/dashboardcard";
import Footer from "../../components/footer";
import Card_Filter from "../../components/cardfilter";
import Carousel from "../../components/carousel";
import BackToTop from "../../components/backtotop";

const Tela_Usuario = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8 mt-24">
        {/* Gráfico de Vendas */}
        <canvas id="salesChart"></canvas>

        {/* Cards de Informações */}
        <div className="container text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center">
            {/* Dash 1 - Faturamento */}
            <DashboardCard
              imageSrc="images/usu_img2.jpeg"
              title="Faturamento"
              value="R$ 32.457,22"
              valueDescription="/mo"
              buttonText="Detalhes"
              additionalInfo={["58% Vs. ano anterior"]}
            />

            {/* Dash 2 - Qtd. de Vendas */}
            <DashboardCard
              imageSrc="images/usu_img3.jpeg"
              title="Qtd. de Vendas"
              value="589"
              valueDescription=" Vendas"
              buttonText="Detalhes"
              additionalInfo={["83% Vs. ano anterior"]}
            />

            {/* Dash 3 - Ticket Médio */}
            <DashboardCard
              imageSrc="images/usu_img1.jpeg"
              title="Ticket Médio"
              value="R$ 55,10"
              valueDescription="/ticket"
              buttonText="Detalhes"
              additionalInfo={["16% Vs. ano anterior"]}
            />
          </div>

          {/* Dash 4 e 5*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center mt-8">
            {/* Dash 4 - Saldo Disponível */}
            <DashboardCard
              imageSrc="images/usu_img5.jpeg"
              title="Saldo Disponível"
              value="R$ 102.538,91"
              valueDescription=""
              buttonText="Detalhes"
              additionalInfo={["24% Vs. ano anterior"]}
            />

            {/* Dash 5 - Próximo Repasse */}
            <DashboardCard
              imageSrc="images/usu_img4.jpeg"
              title="Próximo Repasse"
              value="R$ 22.324,51"
              valueDescription=""
              buttonText="Detalhes"
              additionalInfo={["Agendado para o dia 13/11/2024"]}
            />
          </div>
        </div>

        {/* Seção de Produtos Anunciados */}

        <h2 className="col-12 text-center row justify-content-center mt-4">Seus Produtos Anunciados</h2>
        <div className="container mx-auto px-4 py-8 mt-24">
          <Card_Filter />
        </div>
      </div>
      <BackToTop />
      <Footer />
    </div>

  );
};

export default Tela_Usuario;
