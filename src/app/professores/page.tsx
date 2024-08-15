import CardProf from "@/components/cardProf"


async function getAllData(){
    const response = fetch('') // caminho do mock utilizando o json server
    if(!response.ok){
        console.log("falha na conexão do db")
    }
    return response.json()
}

export default async function ProfessoresPage() {
    const data = await getAllData()
  return (
    <>
      <div>Professores</div>
      {data.map(data => <CardProf data={data}/>}
    </>
  )
}
