import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from 'flowbite-react'
import { Button } from 'flowbite-react/components/Button'
import Image from 'next/image'

export default function JiujitsuPage() {
  return (
    <>
      <article className="flex flex-row gap-8">
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="">Jiu-jitsu</h1>
          <section className="">
            <p>
              O Jiu-Jitsu Brasileiro é uma arte marcial e esporte de combate que
              se originou no Brasil, a partir do judô e das técnicas de luta do
              Jiu-Jitsu japonês. Ele foi popularizado pela família Gracie, que
              adaptou e refinou as técnicas de chão, focando em alavancas e
              submissões, tornando possível que um lutador menor e mais fraco
              pudesse vencer um adversário maior e mais forte.
            </p>
            <p>
              {' '}
              O Jiu-Jitsu é conhecido por seu foco em técnicas de grappling,
              como estrangulamentos, chaves de braço e de perna, além de
              controle de posições. Diferente de outras artes marciais que
              priorizam golpes, o Jiu-Jitsu é predominantemente uma luta no
              solo, onde a técnica e a estratégia são cruciais para o sucesso.
            </p>
            <p>
              {' '}
              Além de ser uma forma eficaz de defesa pessoal, o Jiu-Jitsu
              oferece inúmeros benefícios à saúde. Praticar essa arte marcial
              melhora a resistência cardiovascular, a força muscular, a
              flexibilidade e a coordenação motora. Além disso, é uma excelente
              maneira de aliviar o estresse, aumentar a autoconfiança e promover
              disciplina.
            </p>
            <p>
              {' '}
              Se você está interessado em experimentar essa arte marcial
              transformadora, inscreva-se agora para uma aula experimental
              gratuita no Centro de Treinamento Evolução! Essa é a sua chance de
              conhecer o Jiu-Jitsu de perto e descobrir como ele pode mudar sua
              vida.
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
            </TableHead>
            <TableBody className="divide-y">
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell></TableCell>
                <TableCell>08:00</TableCell>
                <TableCell></TableCell>
                <TableCell>08:00</TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell>21:00</TableCell>
                <TableCell>20:00</TableCell>
                <TableCell>21:00</TableCell>
                <TableCell>20:00</TableCell>
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
          <figure className="flex flex-col gap-4 mt-5  lg:justify-center lg:flex-row ">
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
                'https://res.cloudinary.com/dk3stwpr5/image/upload/v1723779938/s7dd4pixxcqtgbgpxuqk.png'
              }
              width={200}
              height={200}
              alt={'Logo-bjj'}
            />
          </figure>
        </section>
      </article>

      <div className="flex justify-center items-center">
        <Button className="">Agende agora!</Button>
      </div>
    </>
  )
}
