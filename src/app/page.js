import Fab from "@/component/Fab";
import IntegrationContent from "@/component/IntegrationContent";
import Navbar from "@/component/Navbar";


async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/10')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 

export default async function Home() {

  const data = await getData();
  
  console.log(data);

  return (
    <>
      <Navbar />

      <main className="container mt-5">

        {/* Content Header */}
        <h1 className="fs-3">Integrations</h1>
        <p className="text-secondary">Integrate all your food partner in one place</p>

        {/* Content */}
        <IntegrationContent />

        {/* {data && data.map((res, index) => (
          <p>{res.id}</p>
        ))} */}

        {/* Mobile Content */}
        <Fab />

      </main>

    </>

  );
}

