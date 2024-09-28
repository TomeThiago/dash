"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Toast } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { Package, Save, X } from "lucide-react";

export default function ProductRegistration() {
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you would typically handle the form submission,
    // e.g., sending the data to an API
    toast({
      title: "Produto cadastrado",
      description: "O produto foi cadastrado com sucesso.",
    });
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center">
            <Package className="mr-2" />
            Cadastro de Produto
          </CardTitle>
          <CardDescription>
            Preencha os detalhes do novo produto abaixo.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome do Produto</Label>
              <Input
                id="name"
                placeholder="Digite o nome do produto"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Descrição</Label>
              <Textarea id="description" placeholder="Descreva o produto" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Preço</Label>
                <Input
                  id="price"
                  type="number"
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stock">Estoque</Label>
                <Input
                  id="stock"
                  type="number"
                  placeholder="0"
                  min="0"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Categoria</Label>
              <Select>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="electronics">Eletrônicos</SelectItem>
                  <SelectItem value="clothing">Roupas</SelectItem>
                  <SelectItem value="books">Livros</SelectItem>
                  <SelectItem value="home">Casa e Decoração</SelectItem>
                  <SelectItem value="sports">Esportes</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="active" />
              <Label htmlFor="active">Produto Ativo</Label>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">
              <X className="mr-2 h-4 w-4" /> Cancelar
            </Button>
            <Button type="submit">
              <Save className="mr-2 h-4 w-4" /> Salvar Produto
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
