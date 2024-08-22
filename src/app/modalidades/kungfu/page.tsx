import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from 'flowbite-react'
import Image from 'next/image'

export default function KungFuPage() {
  return (
    <>
      <div className='flex flex-col min-h-screen bg-red-600'>
        <div className="flex-1 p-4">
          <article className="flex flex-col gap-8 p-8 md:flex-row">
            <div className="flex-1 bg-orange-400 shadow-shape text-yellow-300 rounded-xl p-4">
              <h1 className='font-bold text-xl md:text-2xl'>Kung-fu</h1>
              <section className="text-justify">
                <p>Kung Fu Wushu é uma arte marcial tradicional chinesa que abrange uma vasta gama de estilos e técnicas, cada uma com suas próprias características e filosofias. "Kung Fu" refere-se à habilidade adquirida com esforço e prática, enquanto "Wushu" significa literalmente "arte marcial". Juntas, essas práticas representam não apenas um sistema de autodefesa, mas também uma disciplina física e mental profundamente enraizada na cultura chinesa.</p>
                <p>
                  Os benefícios do Kung Fu Wushu são numerosos e abrangem tanto o corpo quanto a mente. Fisicamente, a prática regular melhora a força muscular, a flexibilidade, a resistência cardiovascular e a coordenação motora. As técnicas incluem movimentos rápidos e precisos, que desenvolvem agilidade, equilíbrio e reflexos. Além disso, o Kung Fu Wushu é conhecido por seus exercícios de respiração e meditação, que promovem o controle da energia vital e o bem-estar geral.
                </p>
                <p>
                  No aspecto mental, o Kung Fu Wushu ensina a disciplina, a paciência e o respeito. A filosofia por trás dessa arte marcial enfatiza o autoconhecimento, o autocontrole e a harmonia entre o corpo e a mente. Os praticantes aprendem a manter a calma e o foco em situações de pressão, desenvolvendo resiliência emocional e uma profunda autoconfiança.
                </p>
                <p>
                  Se você deseja explorar os benefícios do Kung Fu Wushu e mergulhar na rica tradição das artes marciais chinesas, inscreva-se agora para uma aula experimental gratuita no Centro de Treinamento Evolução! Venha descobrir como essa prática ancestral pode transformar seu corpo, sua mente e sua vida.
                </p>
              </section>
            </div>

            <section className="flex-1">
              <h2 className='font-bold'>Horários!</h2>
              <Table>
                <TableHead>
                  <TableHeadCell>Terça-feira</TableHeadCell>
                  <TableHeadCell>Quinta-feira</TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                  <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <TableCell>20:00</TableCell>
                    <TableCell>20:00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <figure className="flex flex-col gap-4 mt-5 items-center justify-center md:flex-row">
                <Image
                  src={
                    'https://res.cloudinary.com/dk3stwpr5/image/upload/v1723778994/ok9to2j0615gnx47gb1u.png'
                  }
                  width={200}
                  height={200}
                  alt={'Logo'}
                />
                <Image
                  src={
                    'https://res.cloudinary.com/dk3stwpr5/image/upload/v1724136723/uwvjlnujps5ex80zlhbt.png'
                  }
                  width={200}
                  height={200}
                  alt={'Dragão wushu'}
                />
              </figure>
            </section>
          </article>

          <div className="flex justify-center items-center">
            <button className="bg-red-800 text-yellow-300 text-xl py-2 px-4 rounded-full shadow-lg transform transition-transform duration-300 hover:bg-red-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300">
              Faça sua aula experimental
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
