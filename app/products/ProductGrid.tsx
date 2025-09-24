
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '../../lib/supabase';

interface ProductGridProps {
  category: string;
  sortBy: string;
  priceRange: number[];
}

export default function ProductGrid({ category, sortBy, priceRange }: ProductGridProps) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const categories = {
    'ferrous': 'Ferrous',
    'non-ferrous': 'Non-Ferrous',
    'automotive': 'Automotive',
    'electronics': 'Electronics',
    'industrial': 'Industrial',
    'cables': 'Cables',
    'paper': 'Paper',
    'fabric': 'Fabric & Textile',
    'machinery': 'Machinery',
    'wood': 'Wood & Timber',
    'plastic': 'Plastic'
  };

  useEffect(() => {
    fetchProducts();
  }, [category, sortBy]);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      let query = supabase
        .from('products')
        .select('*');

      if (category !== 'all') {
        query = query.eq('category', category);
      }

      switch (sortBy) {
        case 'newest':
          query = query.order('created_at', { ascending: false });
          break;
        case 'rating':
          query = query.order('rating', { ascending: false });
          break;
        case 'alphabetical':
          query = query.order('name', { ascending: true });
          break;
        default:
          query = query.order('created_at', { ascending: false });
      }

      const { data, error } = await query;

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      const mockProducts = getMockProducts();
      const filteredMockProducts = category === 'all' 
        ? mockProducts 
        : mockProducts.filter(product => product.category === category);
      setProducts(filteredMockProducts);
    } finally {
      setIsLoading(false);
    }
  };

  const getMockProducts = () => {
    return [
      {
        id: 1,
        name: 'HMS Scrap Auction by Factory',
        slug: 'hms-scrap-auction-by-factory',
        category: 'ferrous',
        categoryName: 'Ferrous',
        description: 'Heavy melting steel scrap grade 1, minimum 6mm thickness, ideal for steel mills and industrial recycling.',
        image_url: 'https://readdy.ai/api/search-image?query=heavy%20melting%20steel%20HMS%20scrap%20grade%201%20thick%20steel%20plates%20industrial%20metal%20recycling%20facility%20clean%20rusty%20steel%20materials%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=hms-scrap-grid&orientation=landscape',
        rating: 4.8,
        location: 'Birmingham, UK',
        seller: 'Midlands Steel Recovery',
        verified: true,
        min_order: '10 tonnes'
      },
      {
        id: 2,
        name: 'Factory Metal MS Scrap for Sale',
        slug: 'factory-metal-ms-scrap-for-sale',
        category: 'ferrous',
        categoryName: 'Ferrous',
        description: 'High-grade mild steel scrap from factory operations, perfect for re-rolling and steel manufacturing.',
        image_url: 'https://readdy.ai/api/search-image?query=mild%20steel%20MS%20scrap%20factory%20operations%20industrial%20metal%20recycling%20clean%20steel%20materials%20manufacturing%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=ms-scrap-grid&orientation=landscape',
        rating: 4.7,
        location: 'Sheffield, UK',
        seller: 'Sheffield Steel Works',
        verified: true,
        min_order: '8 tonnes'
      },
      {
        id: 3,
        name: 'Stainless Steel 316 Industrial Grade',
        slug: 'stainless-steel-316-industrial-grade',
        category: 'ferrous',
        categoryName: 'Ferrous',
        description: 'High-grade stainless steel 316 scrap from food processing and chemical industries with excellent corrosion resistance.',
        image_url: 'https://readdy.ai/api/search-image?query=stainless%20steel%20316%20scrap%20food%20processing%20chemical%20industry%20shiny%20silver%20metal%20industrial%20recycling%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=stainless-steel-316&orientation=landscape',
        rating: 4.9,
        location: 'London, UK',
        seller: 'Premium Steel Traders',
        verified: true,
        min_order: '250 kg'
      },
      {
        id: 4,
        name: 'Copper Millberry Wire Scrap Pure',
        slug: 'copper-millberry-wire-scrap-pure',
        category: 'non-ferrous',
        categoryName: 'Non-Ferrous',
        description: 'Bright copper wire scrap, 99.9% pure, perfect for electrical industry applications and high conductivity needs.',
        image_url: 'https://readdy.ai/api/search-image?query=bright%20copper%20wire%20millberry%20scrap%20pure%20copper%20electrical%20cables%20shiny%20copper%20materials%20high%20conductivity%20metal%20recycling%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=copper-millberry-grid&orientation=landscape',
        rating: 4.9,
        location: 'London, UK',
        seller: 'London Metal Traders',
        verified: true,
        min_order: '100 kg'
      },
      {
        id: 5,
        name: 'Aluminium Wire Scrap',
        slug: 'aluminium-wire-scrap',
        category: 'non-ferrous',
        categoryName: 'Non-Ferrous',
        description: 'Clean aluminium wire scrap with high purity, ideal for recycling into new aluminium products.',
        image_url: 'https://readdy.ai/api/search-image?query=aluminum%20wire%20scrap%20clean%20high%20purity%20recycling%20aluminum%20materials%20silver%20metal%20wires%20industrial%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=aluminum-wire-grid&orientation=landscape',
        rating: 4.7,
        location: 'Manchester, UK',
        seller: 'Northern Aluminium Co.',
        verified: true,
        min_order: '500 kg'
      },
      {
        id: 6,
        name: 'Aluminium Extrusion Scrap 6063',
        slug: 'aluminium-extrusion-scrap-6063',
        category: 'non-ferrous',
        categoryName: 'Non-Ferrous',
        description: 'Clean aluminium extrusion profiles grade 6063 from construction and manufacturing industries.',
        image_url: 'https://readdy.ai/api/search-image?query=aluminum%20extrusion%20profiles%206063%20construction%20manufacturing%20clean%20aluminum%20shapes%20industrial%20recycling%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=aluminum-extrusion-grid&orientation=landscape',
        rating: 4.8,
        location: 'Glasgow, UK',
        seller: 'Scottish Metal Recovery',
        verified: true,
        min_order: '750 kg'
      },
      {
        id: 7,
        name: 'Car Battery Scrap Lead Recovery',
        slug: 'car-battery-scrap-lead-recovery',
        category: 'automotive',
        categoryName: 'Automotive',
        description: 'End-of-life automotive batteries for lead recovery and recycling processes with proper neutralization.',
        image_url: 'https://readdy.ai/api/search-image?query=car%20automotive%20battery%20scrap%20recycling%20lead%20acid%20batteries%20waste%20collection%20industrial%20recycling%20black%20plastic%20cases%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=car-battery-scrap-auto&orientation=landscape',
        rating: 4.5,
        location: 'Leeds, UK',
        seller: 'Auto Recycling Yorkshire',
        verified: true,
        min_order: '50 units'
      },
      {
        id: 8,
        name: 'Catalytic Converter Scrap',
        slug: 'catalytic-converter-scrap',
        category: 'automotive',
        categoryName: 'Automotive',
        description: 'Used automotive catalytic converters containing platinum group metals for precious metal recovery operations.',
        image_url: 'https://readdy.ai/api/search-image?query=catalytic%20converters%20automotive%20precious%20metals%20platinum%20palladium%20rhodium%20recovery%20scrap%20metal%20honeycomb%20structure%20industrial%20recycling%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=catalytic-converters-auto&orientation=landscape',
        rating: 4.9,
        location: 'Birmingham, UK',
        seller: 'Precious Metal Recovery Ltd',
        verified: true,
        min_order: '10 units'
      },
      {
        id: 9,
        name: 'Circuit Board E-Waste Recovery',
        slug: 'circuit-board-e-waste-recovery',
        category: 'electronics',
        categoryName: 'Electronics',
        description: 'Mixed electronic circuit boards containing precious metals for recovery operations and recycling.',
        image_url: 'https://readdy.ai/api/search-image?query=electronic%20circuit%20boards%20e-waste%20computer%20motherboards%20precious%20metals%20recovery%20green%20circuit%20boards%20components%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=circuit-boards-elec&orientation=landscape',
        rating: 4.8,
        location: 'Glasgow, UK',
        seller: 'Scottish E-Waste Solutions',
        verified: true,
        min_order: '25 kg'
      },
      {
        id: 10,
        name: 'Computer Hard Drive Scrap',
        slug: 'computer-hard-drive-scrap',
        category: 'electronics',
        categoryName: 'Electronics',
        description: 'End-of-life computer hard drives containing rare earth elements and aluminum for material recovery.',
        image_url: 'https://readdy.ai/api/search-image?query=computer%20hard%20drives%20electronic%20waste%20data%20storage%20devices%20aluminum%20cases%20rare%20earth%20elements%20recycling%20technology%20scrap%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=hard-drives-elec&orientation=landscape',
        rating: 4.4,
        location: 'Manchester, UK',
        seller: 'IT Asset Recovery',
        verified: true,
        min_order: '50 units'
      },
      {
        id: 11,
        name: 'Industrial Steel Beam Scrap',
        slug: 'industrial-steel-beam-scrap',
        category: 'industrial',
        categoryName: 'Industrial',
        description: 'Structural steel beams from demolished buildings and industrial facilities for heavy metal recycling.',
        image_url: 'https://readdy.ai/api/search-image?query=industrial%20steel%20beams%20structural%20metal%20construction%20demolition%20heavy%20steel%20girders%20rusty%20metal%20beams%20industrial%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=steel-beams-ind&orientation=landscape',
        rating: 4.4,
        location: 'Cardiff, UK',
        seller: 'Welsh Steel Recyclers',
        verified: true,
        min_order: '5 tonnes'
      },
      {
        id: 12,
        name: 'Copper Cable Insulated Scrap',
        slug: 'copper-cable-insulated-scrap',
        category: 'cables',
        categoryName: 'Cables',
        description: 'Insulated copper cables requiring stripping, excellent for copper recovery operations and electrical recycling.',
        image_url: 'https://readdy.ai/api/search-image?query=copper%20cable%20insulated%20scrap%20electrical%20wires%20stripping%20copper%20recovery%20orange%20insulation%20cables%20industrial%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=copper-cable-grid&orientation=landscape',
        rating: 4.3,
        location: 'Liverpool, UK',
        seller: 'Merseyside Cable Recovery',
        verified: true,
        min_order: '200 kg'
      },
      {
        id: 13,
        name: 'Fiber Optic Cable Scrap',
        slug: 'fiber-optic-cable-scrap',
        category: 'cables',
        categoryName: 'Cables',
        description: 'Decommissioned fiber optic cables from telecommunications infrastructure with minimal metal content but high volume.',
        image_url: 'https://readdy.ai/api/search-image?query=fiber%20optic%20cables%20telecommunications%20infrastructure%20orange%20blue%20cables%20network%20equipment%20decommissioned%20recycling%20industrial%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=fiber-optic-cab&orientation=landscape',
        rating: 4.2,
        location: 'Leeds, UK',
        seller: 'Telecom Recycling Services',
        verified: true,
        min_order: '1000 kg'
      },
      {
        id: 14,
        name: 'Silicon Coated Paper Rolls',
        slug: 'silicon-coated-paper-rolls',
        category: 'paper',
        categoryName: 'Paper',
        description: 'High-quality silicon coated paper rolls from industrial printing operations, excellent for recycling applications.',
        image_url: 'https://readdy.ai/api/search-image?query=silicon%20coated%20paper%20rolls%20industrial%20printing%20paper%20white%20glossy%20paper%20materials%20recycling%20facility%20clean%20paper%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=paper-rolls-grid&orientation=landscape',
        rating: 4.5,
        location: 'London, UK',
        seller: 'London Paper Recovery',
        verified: true,
        min_order: '2 tonnes'
      },
      {
        id: 15,
        name: 'Old Corrugated Cardboard (OCC)',
        slug: 'old-corrugated-cardboard-occ',
        category: 'paper',
        categoryName: 'Paper',
        description: 'Clean corrugated cardboard boxes and packaging materials for recycling into new cardboard products.',
        image_url: 'https://readdy.ai/api/search-image?query=corrugated%20cardboard%20OCC%20recycling%20brown%20cardboard%20boxes%20packaging%20materials%20clean%20sorting%20facility%20industrial%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=cardboard-occ-grid&orientation=landscape',
        rating: 4.6,
        location: 'Birmingham, UK',
        seller: 'Midlands Cardboard Ltd',
        verified: true,
        min_order: '3 tonnes'
      },
      {
        id: 16,
        name: 'Polyester Lycra T-Shirt Fabric',
        slug: 'polyester-lycra-t-shirt-fabric',
        category: 'fabric',
        categoryName: 'Fabric & Textile',
        description: 'High-quality polyester lycra fabric lot from textile manufacturing, perfect for garment production.',
        image_url: 'https://readdy.ai/api/search-image?query=polyester%20lycra%20fabric%20textile%20manufacturing%20colorful%20fabric%20rolls%20stretchy%20materials%20garment%20production%20industrial%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=polyester-fabric-grid&orientation=landscape',
        rating: 4.3,
        location: 'Manchester, UK',
        seller: 'Northern Textile Recovery',
        verified: true,
        min_order: '500 kg'
      },
      {
        id: 17,
        name: 'Nylon Used Clothes Lot',
        slug: 'nylon-used-clothes-lot',
        category: 'fabric',
        categoryName: 'Fabric & Textile',
        description: 'Sorted nylon clothing materials for textile recycling and fiber recovery applications.',
        image_url: 'https://readdy.ai/api/search-image?query=nylon%20used%20clothes%20textile%20recycling%20sorted%20clothing%20materials%20fiber%20recovery%20colorful%20fabric%20waste%20industrial%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=nylon-clothes-grid&orientation=landscape',
        rating: 4.1,
        location: 'Leeds, UK',
        seller: 'Yorkshire Textile Solutions',
        verified: true,
        min_order: '1 tonne'
      },
      {
        id: 18,
        name: 'Plastic Granules Mixer Machine',
        slug: 'plastic-granules-mixer-machine',
        category: 'machinery',
        categoryName: 'Machinery',
        description: 'Industrial plastic granules mixing machine in working condition, suitable for plastic manufacturing operations.',
        image_url: 'https://readdy.ai/api/search-image?query=industrial%20plastic%20granules%20mixer%20machine%20manufacturing%20equipment%20plastic%20processing%20machinery%20factory%20equipment%20clean%20industrial%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=mixer-machine-grid&orientation=landscape',
        rating: 4.7,
        location: 'Sheffield, UK',
        seller: 'Industrial Machine Trading',
        verified: true,
        min_order: '1 unit'
      },
      {
        id: 19,
        name: 'Big Exhaust Fan Machine',
        slug: 'big-exhaust-fan-machine',
        category: 'machinery',
        categoryName: 'Machinery',
        description: 'Large industrial exhaust fan system with motor, suitable for factory ventilation applications.',
        image_url: 'https://readdy.ai/api/search-image?query=large%20industrial%20exhaust%20fan%20system%20ventilation%20equipment%20factory%20machinery%20motor%20driven%20fan%20industrial%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=exhaust-fan-grid&orientation=landscape',
        rating: 4.5,
        location: 'London, UK',
        seller: 'London Industrial Equipment',
        verified: true,
        min_order: '1 unit'
      },
      {
        id: 20,
        name: 'Pine Wooden Scrap - All Types',
        slug: 'pine-wooden-scrap-all-types',
        category: 'wood',
        categoryName: 'Wood & Timber',
        description: 'Mixed pine wooden scrap materials for biomass fuel production and recycling applications.',
        image_url: 'https://readdy.ai/api/search-image?query=pine%20wooden%20scrap%20mixed%20wood%20materials%20biomass%20fuel%20production%20recycling%20wood%20chips%20timber%20waste%20industrial%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=pine-wood-grid&orientation=landscape',
        rating: 4.2,
        location: 'Cardiff, UK',
        seller: 'Welsh Wood Recovery',
        verified: true,
        min_order: '5 tonnes'
      },
      {
        id: 21,
        name: 'Wooden Pallets Used',
        slug: 'wooden-pallets-used',
        category: 'wood',
        categoryName: 'Wood & Timber',
        description: 'Used wooden pallets for repair, recycling or biomass fuel production from logistics operations.',
        image_url: 'https://readdy.ai/api/search-image?query=used%20wooden%20pallets%20logistics%20recycling%20repair%20biomass%20fuel%20production%20stacked%20wood%20pallets%20industrial%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=wooden-pallets-grid&orientation=landscape',
        rating: 3.9,
        location: 'Glasgow, UK',
        seller: 'Scottish Pallet Recovery',
        verified: true,
        min_order: '10 tonnes'
      },
      {
        id: 22,
        name: 'Brown PP Granules <5% Filler',
        slug: 'brown-pp-granules-5-filler',
        category: 'plastic',
        categoryName: 'Plastic',
        description: 'High-quality brown polypropylene granules with less than 5% filler content, perfect for manufacturing applications.',
        image_url: 'https://readdy.ai/api/search-image?query=brown%20polypropylene%20plastic%20granules%20PP%20pellets%20manufacturing%20grade%20clean%20sorted%20plastic%20recycling%20materials%20industrial%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=pp-granules-grid&orientation=landscape',
        rating: 4.6,
        location: 'Gujarat, UK',
        seller: 'UK Plastics Recovery',
        verified: true,
        min_order: '1 tonne'
      },
      {
        id: 23,
        name: 'HDPE Next to Virgin Grade',
        slug: 'hdpe-next-to-virgin-grade',
        category: 'plastic',
        categoryName: 'Plastic',
        description: 'Premium HDPE plastic material with near-virgin quality, excellent for high-grade manufacturing applications.',
        image_url: 'https://readdy.ai/api/search-image?query=HDPE%20plastic%20pellets%20virgin%20grade%20white%20plastic%20granules%20high%20density%20polyethylene%20recycling%20materials%20clean%20sorted%20plastic%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=hdpe-virgin-grid&orientation=landscape',
        rating: 4.8,
        location: 'London, UK',
        seller: 'Premium Plastics Ltd',
        verified: true,
        min_order: '2 tonnes'
      },
      {
        id: 24,
        name: 'Clean Washed PP Plastic Scrap',
        slug: 'clean-washed-pp-plastic-scrap',
        category: 'plastic',
        categoryName: 'Plastic',
        description: 'Clean and washed polypropylene plastic scrap ready for granulation and reprocessing applications.',
        image_url: 'https://readdy.ai/api/search-image?query=clean%20washed%20polypropylene%20PP%20plastic%20scrap%20granulation%20reprocessing%20white%20plastic%20flakes%20sorted%20materials%20industrial%20background%20white%20modern%20professional%20photography%20high%20quality%20detailed%20texture&width=400&height=300&seq=pp-plastic-scrap-grid&orientation=landscape',
        rating: 4.5,
        location: 'Manchester, UK',
        seller: 'Northern Plastics Recovery',
        verified: true,
        min_order: '1.5 tonnes'
      }
    ];
  };

  const nameToSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  };

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      case 'newest':
        return new Date(b.created_at || b.id).getTime() - new Date(a.created_at || a.id).getTime();
      case 'alphabetical':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <div className="w-8 h-8 flex items-center justify-center mx-auto mb-4">
          <i className="ri-loader-4-line animate-spin text-2xl text-purple-600"></i>
        </div>
        <p className="text-gray-600">Loading products...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">
          Showing {sortedProducts.length} products
          {category !== 'all' && (
            <span> in {categories[category] || 'this category'}</span>
          )}
        </p>
        <div className="flex items-center text-sm text-gray-500">
          <div className="w-4 h-4 flex items-center justify-center">
            <i className="ri-grid-line"></i>
          </div>
          <span>Grid View</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {sortedProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300 overflow-hidden group" data-product-shop>
            <div className="relative h-48 overflow-hidden">
              {product.image_url ? (
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                  <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded-full">
                    <i className="ri-image-line text-2xl text-gray-400"></i>
                  </div>
                </div>
              )}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-gray-700">
                {categories[product.category] || product.category}
              </div>
              {product.verified && (
                <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium flex items-center">
                  <div className="w-3 h-3 flex items-center justify-center mr-1">
                    <i className="ri-check-line text-xs"></i>
                  </div>
                  Verified
                </div>
              )}
              {product.min_order && (
                <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  Min: {product.min_order}
                </div>
              )}
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900 flex-1 pr-2 line-clamp-1">
                  {product.name}
                </h3>
                {product.rating && (
                  <div className="flex items-center space-x-1 text-sm">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-star-fill text-yellow-400"></i>
                    </div>
                    <span className="text-gray-600 font-medium">{product.rating}</span>
                  </div>
                )}
              </div>

              {product.description && (
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
              )}

              <div className="flex items-center text-sm text-gray-500 mb-4">
                {product.location && (
                  <>
                    <div className="w-4 h-4 flex items-center justify-center mr-1">
                      <i className="ri-map-pin-line"></i>
                    </div>
                    <span className="mr-3">{product.location}</span>
                  </>
                )}
                {product.seller && (
                  <>
                    <div className="w-4 h-4 flex items-center justify-center mr-1">
                      <i className="ri-store-line"></i>
                    </div>
                    <span>{product.seller}</span>
                  </>
                )}
              </div>

              <div className="flex justify-between items-center">
                <Link
                  href={{ pathname: '/product', query: { id: product.id } }}
                  className="text-purple-600 hover:text-purple-800 text-sm font-medium cursor-pointer"
                >
                  View Details
                </Link>
                <Link
                  href="/get-quote"
                  className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {sortedProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-gray-100 rounded-full">
            <i className="ri-search-line text-2xl text-gray-400"></i>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-500">Try adjusting your filters or search criteria.</p>
        </div>
      )}
    </div>
  );
}
