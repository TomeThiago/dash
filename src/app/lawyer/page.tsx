import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Linkedin,
  Facebook,
  Instagram,
  CheckCircle,
  Award,
  BookOpen,
  Briefcase,
  Users,
} from "lucide-react";

export default function LawyerLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Logo"
                width={32}
                height={32}
              />
              <span className="hidden font-bold sm:inline-block">
                Advogado Silva
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#home">Home</Link>
              <Link href="#services">Serviços</Link>
              <Link href="#about">Sobre</Link>
              <Link href="#contact">Contato</Link>
            </nav>
          </div>
          <Button className="ml-auto" size="sm">
            Agende uma consulta
          </Button>
          <Button variant="ghost" size="sm" className="ml-2">
            <Phone className="mr-2 h-4 w-4" />
            (11) 99999-9999
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Hero Image"
            width={1200}
            height={600}
            className="w-full object-cover"
            style={{ height: "600px" }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">
                Seu advogado de confiança para Direito Civil
              </h1>
              <p className="text-xl mb-6">
                Protegendo seus direitos com experiência e dedicação
              </p>
              <Button size="lg">Fale com um especialista</Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-100">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Nossos Serviços
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="h-10 w-10 mb-4" />,
                  title: "Direito de Família",
                  description:
                    "Divórcios, guarda de filhos, pensão alimentícia",
                },
                {
                  icon: <Briefcase className="h-10 w-10 mb-4" />,
                  title: "Direito Trabalhista",
                  description:
                    "Reclamações trabalhistas, acordos, indenizações",
                },
                {
                  icon: <BookOpen className="h-10 w-10 mb-4" />,
                  title: "Direito Civil",
                  description:
                    "Contratos, responsabilidade civil, direito do consumidor",
                },
              ].map((service, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 text-center">
                    {service.icon}
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p>{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              O que nossos clientes dizem
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "João Silva",
                  image: "/placeholder.svg?height=64&width=64",
                  text: "Excelente atendimento e resultados surpreendentes!",
                },
                {
                  name: "Maria Oliveira",
                  image: "/placeholder.svg?height=64&width=64",
                  text: "Profissionalismo e dedicação em cada etapa do processo.",
                },
                {
                  name: "Carlos Santos",
                  image: "/placeholder.svg?height=64&width=64",
                  text: "Conhecimento jurídico sólido e estratégias eficazes.",
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <CheckCircle
                              key={i}
                              className="h-4 w-4 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="italic">&ldquo;{testimonial.text}&rdquo;</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-100">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Advogado Silva"
                  width={400}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Sobre o Dr. Silva</h2>
                <p className="mb-4">
                  Com mais de 15 anos de experiência, o Dr. Silva é especialista
                  em direito civil e trabalhista. Formado pela Universidade de
                  São Paulo, possui mestrado em Direito Constitucional e é
                  membro ativo da OAB.
                </p>
                <p className="mb-4">
                  Seu compromisso com a excelência e a ética profissional o
                  tornam uma referência no campo jurídico, sempre buscando as
                  melhores soluções para seus clientes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">OAB/SP 123456</Badge>
                  <Badge variant="secondary">
                    Mestre em Direito Constitucional
                  </Badge>
                  <Badge variant="secondary">
                    Especialista em Direito Civil
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Entre em Contato
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <form className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nome
                      </label>
                      <Input id="name" placeholder="Seu nome completo" />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        E-mail
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Telefone
                      </label>
                      <Input id="phone" placeholder="(11) 99999-9999" />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Mensagem
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Como podemos ajudar?"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Enviar Mensagem
                    </Button>
                  </form>
                  <p className="text-sm text-gray-500 mt-4">
                    Suas informações são confidenciais e não serão
                    compartilhadas.
                  </p>
                </CardContent>
              </Card>
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Informações de Contato
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-2" />
                    <span>(11) 99999-9999</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-2" />
                    <span>contato@advogadosilva.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>Av. Paulista, 1000, São Paulo - SP</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>Segunda a Sexta, 9h às 18h</span>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-2">Siga-nos</h4>
                  <div className="flex space-x-4">
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <Linkedin className="h-6 w-6" />
                    </Link>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <Facebook className="h-6 w-6" />
                    </Link>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <Instagram className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards and Certifications */}
        <section className="py-16 bg-gray-100">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Reconhecimentos e Certificações
            </h2>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <Award className="h-16 w-16 mx-auto mb-4 text-primary" />
                <p className="font-semibold">Advogado do Ano 2022</p>
              </div>
              <div className="text-center">
                <BookOpen className="h-16 w-16 mx-auto mb-4 text-primary" />
                <p className="font-semibold">
                  Publicações em Revistas Jurídicas
                </p>
              </div>
              <div className="text-center">
                <Users className="h-16 w-16 mx-auto mb-4 text-primary" />
                <p className="font-semibold">
                  Membro da Associação dos Advogados
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Advogado Silva</h3>
              <p>Defendendo seus direitos com excelência e dedicação.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#home">Home</Link>
                </li>
                <li>
                  <Link href="#services">Serviços</Link>
                </li>
                <li>
                  <Link href="#about">Sobre</Link>
                </li>
                <li>
                  <Link href="#contact">Contato</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <p>Av. Paulista, 1000, São Paulo - SP</p>
              <p>contato@advogadosilva.com</p>
              <p>(11) 99999-9999</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2023 Advogado Silva. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
