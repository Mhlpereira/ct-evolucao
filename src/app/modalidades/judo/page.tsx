import { Table, TableHead, TableHeadCell, TableBody, TableRow, TableCell, Button } from "flowbite-react";

export default function JudoPage() {
    return (
        <>
        <article>
          <h1>Judo</h1>
          <section>
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
              O Jiu-Jitsu é conhecido por seu foco em técnicas de grappling, como
              estrangulamentos, chaves de braço e de perna, além de controle de
              posições. Diferente de outras artes marciais que priorizam golpes, o
              Jiu-Jitsu é predominantemente uma luta no solo, onde a técnica e a
              estratégia são cruciais para o sucesso.
            </p>
            <p>
              {' '}
              Além de ser uma forma eficaz de defesa pessoal, o Jiu-Jitsu oferece
              inúmeros benefícios à saúde. Praticar essa arte marcial melhora a
              resistência cardiovascular, a força muscular, a flexibilidade e a
              coordenação motora. Além disso, é uma excelente maneira de aliviar o
              estresse, aumentar a autoconfiança e promover disciplina.
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
                <TableCell>21:00</TableCell>
                <TableCell>20:00</TableCell>
                <TableCell>21:00</TableCell>
                <TableCell>20:00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
  
          
  
          <Button>Agende agora!</Button>
        </article>
      </>
    )
}