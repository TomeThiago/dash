import React from "react";
import Image from "next/image";
import Link from "next/link";
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
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Home,
  Search,
  Phone,
  Mail,
  MapPin,
  Check,
  Star,
  Building,
  Key,
  Briefcase,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function ImobiliariaLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Home className="h-6 w-6" />
            <span className="font-bold">Imobiliária Exemplo</span>
          </Link>
          <nav className="ml-auto flex items-center space-x-4 text-sm font-medium">
            <Link href="#imoveis">Imóveis</Link>
            <Link href="#servicos">Serviços</Link>
            <Link href="#sobre">Sobre</Link>
            <Link href="#contato">Contato</Link>
            <Button size="sm">Agende uma Visita</Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Imagem de uma casa luxuosa"
            width={1200}
            height={600}
            className="w-full object-cover"
            style={{ height: "600px" }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">
                Encontre o Lar dos Seus Sonhos
              </h1>
              <p className="text-xl mb-6">
                Imóveis de qualidade em localizações privilegiadas
              </p>
              <Button size="lg" className="mr-4">
                Ver Imóveis
              </Button>
              <Button size="lg" variant="outline">
                Fale Conosco
              </Button>
            </div>
          </div>
        </section>

        {/* Property Search */}
        <section className="py-12 bg-gray-100">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-8">
              Encontre o Imóvel Ideal
            </h2>
            <Card>
              <CardContent className="p-6">
                <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <Label htmlFor="tipo">Tipo de Imóvel</Label>
                    <Select>
                      <SelectTrigger id="tipo">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="casa">Casa</SelectItem>
                        <SelectItem value="apartamento">Apartamento</SelectItem>
                        <SelectItem value="terreno">Terreno</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="cidade">Cidade</Label>
                    <Input id="cidade" placeholder="Digite a cidade" />
                  </div>
                  <div>
                    <Label htmlFor="preco">Faixa de Preço</Label>
                    <Select>
                      <SelectTrigger id="preco">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-500000">Até R$ 500.000</SelectItem>
                        <SelectItem value="500000-1000000">
                          R$ 500.000 - R$ 1.000.000
                        </SelectItem>
                        <SelectItem value="1000000+">
                          Acima de R$ 1.000.000
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="mt-auto">
                    <Search className="mr-2 h-4 w-4" /> Buscar Imóveis
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Featured Properties */}
        <section id="imoveis" className="py-12">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-8">
              Imóveis em Destaque
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Casa de Luxo",
                  price: "R$ 1.500.000",
                  type: "Casa",
                  location: "Jardins, São Paulo",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Apartamento Moderno",
                  price: "R$ 800.000",
                  type: "Apartamento",
                  location: "Pinheiros, São Paulo",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Cobertura com Vista",
                  price: "R$ 2.000.000",
                  type: "Apartamento",
                  location: "Copacabana, Rio de Janeiro",
                  image: "/placeholder.svg?height=200&width=300",
                },
              ].map((property, index) => (
                <Card key={index}>
                  <Image
                    src={property.image}
                    alt={property.title}
                    width={300}
                    height={200}
                    className="w-full object-cover h-48"
                  />
                  <CardHeader>
                    <CardTitle>{property.title}</CardTitle>
                    <CardDescription>{property.location}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{property.price}</p>
                    <Badge className="mt-2">{property.type}</Badge>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Ver Detalhes</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Ver Todos os Imóveis
              </Button>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="servicos" className="py-12 bg-gray-100">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-8">
              Nossos Serviços
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Building className="h-12 w-12 mb-4" />,
                  title: "Compra e Venda",
                  description:
                    "Assessoria completa na compra e venda de imóveis",
                },
                {
                  icon: <Key className="h-12 w-12 mb-4" />,
                  title: "Aluguel",
                  description:
                    "Gestão de aluguéis e administração de propriedades",
                },
                {
                  icon: <Briefcase className="h-12 w-12 mb-4" />,
                  title: "Consultoria",
                  description:
                    "Consultoria especializada em investimentos imobiliários",
                },
              ].map((service, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="flex justify-center">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Us */}
        <section id="sobre" className="py-12">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Equipe da Imobiliária"
                  width={400}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">
                  Sobre a Imobiliária Exemplo
                </h2>
                <p className="mb-4">
                  Com mais de 20 anos de experiência no mercado imobiliário, a
                  Imobiliária Exemplo é referência em qualidade e
                  confiabilidade. Nossa equipe de profissionais altamente
                  qualificados está comprometida em encontrar o imóvel perfeito
                  para você e sua família.
                </p>
                <ul className="space-y-2">
                  {[
                    "Atendimento personalizado",
                    "Amplo portfólio de imóveis",
                    "Transparência em todas as negociações",
                    "Suporte jurídico especializado",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 mr-2 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 bg-gray-100">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-8">
              O que nossos clientes dizem
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "João Silva",
                  text: "Excelente atendimento! Encontraram a casa perfeita para minha família.",
                  image: "/placeholder.svg?height=64&width=64",
                },
                {
                  name: "Maria Oliveira",
                  text: "Profissionais competentes e atenciosos. Recomendo fortemente!",
                  image: "/placeholder.svg?height=64&width=64",
                },
                {
                  name: "Carlos Santos",
                  text: "Processo de compra tranquilo e sem complicações. Muito satisfeito!",
                  image: "/placeholder.svg?height=64&width=64",
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
                            <Star
                              key={i}
                              className="h-4 w-4 text-yellow-400 fill-current"
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

        {/* Contact Form */}
        <section id="contato" className="py-12">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-8">
              Entre em Contato
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Fale Conosco</CardTitle>
                  <CardDescription>
                    Preencha o formulário abaixo e entraremos em contato em
                    breve.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
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
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" placeholder="(00) 00000-0000" />
                    </div>
                    <div>
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea
                        id="message"
                        placeholder="Como podemos ajudar?"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Informações de Contato</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2" />
                      <span>Av. Paulista, 1000, São Paulo - SP</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-2" />
                      <span>(11) 99999-9999</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-2" />
                      <span>contato@imobiliariaexemplo.com</span>
                    </div>
                    <div>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0975636357687!2d-46.65429508502192!3d-23.564616184681765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1sen!2sbr!4v1635959684513!5m2!1sen!2sbr"
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Imobiliária Exemplo
              </h3>
              <p>Seu parceiro confiável no mercado imobiliário.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#imoveis">Imóveis</Link>
                </li>
                <li>
                  <Link href="#servicos">Serviços</Link>
                </li>
                <li>
                  <Link href="#sobre">Sobre Nós</Link>
                </li>
                <li>
                  <Link href="#contato">Contato</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2">
                <li>Compra e Venda</li>
                <li>Aluguel</li>
                <li>Consultoria</li>
                <li>Avaliação de Imóveis</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-gray-400">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-gray-400">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-gray-400">
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>
              &copy; 2023 Imobiliária Exemplo. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
