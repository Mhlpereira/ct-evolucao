export default function ProfessorPage({params} :  {params: {slug: string}}){
    return(
        <>
        <h2>Professor</h2>
        <p>Slug: {params.slug}</p>
        </>
    )
}