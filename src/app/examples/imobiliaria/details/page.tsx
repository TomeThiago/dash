"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import {
  Bed,
  Bath,
  Square,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Home,
  ArrowLeft,
  Car,
  Building,
  Sun,
  DollarSign,
  Printer,
  Share2,
  Heart,
} from "lucide-react";

export default function PropertyDetails() {
  const [isFavorite, setIsFavorite] = useState(false);

  const property = {
    id: 1,
    title: "Apartamento de 3 Quartos no Centro",
    price: "R$ 850.000",
    rent: "R$ 3.500",
    address: "Rua das Flores, 123 - Centro, São Paulo - SP",
    description:
      "Amplo apartamento de 3 quartos localizado no coração da cidade. Com acabamentos de alta qualidade, este imóvel oferece conforto e praticidade para sua família. Desfrute de uma vista panorâmica da cidade e fácil acesso a todos os serviços essenciais.",
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    parkingSpaces: 2,
    floor: 10,
    features: [
      "Piso em porcelanato",
      "Armários embutidos",
      "Ar condicionado",
      "Varanda gourmet",
      "Reformado recentemente",
    ],
    buildingFeatures: [
      "Portaria 24h",
      "Elevador",
      "Salão de festas",
      "Piscina",
      "Academia",
      "Playground",
    ],
    condoFee: "R$ 800",
    iptu: "R$ 250",
    solarOrientation: "Leste",
    accessibility: "Rampas de acesso e elevador adaptado",
    status: "Disponível",
    walkScore: 85,
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    virtualTour: "https://example.com/virtual-tour",
    video: "https://example.com/property-video",
    nearbyPlaces: [
      { name: "Escola Municipal", distance: "300m" },
      { name: "Supermercado Extra", distance: "500m" },
      { name: "Estação de Metrô", distance: "800m" },
      { name: "Parque Municipal", distance: "1km" },
    ],
    agent: {
      name: "Ana Silva",
      phone: "(11) 99999-8888",
      email: "ana.silva@imobiliariaexemplo.com",
      image: "/placeholder.svg?height=64&width=64",
    },
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement contact form submission logic here
    console.log("Contact form submitted");
  };

  const handleScheduleVisit = () => {
    // Implement visit scheduling logic here
    console.log("Visit scheduled");
  };

  const handleShare = () => {
    // Implement sharing logic here
    console.log("Property shared");
  };

  const handlePrint = () => {
    window.print();
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Home className="h-6 w-6" />
            <span className="font-bold text-xl">Imobiliária Exemplo</span>
          </Link>
          <Link
            href="/"
            className="flex items-center text-sm text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Voltar para a página inicial
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-5 w-5 text-gray-500" />
              <span className="text-gray-600">{property.address}</span>
            </div>
            <div className="flex space-x-2 mb-4">
              <Badge variant="secondary" className="text-lg">
                Venda: {property.price}
              </Badge>
              <Badge variant="secondary" className="text-lg">
                Aluguel: {property.rent}/mês
              </Badge>
            </div>

            <Carousel className="mb-8">
              <CarouselContent>
                {property.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={image}
                      alt={`Imagem ${index + 1} do imóvel`}
                      width={800}
                      height={600}
                      className="rounded-lg"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            <div className="flex space-x-4 mb-8">
              <Button onClick={handleScheduleVisit}>
                <Calendar className="h-5 w-5 mr-2" />
                Agendar Visita
              </Button>
              <Button variant="outline" onClick={handleShare}>
                <Share2 className="h-5 w-5 mr-2" />
                Compartilhar
              </Button>
              <Button variant="outline" onClick={handlePrint}>
                <Printer className="h-5 w-5 mr-2" />
                Imprimir
              </Button>
              <Button variant="outline" onClick={toggleFavorite}>
                <Heart
                  className={`h-5 w-5 mr-2 ${
                    isFavorite ? "fill-current text-red-500" : ""
                  }`}
                />
                {isFavorite ? "Favoritado" : "Favoritar"}
              </Button>
            </div>

            <Tabs defaultValue="details" className="mb-8">
              <TabsList>
                <TabsTrigger value="details">Detalhes</TabsTrigger>
                <TabsTrigger value="features">Características</TabsTrigger>
                <TabsTrigger value="location">Localização</TabsTrigger>
                <TabsTrigger value="media">Mídia</TabsTrigger>
              </TabsList>
              <TabsContent value="details">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-gray-700 mb-4">{property.description}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex items-center">
                        <Bed className="h-5 w-5 mr-2 text-gray-500" />
                        <span>{property.bedrooms} Quartos</span>
                      </div>
                      <div className="flex items-center">
                        <Bath className="h-5 w-5 mr-2 text-gray-500" />
                        <span>{property.bathrooms} Banheiros</span>
                      </div>
                      <div className="flex items-center">
                        <Square className="h-5 w-5 mr-2 text-gray-500" />
                        <span>{property.area} m²</span>
                      </div>
                      <div className="flex items-center">
                        <Car className="h-5 w-5 mr-2 text-gray-500" />
                        <span>{property.parkingSpaces} Vagas</span>
                      </div>
                      <div className="flex items-center">
                        <Building className="h-5 w-5 mr-2 text-gray-500" />
                        <span>{property.floor}º Andar</span>
                      </div>
                      <div className="flex items-center">
                        <Sun className="h-5 w-5 mr-2 text-gray-500" />
                        <span>{property.solarOrientation}</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-5 w-5 mr-2 text-gray-500" />
                        <span>Condomínio: {property.condoFee}/mês</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-5 w-5 mr-2 text-gray-500" />
                        <span>IPTU: {property.iptu}/mês</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="features">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-2">
                      Características do Imóvel
                    </h3>
                    <ul className="grid grid-cols-2 gap-2 mb-4">
                      {property.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="h-2 w-2 bg-primary rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <h3 className="text-lg font-semibold mb-2">
                      Características do Condomínio
                    </h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {property.buildingFeatures.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="h-2 w-2 bg-primary rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="location">
                <Card>
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold mb-2">
                        Índice de Caminhabilidade
                      </h3>
                      <div className="flex items-center">
                        <Progress
                          value={property.walkScore}
                          className="w-full mr-4"
                        />
                        <span className="font-semibold">
                          {property.walkScore}/100
                        </span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Proximidades</h3>
                    <ul className="space-y-2">
                      {property.nearbyPlaces.map((place, index) => (
                        <li key={index} className="flex items-center">
                          <MapPin className="h-5 w-5 mr-2 text-gray-500" />
                          <span>
                            {place.name} - {place.distance}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0975636357687!2d-46.65429508502192!3d-23.564616184681765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1sen!2sbr!4v1635959684513!5m2!1sen!2sbr"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="media">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-2">Tour Virtual</h3>
                    <iframe
                      src={property.virtualTour}
                      width="100%"
                      height="400"
                      allowFullScreen
                    ></iframe>
                    <h3 className="text-lg font-semibold mt-4 mb-2">
                      Vídeo do Imóvel
                    </h3>
                    <video src={property.video} controls width="100%"></video>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Accordion type="single" collapsible className="mb-8">
              <AccordionItem value="financing">
                <AccordionTrigger>Simulação de Financiamento</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Utilize nossa calculadora financeira para simular o
                    financiamento deste imóvel.
                  </p>
                  {/* Add financing calculator component here */}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="documentation">
                <AccordionTrigger>Documentação</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Este imóvel possui toda a documentação em ordem, incluindo
                    escritura, matrícula e certidão negativa.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Entre em Contato</CardTitle>
                <CardDescription>
                  Tire suas dúvidas ou agende uma visita
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" placeholder="Seu nome" />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" placeholder="(00) 00000-0000" />
                  </div>
                  <div>
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea id="message" placeholder="Sua mensagem" />
                  </div>
                  <Button type="submit" className="w-full">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Corretor Responsável</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar>
                    <AvatarImage
                      src={property.agent.image}
                      alt={property.agent.name}
                    />
                    <AvatarFallback>
                      {property.agent.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{property.agent.name}</p>
                    <p className="text-sm text-gray-500">
                      Corretor Especializado
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-gray-500" />
                    <span>{property.agent.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-gray-500" />
                    <span>{property.agent.email}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Imóveis Relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Add related properties here */}
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <p className="text-center">
            &copy; 2023 Imobiliária Exemplo. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
