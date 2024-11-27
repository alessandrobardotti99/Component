import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const metadata: Metadata = {
  title: 'Dashboard Cliente',
  description: 'Dashboard per la gestione delle informazioni del cliente',
}

export default function DashboardPage() {
  // In un'applicazione reale, questi dati verrebbero recuperati da un'API o un database
  const clientData = {
    nome: "Mario",
    cognome: "Rossi",
    email: "mario.rossi@example.com",
    telefono: "+39 123 456 7890",
    indirizzo: "Via Roma 123, 00100 Roma, Italia"
  }

  const savedOrders = [
    { id: 1, data: "2023-05-15", totale: "€120.00", stato: "In attesa" },
    { id: 2, data: "2023-05-10", totale: "€85.50", stato: "Spedito" },
    { id: 3, data: "2023-05-05", totale: "€200.00", stato: "Consegnato" },
  ]

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard Cliente</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Informazioni Cliente</CardTitle>
          </CardHeader>
          <CardContent> 
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-2">
                <Label>Nome:</Label>
                <span>{clientData.nome}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Label>Cognome:</Label>
                <span>{clientData.cognome}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Label>Email:</Label>
                <span>{clientData.email}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Label>Telefono:</Label>
                <span>{clientData.telefono}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Label>Indirizzo:</Label>
                <span>{clientData.indirizzo}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ordini Salvati</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID Ordine</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Totale</TableHead>
                  <TableHead>Stato</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {savedOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.data}</TableCell>
                    <TableCell>{order.totale}</TableCell>
                    <TableCell>{order.stato}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

