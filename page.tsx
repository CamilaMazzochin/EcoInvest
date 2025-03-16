import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="absolute z-10 w-full flex items-center justify-between px-12 py-6">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path d="M12 17.75L12 6.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M6.25 12L17.75 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M7.75 7.75L16.25 16.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M16.25 7.75L7.75 16.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="text-2xl font-light text-white ml-2">
              eco<span className="font-medium">Invest</span>
            </span>
          </div>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link href="#" className="text-white font-light">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white font-light">
                Sobre nós
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white font-light">
                Projetos
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white font-light">
                Como funciona
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full text-sm bg-white text-black border-none px-6 py-2 font-light"
          >
            Baixe o App
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%201-SEJ80euE9ShViwcXXWvP4KurhVrGrB.png"
          alt="Solar panels on a house roof"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20">
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-5xl md:text-7xl font-light text-white max-w-4xl mb-4">Invista no Futuro com Energia Sustentável</h1>
            <p className="text-xl text-white font-light mb-10">Reduza custos, gere sua própria energia e contribua para um mundo mais sustentável com soluções inteligentes em energia solar.</p>
            <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90 px-8 py-6 font-normal">
              Quero Investir
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm text-muted-foreground">
                Na eco-Invest, estamos comprometidos em oferecer soluções energéticas sustentáveis de ponta, que não
                apenas impulsionam o desenvolvimento econômico, mas também contribuem para um futuro mais sustentável e
                equilibrado para o nosso planeta.
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Nossos investidores e parceiros são pessoas ambiciosas, que desejam fazer parte da revolução energética
                global. Ao investir em nossos projetos solares, você não apenas garante um retorno financeiro atrativo,
                mas também contribui diretamente para a redução da pegada de carbono e para a construção de um mundo
                mais limpo e sustentável. Nossos especialistas cuidadosamente selecionam e gerenciam cada projeto para
                garantir eficiência máxima e impacto positivo duradouro. Junte-se a nós nessa jornada transformadora e
                faça parte da solução energética do futuro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <h2 className="mb-8 text-xl font-medium">Projetos em destaque</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%2018993-jKmDFVvHZuZdGouO6pPwg3JWVTBmms.png",
                title: "Condomínio solar verde",
                location: "São Paulo, SP",
                raised: "R$ 89.000",
                goal: "R$ 150.000",
                progress: 59,
                investors: 42,
              },
              {
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%2018993%20%281%29-SaKuqo2qhqPt0W081N5dCxtSWelBCO.png",
                title: "Condomínio solar verde",
                location: "Rio de Janeiro, RJ",
                raised: "R$ 120.000",
                goal: "R$ 200.000",
                progress: 60,
                investors: 37,
              },
              {
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%2018993%20%282%29-S3daQ0XUDmB8nXNstke7INatw0pcfN.png",
                title: "Condomínio solar verde",
                location: "Belo Horizonte, MG",
                raised: "R$ 75.000",
                goal: "R$ 180.000",
                progress: 42,
                investors: 29,
              },
            ].map((project, i) => (
              <div key={i} className="overflow-hidden rounded-lg border bg-white">
                <div className="aspect-[4/3] w-full">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} em ${project.location}`}
                    width={500}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-1 text-2xl font-bold text-[#0a2540]">{project.title}</h3>
                  <p className="mb-4 text-gray-500">{project.location}</p>

                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-lg font-medium">Arrecadado: {project.raised}</span>
                    <span className="text-lg font-medium">{project.progress}%</span>
                  </div>

                  <div className="mb-4 h-2 w-full overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full bg-[#0a2540]" style={{ width: `${project.progress}%` }}></div>
                  </div>

                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-gray-500">Meta: {project.goal}</span>
                    <span className="text-gray-500">{project.investors} investidores</span>
                  </div>

                  <Button className="w-full rounded-full bg-[#0a2540] py-6 text-base hover:bg-[#0a2540]/90">
                    Ver Projeto
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Projects */}
      <section className="bg-[#0a2540] py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <span className="text-xs font-medium uppercase tracking-wider text-white/70">PROJECTS</span>
              <h2 className="text-2xl font-medium text-white max-w-xl">
                Conheça nossos impactantes projetos em todo o mundo.
              </h2>
            </div>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-none bg-white text-[#0a2540] hover:bg-white/90 px-8 py-6"
            >
              Ver todos projetos
            </Button>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="h-[300px] w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%281%29-sk12EMeGHSNuVaIZJ37Bxm81rXCLBl.png"
          alt="Solar panels installation on mounting system"
          width={1200}
          height={300}
          className="h-full w-full object-cover"
        />
      </section>

      {/* Testimonial */}
      <section className="bg-gray-50 py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl rounded-lg border bg-background p-6 shadow-sm">
            <p className="mb-4 text-xs text-muted-foreground leading-relaxed">
              "Investir com a eco-Invest foi uma das melhores decisões que tomei. Não apenas estou recebendo um retorno
              financeiro excelente, mas também tenho a satisfação de contribuir para um futuro mais sustentável. A
              equipe é extremamente profissional e transparente em todas as etapas do processo."
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium">Carolina, Porto</span>
              <span className="text-xs text-muted-foreground">⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-[#0a2540] py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-2 text-lg font-medium text-white">Entre em contato</h2>
              <p className="mb-6 text-xs text-white/70">
                Quer saber mais sobre nossos projetos de energia solar? Entre em contato conosco.
              </p>
            </div>
            <div className="space-y-3">
              <Input
                placeholder="Seu nome"
                className="rounded-sm bg-white/10 text-xs text-white placeholder:text-white/50 border-white/20"
              />
              <Input
                placeholder="Seu email"
                className="rounded-sm bg-white/10 text-xs text-white placeholder:text-white/50 border-white/20"
              />
              <Textarea
                placeholder="Sua mensagem"
                className="min-h-[100px] rounded-sm bg-white/10 text-xs text-white placeholder:text-white/50 border-white/20"
              />
              <Button className="rounded-sm bg-white text-[#0a2540] text-xs hover:bg-white/90">Enviar mensagem</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 text-center sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-4 h-6 w-6 text-muted-foreground"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <div className="text-2xl font-medium">1,234</div>
              <p className="text-xs text-muted-foreground">Investidores Ativos</p>
            </div>
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-4 h-6 w-6 text-yellow-500"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <path d="M12 1v2"></path>
                <path d="M12 21v2"></path>
                <path d="M4.22 4.22l1.42 1.42"></path>
                <path d="M18.36 18.36l1.42 1.42"></path>
                <path d="M1 12h2"></path>
                <path d="M21 12h2"></path>
                <path d="M4.22 19.78l1.42-1.42"></path>
                <path d="M18.36 5.64l1.42-1.42"></path>
              </svg>
              <div className="text-2xl font-medium">789 kW</div>
              <p className="text-xs text-muted-foreground">Energia Solar Gerada</p>
            </div>
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-4 h-6 w-6 text-green-500"
              >
                <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
                <path d="M21 12a9 9 0 0 0-9-9"></path>
                <path d="M12 12 2 12"></path>
              </svg>
              <div className="text-2xl font-medium">456t</div>
              <p className="text-xs text-muted-foreground">CO2 Evitado</p>
            </div>
          </div>
        </div>
      </section>

                 {/* Footer */}
       <footer className="bg-[#0a2540] py-10 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <img src="/mnt/data/Frame 15.png" alt="EcolInvest Logo" className="h-10" />
            <p className="mt-2 text-sm">Together we will create a <strong>sustainable future</strong></p>
          </div>
          
          <div>
            <h3 className="mb-3 text-sm font-semibold">Explore</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="#" className="text-white/70 hover:text-white">Blog</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-white">Sobre nós</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-white">Produtos & serviços</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-white">Projetos</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-3 text-sm font-semibold">Connect with Us</h3>
            <p className="text-sm text-white/70">+00 (00) 000-000</p>
            <p className="text-sm text-white/70">ecoinvest.co@gmail.com</p>
            <p className="text-sm text-white/70">123 Green energy road, ecocity, Planet Earth</p>
          </div>
        </div>
        
        <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/70">
          <p>© 2025 EcolInvest. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Link href="#" className="text-white/70 hover:text-white">📸</Link>
            <Link href="#" className="text-white/70 hover:text-white">📘</Link>
            <Link href="#" className="text-white/70 hover:text-white">🔗</Link>
            <Link href="#" className="text-white/70 hover:text-white">📱</Link>
          </div>
        </div>
      </div>
    </footer>
    </main>
  )
}

