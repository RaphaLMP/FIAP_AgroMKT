import React from "react";

const Tela_Usuario = () => {
   
  return (
    <div className="container my-5">
      {/* Gráfico de Vendas */}
      <canvas id="salesChart"></canvas>

      {/* Cards de Informações */}
      <div className="container text-center">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-3 justify-content-center">
          {/* Dash 1 - Faturamento */}
          <div className="col d-flex align-items-stretch">
            <div className="card mb-4 rounded-3 shadow-sm border-success w-100 h-100">
              <div className="card-header py-3 text-bg-success border-success d-flex justify-content-center align-items-center">
                <img
                  src="images/usu_img2.jpeg"
                  alt=""
                  className="img-fluid"
                  style={{
                    width: '40px',
                    borderRadius: '50%',
                    marginRight: '10px',
                    border: '2px solid rgb(0, 85, 11)',
                  }}
                />
                <h4 className="my-0 fw-normal">Faturamento</h4>
              </div>
              <div className="card-body d-flex flex-column text-center">
                <h1 className="card-title pricing-card-title">
                  R$ 32.457,22<small className="text-body-secondary fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>58% Vs. ano anterior</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-success">
                  Detalhes
                </button>
              </div>
            </div>
          </div>

          {/* Dash 2 - Qtd. de Vendas */}
          <div className="col d-flex align-items-stretch">
            <div className="card mb-4 rounded-3 shadow-sm border-success w-100 h-100">
              <div className="card-header py-3 text-bg-success border-success d-flex justify-content-center align-items-center">
                <img
                  src="images/usu_img3.jpeg"
                  alt=""
                  className="img-fluid"
                  style={{
                    width: '40px',
                    borderRadius: '50%',
                    marginRight: '10px',
                    border: '2px solid rgb(0, 85, 11)',
                  }}
                />
                <h4 className="my-0 fw-normal">Qtd. de Vendas</h4>
              </div>
              <div className="card-body d-flex flex-column text-center">
                <h1 className="card-title pricing-card-title">
                  589<small className="text-body-secondary fw-light"> Vendas</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>83% Vs. ano anterior</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-success">
                  Detalhes
                </button>
              </div>
            </div>
          </div>

          {/* Dash 3 - Ticket Médio */}
          <div className="col d-flex align-items-stretch">
            <div className="card mb-4 rounded-3 shadow-sm border-success w-100 h-100">
              <div className="card-header py-3 text-bg-success border-success d-flex justify-content-center align-items-center">
                <img
                  src="images/usu_img1.jpeg"
                  alt=""
                  className="img-fluid"
                  style={{
                    width: '40px',
                    borderRadius: '50%',
                    marginRight: '10px',
                    border: '2px solid rgb(0, 85, 11)',
                  }}
                />
                <h4 className="my-0 fw-normal">Ticket Médio</h4>
              </div>
              <div className="card-body d-flex flex-column text-center">
                <h1 className="card-title pricing-card-title">
                  R$ 55,10<small className="text-body-secondary fw-light">/ticket</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>16% Vs. ano anterior</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-success">
                  Detalhes
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dash 4 e 5 */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-3 justify-content-center" style={{ marginTop: '20px' }}>
          {/* Dash 4 - Saldo Disponível */}
          <div className="col d-flex align-items-stretch">
            <div className="card mb-4 rounded-3 shadow-sm border-success w-100 h-100">
              <div className="card-header py-3 text-bg-success border-success d-flex justify-content-center align-items-center">
                <img
                  src="images/usu_img5.jpeg"
                  alt=""
                  className="img-fluid"
                  style={{
                    width: '40px',
                    borderRadius: '50%',
                    marginRight: '10px',
                    border: '2px solid rgb(0, 85, 11)',
                  }}
                />
                <h4 className="my-0 fw-normal">Saldo Disponível</h4>
              </div>
              <div className="card-body d-flex flex-column text-center">
                <h1 className="card-title pricing-card-title">R$ 102.538,91</h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>24% Vs. ano anterior</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-success">
                  Detalhes
                </button>
              </div>
            </div>
          </div>

          {/* Dash 5 - Próximo Repasse */}
          <div className="col d-flex align-items-stretch">
            <div className="card mb-4 rounded-3 shadow-sm border-success w-100 h-100">
              <div className="card-header py-3 text-bg-success border-success d-flex justify-content-center align-items-center">
                <img
                  src="images/usu_img4.jpeg"
                  alt=""
                  className="img-fluid"
                  style={{
                    width: '40px',
                    borderRadius: '50%',
                    marginRight: '10px',
                    border: '2px solid rgb(0, 85, 11)',
                  }}
                />
                <h4 className="my-0 fw-normal">Próximo Repasse</h4>
              </div>
              <div className="card-body d-flex flex-column text-center">
                <h1 className="card-title pricing-card-title">R$ 22.324,51</h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Agendado para o dia 13/11/2024</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-success">
                  Detalhes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Produtos Anunciados */}
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <h3 className="fw-bold text-black my-5 text-center">Seus Produtos Anunciados</h3>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {/* Produto 1 */}
            <div className="col">
              <div className="card shadow-sm">
                <img
                  src="images/maça.jpg"
                  className="card-img-top"
                  alt="Maçã"
                  style={{ height: '225px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title text-primary">Maçãs</h5>
                  <p className="card-text text-secondary">400 Unidades Disponíveis</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">Validade: 23/02/2025</small>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <a href="#" className="btn btn-outline-primary btn-sm">
                      Ver Produto
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Produto 2 */}
            <div className="col">
              <div className="card shadow-sm">
                <img
                  src="images/pao.jpg"
                  className="card-img-top"
                  alt="Pão"
                  style={{ height: '225px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title text-primary">Pães</h5>
                  <p className="card-text text-secondary">100 Unidades Disponíveis</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">Validade: 23/02/2025</small>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <a href="#" className="btn btn-outline-primary btn-sm">
                      Ver Produto
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Produto 3 */}
            <div className="col">
              <div className="card shadow-sm">
                <img
                  src="images/laranja.jpg"
                  className="card-img-top"
                  alt="Laranja"
                  style={{ height: '225px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title text-primary">Laranjas</h5>
                  <p className="card-text text-secondary">200 Unidades Disponíveis</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">Validade: 23/02/2025</small>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <a href="#" className="btn btn-outline-primary btn-sm">
                      Ver Produto
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Produto 4 */}
            <div className="col">
              <div className="card shadow-sm">
                <img
                  src="images/caneta.jpg"
                  className="card-img-top"
                  alt="Caneta"
                  style={{ height: '225px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title text-primary">Canetas</h5>
                  <p className="card-text text-secondary">50 Unidades Disponíveis</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">Validade: 23/02/2025</small>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <a href="#" className="btn btn-outline-primary btn-sm">
                      Ver Produto
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tela_Usuario;
