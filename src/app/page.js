import Fab from "@/component/Fab";
import IntegrationContent from "@/component/IntegrationContent";
import Navbar from "@/component/Navbar";

import Image from 'next/image'

async function getData() {
  const res = await fetch('https://fakestoreapi.com/products?limit=10')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}


export default async function Home() {

  const data = await getData();

  return (
    <>
      <Navbar />

      <main className="container mt-5">

        {/* Content Header */}
        <div className="mt-5 mb-4">
          <h1 className="fs-3">Integrations</h1>
          <p className="text-secondary">Integrate all your food partner in one place</p>
        </div>

        {/* Content */}
        <IntegrationContent />

        <div className="my-5">
          <h1 className="fs-3">API Implementation <a className="fs-5" href="https://fakestoreapi.com">via fakestoreapi</a></h1>
          <p className="text-secondary">API call in <a href="https://fakestoreapi.com">fakestoreapi.com/products</a> to display products</p>
        </div>


        <div className="row row-cols-4 mb-5">
          {data.map((d, index) => (
            <a className="col-12 col-sm-4 text-decoration-none" key={index} href={'https://fakestoreapi.com/products/'+d.id}>

              <div className="card border-0 mb-3">
                <div className="row g-0">
                  <div className="col-md-4 p-4 d-flex justify-content-center">
                    <img src={d.image} className="img-fluid product-image rounded-start" alt={d.title} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title fs-6 max-lines-2 text-uppercase letter-spacing" title={d.title}>{d.title}</h5>
                      <p className="card-text fw-bold text-danger">$ {d.price}</p>
                      <p className="card-text max-lines-2 fs-6 text-secondary">{d.description}</p>
                      <p className="card-text"><small class="bg-secondary rounded-5 px-3 py-1 text-light text-uppercase">{d.category}</small></p>
                    </div>
                  </div>
                </div>
              </div>

            </a>
          ))}
        </div>

        {/* Mobile Content */}
        <Fab />

      </main>

    </>

  );
}

