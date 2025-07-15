import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [cart, setCart] = useState<{id: number, name: string, price: number, quantity: number}[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'electronics', name: 'Электроника', icon: 'Smartphone', color: 'bg-blue-500' },
    { id: 'clothing', name: 'Одежда', icon: 'Shirt', color: 'bg-purple-500' },
    { id: 'home', name: 'Дом и сад', icon: 'Home', color: 'bg-green-500' },
    { id: 'sports', name: 'Спорт', icon: 'Zap', color: 'bg-orange-500' },
    { id: 'beauty', name: 'Красота', icon: 'Heart', color: 'bg-pink-500' },
    { id: 'books', name: 'Книги', icon: 'BookOpen', color: 'bg-indigo-500' },
  ];

  const products = [
    { id: 1, name: 'iPhone 15 Pro', price: 89990, category: 'electronics', discount: 15, rating: 4.8, image: '📱' },
    { id: 2, name: 'Кроссовки Nike Air Max', price: 12990, category: 'clothing', discount: 0, rating: 4.6, image: '👟' },
    { id: 3, name: 'Кофемашина Delonghi', price: 25990, category: 'home', discount: 20, rating: 4.7, image: '☕' },
    { id: 4, name: 'Беспроводные наушники', price: 7990, category: 'electronics', discount: 10, rating: 4.5, image: '🎧' },
    { id: 5, name: 'Куртка зимняя', price: 8990, category: 'clothing', discount: 25, rating: 4.4, image: '🧥' },
    { id: 6, name: 'Фитнес браслет', price: 3990, category: 'sports', discount: 0, rating: 4.3, image: '⌚' },
    { id: 7, name: 'Увлажнитель воздуха', price: 4990, category: 'home', discount: 30, rating: 4.6, image: '💨' },
    { id: 8, name: 'Набор косметики', price: 2990, category: 'beauty', discount: 40, rating: 4.5, image: '💄' },
  ];

  const banners = [
    { id: 1, title: 'Мега распродажа!', subtitle: 'Скидки до 70%', color: 'bg-gradient-to-r from-red-500 to-pink-500' },
    { id: 2, title: 'Новая коллекция', subtitle: 'Весна 2024', color: 'bg-gradient-to-r from-blue-500 to-purple-500' },
    { id: 3, title: 'Бесплатная доставка', subtitle: 'При заказе от 2000₽', color: 'bg-gradient-to-r from-green-500 to-teal-500' },
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (product: typeof products[0]) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, quantity: 1 }];
    });
  };

  const getDiscountedPrice = (price: number, discount: number) => {
    return discount > 0 ? price * (1 - discount / 100) : price;
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon name="ShoppingBag" className="h-8 w-8 text-red-500" />
                <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                  MegaShop
                </span>
              </div>
              
              <div className="hidden md:flex items-center space-x-2 max-w-md">
                <Input
                  placeholder="Поиск товаров..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1"
                />
                <Button className="bg-red-500 hover:bg-red-600">
                  <Icon name="Search" className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="relative">
                <Icon name="ShoppingCart" className="h-5 w-5" />
                {cart.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs">
                    {cart.reduce((sum, item) => sum + item.quantity, 0)}
                  </Badge>
                )}
              </Button>
              <Button variant="outline">
                <Icon name="User" className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banners */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Carousel className="w-full">
            <CarouselContent>
              {banners.map((banner) => (
                <CarouselItem key={banner.id}>
                  <div className={`${banner.color} rounded-xl p-12 text-white text-center`}>
                    <h2 className="text-4xl font-bold mb-4">{banner.title}</h2>
                    <p className="text-xl mb-6">{banner.subtitle}</p>
                    <Button className="bg-white text-gray-900 hover:bg-gray-100">
                      Подробнее
                    </Button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Категории</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Card 
                key={category.id}
                className="hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-105"
                onClick={() => setSelectedCategory(category.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`${category.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <Icon name={category.icon} className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-sm">{category.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Все категории" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все категории</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">По популярности</SelectItem>
                  <SelectItem value="price-low">Сначала дешёвые</SelectItem>
                  <SelectItem value="price-high">Сначала дорогие</SelectItem>
                  <SelectItem value="rating">По рейтингу</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Найдено: {filteredProducts.length} товаров</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-6xl">
                    {product.image}
                  </div>
                  {product.discount > 0 && (
                    <Badge className="absolute top-2 right-2 bg-red-500 text-white">
                      -{product.discount}%
                    </Badge>
                  )}
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg line-clamp-2">{product.name}</h3>
                    
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <Icon name="Star" className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">
                        {getDiscountedPrice(product.price, product.discount).toLocaleString()}₽
                      </span>
                      {product.discount > 0 && (
                        <span className="text-sm text-gray-500 line-through">
                          {product.price.toLocaleString()}₽
                        </span>
                      )}
                    </div>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600"
                      onClick={() => addToCart(product)}
                    >
                      <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Специальные предложения</h2>
          <p className="text-xl mb-8">Подпишитесь на рассылку и получите скидку 15%</p>
          <div className="flex max-w-md mx-auto">
            <Input 
              placeholder="Ваш email"
              className="flex-1 bg-white text-gray-900"
            />
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 ml-2">
              Подписаться
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="ShoppingBag" className="h-8 w-8 text-red-500" />
                <span className="text-xl font-bold">MegaShop</span>
              </div>
              <p className="text-gray-400">
                Ваш универсальный интернет-магазин с широким выбором товаров
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Покупателям</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Возврат товара</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Гарантия</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Вакансии</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Служба поддержки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Часто задаваемые вопросы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Обратная связь</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MegaShop. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Fixed Cart Summary */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm">
          <h3 className="font-semibold mb-2">Корзина</h3>
          <div className="space-y-1 max-h-32 overflow-y-auto">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="truncate">{item.name}</span>
                <span>{item.quantity}x{item.price.toLocaleString()}₽</span>
              </div>
            ))}
          </div>
          <div className="border-t pt-2 mt-2">
            <div className="flex justify-between font-bold">
              <span>Итого:</span>
              <span>{cartTotal.toLocaleString()}₽</span>
            </div>
            <Button className="w-full mt-2 bg-green-500 hover:bg-green-600">
              Оформить заказ
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;