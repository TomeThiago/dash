"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Clock, Calendar, FileText, Settings } from "lucide-react";

type TimeEntry = {
  id: number;
  type: "entrada" | "saida" | "pausa_inicio" | "pausa_fim";
  timestamp: Date;
};

type Employee = {
  id: number;
  name: string;
  entries: TimeEntry[];
};

const initialEmployees: Employee[] = [
  { id: 1, name: "João Silva", entries: [] },
  { id: 2, name: "Maria Oliveira", entries: [] },
];

export default function TimeClock() {
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );
  const [isAdmin, setIsAdmin] = useState(false);

  const handleClockIn = (type: TimeEntry["type"]) => {
    if (selectedEmployee) {
      const newEntry: TimeEntry = {
        id: Date.now(),
        type,
        timestamp: new Date(),
      };
      setEmployees((prevEmployees) =>
        prevEmployees.map((emp) =>
          emp.id === selectedEmployee.id
            ? { ...emp, entries: [...emp.entries, newEntry] }
            : emp
        )
      );
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const calculateHours = (entries: TimeEntry[]) => {
    let totalMinutes = 0;
    let lastEntry: TimeEntry | null = null;

    for (const entry of entries) {
      if (lastEntry) {
        if (lastEntry.type === "entrada" && entry.type === "saida") {
          totalMinutes +=
            (entry.timestamp.getTime() - lastEntry.timestamp.getTime()) / 60000;
        } else if (
          lastEntry.type === "pausa_inicio" &&
          entry.type === "pausa_fim"
        ) {
          totalMinutes -=
            (entry.timestamp.getTime() - lastEntry.timestamp.getTime()) / 60000;
        }
      }
      lastEntry = entry;
    }

    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.round(totalMinutes % 60);
    return `${hours}h${minutes.toString().padStart(2, "0")}m`;
  };

  return (
    <div className="container mx-auto p-4">
      <Tabs defaultValue="employee" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="employee" onClick={() => setIsAdmin(false)}>
            Funcionário
          </TabsTrigger>
          <TabsTrigger value="admin" onClick={() => setIsAdmin(true)}>
            Administrador
          </TabsTrigger>
        </TabsList>
        <TabsContent value="employee">
          <Card>
            <CardHeader>
              <CardTitle>Sistema de Ponto Eletrônico</CardTitle>
              <CardDescription>
                Registre sua entrada, saída e pausas aqui.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex space-x-4">
                <Select
                  onValueChange={(value) =>
                    setSelectedEmployee(
                      employees.find((emp) => emp.id === parseInt(value)) ||
                        null
                    )
                  }
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Selecione o funcionário" />
                  </SelectTrigger>
                  <SelectContent>
                    {employees.map((emp) => (
                      <SelectItem key={emp.id} value={emp.id.toString()}>
                        {emp.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {selectedEmployee && (
                <div className="grid grid-cols-2 gap-4">
                  <Button onClick={() => handleClockIn("entrada")}>
                    <Clock className="mr-2 h-4 w-4" /> Entrada
                  </Button>
                  <Button onClick={() => handleClockIn("saida")}>
                    <Clock className="mr-2 h-4 w-4" /> Saída
                  </Button>
                  <Button onClick={() => handleClockIn("pausa_inicio")}>
                    <Clock className="mr-2 h-4 w-4" /> Início de Pausa
                  </Button>
                  <Button onClick={() => handleClockIn("pausa_fim")}>
                    <Clock className="mr-2 h-4 w-4" /> Fim de Pausa
                  </Button>
                </div>
              )}
            </CardContent>
            <CardFooter>
              {selectedEmployee && (
                <div className="w-full">
                  <h3 className="text-lg font-semibold mb-2">
                    Registros de Hoje
                  </h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Horário</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {selectedEmployee.entries
                        .filter(
                          (entry) =>
                            entry.timestamp.toDateString() ===
                            new Date().toDateString()
                        )
                        .map((entry) => (
                          <TableRow key={entry.id}>
                            <TableCell>{entry.type}</TableCell>
                            <TableCell>{formatDate(entry.timestamp)}</TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                  <div className="mt-4">
                    <strong>Total de Horas Trabalhadas: </strong>
                    {calculateHours(
                      selectedEmployee.entries.filter(
                        (entry) =>
                          entry.timestamp.toDateString() ===
                          new Date().toDateString()
                      )
                    )}
                  </div>
                </div>
              )}
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="admin">
          <Card>
            <CardHeader>
              <CardTitle>Painel do Administrador</CardTitle>
              <CardDescription>
                Gerencie os registros de ponto dos funcionários.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Funcionário</TableHead>
                    <TableHead>Último Registro</TableHead>
                    <TableHead>Horas Trabalhadas Hoje</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employees.map((employee) => (
                    <TableRow key={employee.id}>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Avatar>
                            <AvatarFallback>
                              {employee.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span>{employee.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        {employee.entries.length > 0
                          ? formatDate(
                              employee.entries[employee.entries.length - 1]
                                .timestamp
                            )
                          : "Nenhum registro"}
                      </TableCell>
                      <TableCell>
                        {calculateHours(
                          employee.entries.filter(
                            (entry) =>
                              entry.timestamp.toDateString() ===
                              new Date().toDateString()
                          )
                        )}
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          <FileText className="mr-2 h-4 w-4" />
                          Relatório
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Gerar Relatório Mensal
              </Button>
              <Button variant="outline">
                <Settings className="mr-2 h-4 w-4" />
                Configurações
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
