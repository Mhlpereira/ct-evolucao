import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from 'flowbite-react'
import { Button } from 'flowbite-react/components/Button'

export default function KungFuPage() {
  return (
    <>
      <article className="flex flex-row gap-8">
        <div className="flex-1">
          <h1>Kung-fu</h1>
          <section className="">
            <p>reservado para texto</p>
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
                <TableCell>20:00</TableCell>
                <TableCell>20:00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </article>

      <Button>Agende agora!</Button>
    </>
  )
}
