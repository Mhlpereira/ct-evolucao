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
          <h1>Muy thay</h1>
          <section className="">
            <p>
              Muay Thai é uma arte marcial originária da Tailândia, conhecida
              como a "arte das oito armas" devido ao uso combinado de punhos,
              cotovelos, joelhos e canelas, que permitem uma gama completa de
              técnicas de ataque e defesa. Desenvolvida ao longo de séculos,
              essa prática é famosa por sua eficácia em combate e pela
              intensidade dos treinos.
            </p>
            <p>
              {' '}
              Uma das principais características do Muay Thai é o treinamento
              físico rigoroso, que prepara o corpo e a mente para enfrentar
              desafios, tanto dentro quanto fora do ringue. Durante os treinos,
              os praticantes desenvolvem resistência cardiovascular, força
              muscular, flexibilidade e agilidade. Além disso, a prática regular
              melhora a coordenação motora, o equilíbrio e a postura,
              contribuindo para um corpo mais forte e saudável.
            </p>
            <p>
              {' '}
              O Muay Thai também é uma excelente ferramenta para a saúde mental.
              A prática dessa arte marcial ajuda a aliviar o estresse, aumentar
              a autoconfiança e promover a disciplina. Os treinos intensos e
              desafiadores ensinam o controle emocional, a resiliência e a
              capacidade de tomar decisões rápidas, características que podem
              ser aplicadas em diversas áreas da vida.
            </p>
            <p>
              {' '}
              Se você deseja experimentar os benefícios físicos e mentais do
              Muay Thai, inscreva-se agora para uma aula experimental gratuita
              no Centro de Treinamento Evolução! Essa é a sua oportunidade de
              conhecer essa arte marcial poderosa e descobrir como ela pode
              transformar sua vida.
            </p>
          </section>
        </div>

        <section className="flex-1">
          <h2>Horários!</h2>
          <Table>
            <TableHead>
              <TableHeadCell>Segunda-feira</TableHeadCell>
              <TableHeadCell>Terça-feira</TableHeadCell>
              <TableHeadCell>Quarta-feira</TableHeadCell>
              <TableHeadCell>Quinta-feira</TableHeadCell>
              <TableHeadCell>Sexta-feira</TableHeadCell>
            </TableHead>
            <TableBody className="divide-y">
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell>08:00</TableCell>
                <TableCell>07:00</TableCell>
                <TableCell>08:00</TableCell>
                <TableCell>07:00</TableCell>
                <TableCell>08:00</TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell>17:00</TableCell>
                <TableCell></TableCell>
                <TableCell>17:00</TableCell>
                <TableCell></TableCell>
                <TableCell>17:00</TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell>18:00</TableCell>
                <TableCell></TableCell>
                <TableCell>18:00</TableCell>
                <TableCell></TableCell>
                <TableCell>18:00</TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell>19:30</TableCell>
                <TableCell></TableCell>
                <TableCell>19:30</TableCell>
                <TableCell></TableCell>
                <TableCell>19:30</TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell>21:00</TableCell>
                <TableCell></TableCell>
                <TableCell>21:00</TableCell>
                <TableCell></TableCell>
                <TableCell>21:00</TableCell>
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
                <TableCell>19:00</TableCell>
                <TableCell>19:00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </article>

      <Button>Agende agora!</Button>
    </>
  )
}
