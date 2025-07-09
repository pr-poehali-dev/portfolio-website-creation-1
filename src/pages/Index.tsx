import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const skills = [
    { name: "PHP", level: "Expert", icon: "Code" },
    { name: "Yii2", level: "Advanced", icon: "Layers" },
    { name: "Laravel", level: "Advanced", icon: "Layers" },
    { name: "Vue.js", level: "Advanced", icon: "Zap" },
    { name: "MySQL", level: "Advanced", icon: "Database" },
    { name: "JavaScript", level: "Advanced", icon: "Code2" },
    { name: "REST API", level: "Expert", icon: "Globe" },
    { name: "Docker", level: "Intermediate", icon: "Container" },
    { name: "Kubernetes", level: "Intermediate", icon: "Cloud" },
    { name: "Prompt Engineering", level: "Advanced", icon: "Brain" },
  ];

  const projects = [
    {
      year: "2024",
      title: "E-commerce Platform",
      description:
        "Полнофункциональная платформа электронной коммерции с интеграцией платежных систем",
      tech: ["Laravel", "Vue.js", "MySQL"],
      status: "Production",
    },
    {
      year: "2023",
      title: "CRM System",
      description:
        "Система управления взаимоотношениями с клиентами для малого бизнеса",
      tech: ["Yii2", "Vue.js", "PostgreSQL"],
      status: "Production",
    },
    {
      year: "2023",
      title: "API Gateway",
      description: "Микросервисный шлюз для управления API и аутентификации",
      tech: ["Laravel", "Redis", "Docker"],
      status: "Production",
    },
    {
      year: "2022",
      title: "Task Management",
      description: "Веб-приложение для управления задачами и проектами команды",
      tech: ["Yii2", "Vue.js", "MySQL"],
      status: "Production",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-roboto">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-inter font-bold text-xl text-primary">
              Булгаков Вадим
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                О себе
              </a>
              <a
                href="#portfolio"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Портфолио
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Контакты
              </a>
            </div>
            <Button variant="outline" size="sm" className="md:hidden">
              <Icon name="Menu" size={18} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-inter text-4xl md:text-5xl font-bold text-foreground mb-6">
                Архитектор
                <span className="text-primary block">цифровых решений</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Создаю современные веб-приложения на PHP и Vue.js.
                Специализируюсь на Laravel, Yii2 и архитектуре микросервисов.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button className="bg-primary hover:bg-primary/90">
                  <Icon name="Download" size={18} className="mr-2" />
                  Скачать резюме
                </Button>
                <Button variant="outline">
                  <Icon name="Mail" size={18} className="mr-2" />
                  Связаться
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, Россия
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  GMT+3
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="relative">
                <img
                  src="/img/ea14211f-1a08-4ba5-8f68-1a04a1fa1b80.jpg"
                  alt="Булгаков Вадим - Архитектор цифровых решений"
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-white px-4 py-2 rounded-lg font-medium">
                  5+ лет опыта
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-inter text-3xl font-bold mb-4">О себе</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Опытный веб-разработчик с глубокими знаниями современных
              технологий и best practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <h3 className="font-inter text-xl font-semibold mb-6">
                Основные навыки
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon
                          name={skill.icon}
                          size={20}
                          className="text-primary"
                        />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {skill.level}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="animate-fade-in">
              <h3 className="font-inter text-xl font-semibold mb-6">
                Опыт работы
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <h4 className="font-semibold text-lg">
                    Senior PHP Developer
                  </h4>
                  <p className="text-primary font-medium">
                    TechCorp • 2022 - настоящее время
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Разработка и поддержка высоконагруженных веб-приложений на
                    Laravel и Vue.js
                  </p>
                </div>

                <div className="border-l-4 border-gray-300 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-300 rounded-full"></div>
                  <h4 className="font-semibold text-lg">
                    Middle PHP Developer
                  </h4>
                  <p className="text-gray-600 font-medium">
                    WebStudio • 2020 - 2022
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Создание корпоративных веб-решений на Yii2 и интеграция с
                    внешними API
                  </p>
                </div>

                <div className="border-l-4 border-gray-300 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-300 rounded-full"></div>
                  <h4 className="font-semibold text-lg">
                    Junior PHP Developer
                  </h4>
                  <p className="text-gray-600 font-medium">
                    StartupLab • 2019 - 2020
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Разработка MVP продуктов и изучение современных фреймворков
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-inter text-3xl font-bold mb-4">Портфолио</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Избранные проекты, демонстрирующие мои навыки и экспертизу
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full"></div>

            {projects.map((project, index) => (
              <div
                key={index}
                className={`relative mb-12 ${index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2"}`}
              >
                <div
                  className={`md:w-1/2 ${index % 2 === 0 ? "md:ml-0" : "md:ml-auto"}`}
                >
                  <Card className="hover:shadow-lg transition-shadow animate-fade-in">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge
                          variant="outline"
                          className="text-primary border-primary"
                        >
                          {project.year}
                        </Badge>
                        <Badge variant="secondary">{project.status}</Badge>
                      </div>
                      <CardTitle className="font-inter text-xl">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Icon
                            name="ExternalLink"
                            size={14}
                            className="mr-1"
                          />
                          Демо
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="Github" size={14} className="mr-1" />
                          Код
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-white flex items-center justify-center">
                  <Icon name="Code" size={16} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-inter text-3xl font-bold mb-4">Контакты</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Готов к новым проектам и интересным задачам
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <h3 className="font-inter text-xl font-semibold mb-6">
                Свяжитесь со мной
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">
                      vadim.bulgakov@example.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <div>
                    <p className="font-medium">Местоположение</p>
                    <p className="text-muted-foreground">Москва, Россия</p>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="space-y-4">
                <h4 className="font-medium">Социальные сети</h4>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    <Icon name="Github" size={16} className="mr-2" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Linkedin" size={16} className="mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Telegram
                  </Button>
                </div>
              </div>
            </div>

            <div className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="font-inter">
                    Написать сообщение
                  </CardTitle>
                  <CardDescription>
                    Опишите ваш проект и я свяжусь с вами в ближайшее время
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Имя
                      </label>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Email
                      </label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Тема
                    </label>
                    <Input placeholder="Тема сообщения" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Сообщение
                    </label>
                    <Textarea
                      placeholder="Расскажите о вашем проекте..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Булгаков Вадим. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
