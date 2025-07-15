import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const cryptoData = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$43,250', change: '+2.5%', positive: true },
    { name: 'Ethereum', symbol: 'ETH', price: '$2,680', change: '+1.8%', positive: true },
    { name: 'Tether', symbol: 'USDT', price: '$1.00', change: '0.0%', positive: null },
    { name: 'BNB', symbol: 'BNB', price: '$315', change: '-0.7%', positive: false },
  ];

  const features = [
    { icon: 'Shield', title: 'Безопасность', description: 'Многоуровневая система защиты' },
    { icon: 'TrendingUp', title: 'Аналитика', description: 'Профессиональные торговые инструменты' },
    { icon: 'Wallet', title: 'Кошелёк', description: 'Удобное управление активами' },
    { icon: 'Users', title: 'Поддержка', description: 'Помощь 24/7' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">CryptoExchange</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#trading" className="text-gray-700 hover:text-blue-600 transition-colors">Торговля</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Портфолио</a>
              <a href="#learning" className="text-gray-700 hover:text-blue-600 transition-colors">Обучение</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline">Войти</Button>
              <Button className="bg-blue-600 hover:bg-blue-700">Регистрация</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Надёжная криптобиржа <br />
              для профессиональной торговли
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Торгуйте популярными криптовалютами с минимальными комиссиями 
              и максимальной безопасностью
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Начать торговлю
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section id="trading" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Популярные криптовалюты
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cryptoData.map((crypto, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-bold text-sm">{crypto.symbol}</span>
                      </div>
                      <div>
                        <CardTitle className="text-lg">{crypto.name}</CardTitle>
                        <p className="text-sm text-gray-500">{crypto.symbol}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">{crypto.price}</span>
                    <Badge 
                      variant={crypto.positive === true ? 'default' : crypto.positive === false ? 'destructive' : 'secondary'}
                      className={crypto.positive === true ? 'bg-green-100 text-green-800' : crypto.positive === false ? 'bg-red-100 text-red-800' : ''}
                    >
                      {crypto.change}
                    </Badge>
                  </div>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                    Торговать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Преимущества нашей биржи
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon} className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Управление портфолио
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="PieChart" className="h-5 w-5 mr-2" />
                  Баланс портфолио
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">$12,450.67</span>
                    <Badge className="bg-green-100 text-green-800">+15.3%</Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">BTC</span>
                      <span className="font-medium">$8,500</span>
                    </div>
                    <Progress value={68} className="h-2" />
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">ETH</span>
                      <span className="font-medium">$3,200</span>
                    </div>
                    <Progress value={26} className="h-2" />
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">USDT</span>
                      <span className="font-medium">$750</span>
                    </div>
                    <Progress value={6} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="TrendingUp" className="h-5 w-5 mr-2" />
                  Недавные транзакции
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { type: 'buy', currency: 'BTC', amount: '0.15', price: '$6,487.50', time: '2 часа назад' },
                    { type: 'sell', currency: 'ETH', amount: '2.5', price: '$6,700.00', time: '1 день назад' },
                    { type: 'buy', currency: 'USDT', amount: '1000', price: '$1,000.00', time: '3 дня назад' },
                  ].map((transaction, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          transaction.type === 'buy' ? 'bg-green-100' : 'bg-red-100'
                        }`}>
                          <Icon 
                            name={transaction.type === 'buy' ? 'ArrowUp' : 'ArrowDown'} 
                            className={`h-4 w-4 ${
                              transaction.type === 'buy' ? 'text-green-600' : 'text-red-600'
                            }`} 
                          />
                        </div>
                        <div>
                          <p className="font-medium text-sm">
                            {transaction.type === 'buy' ? 'Покупка' : 'Продажа'} {transaction.currency}
                          </p>
                          <p className="text-xs text-gray-500">{transaction.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-sm">{transaction.amount} {transaction.currency}</p>
                        <p className="text-xs text-gray-500">{transaction.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section id="learning" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Обучение и развитие
          </h2>
          <Tabs defaultValue="beginner" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="beginner">Начинающий</TabsTrigger>
              <TabsTrigger value="intermediate">Продвинутый</TabsTrigger>
              <TabsTrigger value="expert">Эксперт</TabsTrigger>
            </TabsList>
            
            <TabsContent value="beginner" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Что такое криптовалюта?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Изучите основы цифровых валют и блокчейн технологий
                    </p>
                    <Button variant="outline" className="w-full">
                      Начать изучение
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Как совершить первую покупку</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Пошаговое руководство для новичков
                    </p>
                    <Button variant="outline" className="w-full">
                      Смотреть гайд
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="intermediate" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Технический анализ</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Изучите графики и индикаторы для принятия решений
                    </p>
                    <Button variant="outline" className="w-full">
                      Изучить анализ
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Управление рисками</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Стратегии защиты вашего капитала
                    </p>
                    <Button variant="outline" className="w-full">
                      Узнать больше
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="expert" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Алгоритмическая торговля</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Автоматизация торговых стратегий
                    </p>
                    <Button variant="outline" className="w-full">
                      Изучить API
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Арбитражные возможности</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Поиск и использование ценовых различий
                    </p>
                    <Button variant="outline" className="w-full">
                      Продвинутые стратегии
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Часто задаваемые вопросы
          </h2>
          
          <div className="space-y-6">
            {[
              {
                question: "Как начать торговлю на бирже?",
                answer: "Пройдите регистрацию, подтвердите email и пополните баланс. Начните с малых сумм."
              },
              {
                question: "Какие комиссии за торговлю?",
                answer: "Комиссия за торговлю составляет 0.1% для мейкеров и 0.2% для тейкеров."
              },
              {
                question: "Как обеспечивается безопасность?",
                answer: "Мы используем холодное хранение, двухфакторную аутентификацию и шифрование данных."
              },
              {
                question: "Можно ли торговать через мобильное приложение?",
                answer: "Да, у нас есть мобильные приложения для iOS и Android с полным функционалом."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">CryptoExchange</span>
              </div>
              <p className="text-gray-400">
                Надёжная криптобиржа для профессиональной торговли
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Торговля</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Спот торговля</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Фьючерсы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Опционы</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Центр помощи</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Связаться с нами</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API документация</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Безопасность</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Условия использования</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CryptoExchange. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;