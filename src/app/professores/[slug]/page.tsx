async function getProfessorBySlug (slug){ //refatorar conexões
    const response = fetch('') // passar o slug no módelo do json server
    if(!response.ok){
        console.log("falha na conexão do db")
    }

    const data = await response.json()
    return data[0]
}


export default async function ProfessorPage({params} :  {params: {slug: string}}){

    const prof = await getProfessorBySlug(params.slug);

    return(
        <>
        <h2>Professor</h2>
        <p>Slug: {params.slug}</p>
        </>
    )
}