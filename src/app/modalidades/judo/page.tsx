import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from 'flowbite-react'
import { Button } from 'flowbite-react/components/Button'

export default function JiujitsuPage() {
  return (
    <>
      <article className="flex flex-row gap-8">
        <div className="flex-1">
          <h1>Judô</h1>
          <section className="">
            <p>Judô é uma arte marcial e esporte olímpico originado no Japão,
            criado pelo mestre Jigoro Kano em 1882. Baseado em técnicas de
            projeção e imobilização, o Judô enfatiza o uso eficiente da força e
            a aplicação de alavancas para derrubar ou subjugar o oponente. O
            nome "Judô" significa "caminho suave", refletindo a filosofia de
            usar a força do adversário contra ele mesmo.</p>
            <p> Os benefícios do Judô
            são amplos, tanto no aspecto físico quanto mental. Fisicamente, a
            prática regular melhora a força muscular, a flexibilidade, a
            coordenação motora e a resistência cardiovascular. Além disso, o
            Judô desenvolve o equilíbrio, a agilidade e a capacidade de resposta
            rápida, tornando-o uma excelente atividade para pessoas de todas as
            idades.</p>
            <p> No aspecto mental, o Judô promove a disciplina, o respeito e
            a perseverança. Os praticantes aprendem a lidar com desafios e
            adversidades de maneira controlada e estratégica, o que fortalece a
            resiliência emocional e a confiança. A filosofia do Judô também
            ensina a importância do respeito aos colegas e adversários,
            cultivando valores de humildade e cooperação.</p>
            <p> Se você está
            interessado em experimentar os benefícios do Judô, inscreva-se agora
            para uma aula experimental gratuita no Centro de Treinamento
            Evolução! Venha conhecer essa arte marcial que não só fortalece o
            corpo, mas também molda o caráter, e descubra como o Judô pode fazer
            parte do seu caminho de evolução.
            </p>
          </section>
        </div>

        <section className="flex-1">
          <h2>Horários!</h2>
          <Table>
            <TableHead>
              <TableHeadCell>Terça-feira</TableHeadCell>
              <TableHeadCell>Quinta-feira</TableHeadCell>
            </TableHead>
            <TableBody className="divide-y">
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell>19:00</TableCell>
                <TableCell>19:00</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <h2>Horários kids!</h2>
          <Table>
            <TableHead>
              <TableHeadCell>Terça-feira</TableHeadCell>
              <TableHeadCell>Quinta-feira</TableHeadCell>
            </TableHead>
            <TableBody className="divide-y">
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell>18:00</TableCell>
                <TableCell>18:00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </article>

      <Button>Agende agora!</Button>
    </>
  )
}
