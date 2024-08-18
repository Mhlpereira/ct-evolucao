import CardProf from "@/components/common/cardProf"
import Link from "next/link"


async function getAllProfessores(){ 
    const response = fetch('mockdata/db.json') // caminho do mock utilizando o json server
    if(!response.ok){
        console.log("falha na conexão do db")
    }
    return response.json()
}

export default async function ProfessoresPage() {
    const data = await getAllProfessores()
  return (
    <>
      <div>Professores</div>
      <Link > // decidir se vai ser modal ou criar uma página.
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {data.map(data => <CardProf key={data.id} data={data}/>}
      </section>
      </Link>
    </>
  )
}
