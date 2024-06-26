import Fab from "@/component/Fab";
import IntegrationContent from "@/component/IntegrationContent";
import Navbar from "@/component/Navbar";

// import Image from 'next/image'

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
            <a className="col-12 col-sm-4 text-decoration-none" key={index} href={'https://fakestoreapi.com/products/' + d.id}>

              <div className="card product-card shadow-sm border-0 mb-3">
                <div className="row g-0">
                  <div className="col-12 p-4 d-flex justify-content-center">
                    <img src={d.image} className="img-fluid product-image rounded-start" alt={d.title} />
                  </div>
                  <div className="col-12">
                    <div className="card-body">
                      <h5 className="card-title fs-6 max-lines-2 text-uppercase letter-spacing" title={d.title}>{d.title}</h5>
                      <div className="card-text d-flex justify-content-between my-3">
                        <small class="bg-secondary rounded px-2 py-1 fw-semibold text-light text-uppercase product-description">{d.category}</small>
                        <span className="fw-bold text-danger">${d.price}</span>
                      </div>

                      <p className="card-text max-lines-2 mt-4 fs-6 text-secondary">{d.description}</p>

                    </div>
                    <div className="card-footer p-4 my-2">
                      <button className="btn btn-danger px-4 rounded-5">
                        Buy Now
                      </button>
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

