'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function NewsPage() {
  const newsArticles = [
    {
      id: 1,
      title: 'UK Scrap Metal Prices Rise 15% Following Global Supply Chain Recovery',
      excerpt: 'Steel and copper prices see significant uptick as manufacturing demand increases across Europe and construction sector recovers.',
      date: '2024-01-15',
      category: 'Market News',
      image: 'https://readdy.ai/api/search-image?query=UK%20scrap%20metal%20prices%20rising%20steel%20copper%20manufacturing%20demand%20construction%20sector%20recovery%20industrial%20market%20analysis%20professional%20photography&width=400&height=250&seq=news-1&orientation=landscape',
      readTime: '3 min read'
    },
    {
      id: 2,
      title: 'New Environmental Regulations Impact Scrap Metal Industry',
      excerpt: 'Latest government guidelines introduce stricter environmental compliance requirements for metal recycling facilities across the UK.',
      date: '2024-01-12',
      category: 'Regulations',
      image: 'https://readdy.ai/api/search-image?query=environmental%20regulations%20scrap%20metal%20industry%20UK%20government%20compliance%20recycling%20facilities%20sustainability%20green%20technology%20professional%20photography&width=400&height=250&seq=news-2&orientation=landscape',
      readTime: '5 min read'
    },
    {
      id: 3,
      title: 'Electric Vehicle Battery Recycling Creates New Opportunities',
      excerpt: 'Growing EV market drives demand for lithium and cobalt recovery, opening new revenue streams for metal recyclers.',
      date: '2024-01-10',
      category: 'Technology',
      image: 'https://readdy.ai/api/search-image?query=electric%20vehicle%20battery%20recycling%20lithium%20cobalt%20recovery%20EV%20market%20metal%20recyclers%20technology%20innovation%20professional%20photography&width=400&height=250&seq=news-3&orientation=landscape',
      readTime: '4 min read'
    },
    {
      id: 4,
      title: 'ACT Scrap Metal Trading Expands Operations to Northern England',
      excerpt: 'Company announces new processing facility in Manchester to better serve customers across the North West region.',
      date: '2024-01-08',
      category: 'Company News',
      image: 'https://readdy.ai/api/search-image?query=scrap%20metal%20processing%20facility%20Manchester%20North%20West%20England%20industrial%20expansion%20company%20growth%20professional%20photography&width=400&height=250&seq=news-4&orientation=landscape',
      readTime: '2 min read'
    },
    {
      id: 5,
      title: 'Copper Theft Prevention: New Security Measures Implemented',
      excerpt: 'Industry collaboration with law enforcement introduces advanced tracking systems to combat rising copper theft incidents.',
      date: '2024-01-05',
      category: 'Security',
      image: 'https://readdy.ai/api/search-image?query=copper%20theft%20prevention%20security%20measures%20tracking%20systems%20law%20enforcement%20collaboration%20industrial%20security%20professional%20photography&width=400&height=250&seq=news-5&orientation=landscape',
      readTime: '3 min read'
    },
    {
      id: 6,
      title: 'Sustainable Recycling Practices Reduce Carbon Footprint by 30%',
      excerpt: 'New study shows how modern recycling techniques significantly lower environmental impact compared to primary metal production.',
      date: '2024-01-03',
      category: 'Sustainability',
      image: 'https://readdy.ai/api/search-image?query=sustainable%20recycling%20practices%20carbon%20footprint%20reduction%20environmental%20impact%20modern%20techniques%20metal%20production%20professional%20photography&width=400&height=250&seq=news-6&orientation=landscape',
      readTime: '4 min read'
    }
  ];

  const categories = ['All', 'Market News', 'Regulations', 'Technology', 'Company News', 'Security', 'Sustainability'];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-gray-800 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Industry News & Updates
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Stay informed with the latest developments in the UK scrap metal industry, market trends, regulations, and company updates.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-colors cursor-pointer"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString('en-GB', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <Link 
                    href={`/news/${article.id}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors cursor-pointer"
                  >
                    Read More
                    <div className="w-4 h-4 flex items-center justify-center ml-1">
                      <i className="ri-arrow-right-line"></i>
                    </div>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Industry News
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter for weekly updates on market trends, regulations, and company news.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}