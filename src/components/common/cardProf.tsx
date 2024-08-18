import Image from "next/image"

export default function CardProf({ data }) {
  return (
    <div>
      <header>
        <figure>
          <Image src={data.imagemSrc} alt={data.name} width={150} height={150}/> 
        </figure>
      </header>
      <footer>
        <p>{data.name}</p>
        <div>{data.modalidades.map((modalidade, index) => (
          <p key={index}>{modalidade}</p>
        ))}</div>
      </footer>
    </div>
  )
}
