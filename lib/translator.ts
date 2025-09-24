import { Language } from './i18n';

interface TranslateResponse {
  translatedText: string;
  error?: string;
}

export async function translateText(text: string, targetLanguage: Language): Promise<TranslateResponse> {
  if (!text || targetLanguage === 'en') {
    return { translatedText: text };
  }

  try {
    // Use a free translation API service
    const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLanguage}`);
    
    if (!response.ok) {
      throw new Error('Translation service unavailable');
    }

    const data = await response.json();
    
    if (data.responseStatus === 200) {
      return { translatedText: data.responseData.translatedText };
    } else {
      throw new Error('Translation failed');
    }
  } catch (error) {
    console.error('Translation error:', error);
    
    // Fallback: Return basic translations for common terms
    const fallbackTranslations = getFallbackTranslations(text, targetLanguage);
    if (fallbackTranslations) {
      return { translatedText: fallbackTranslations };
    }
    
    return { 
      translatedText: text,
      error: 'Translation unavailable' 
    };
  }
}

function getFallbackTranslations(text: string, targetLanguage: Language): string | null {
  const fallbacks: Record<Language, Record<string, string>> = {
    fr: {
      'Heavy melting steel': 'Acier de fonte lourde',
      'Mild steel': 'Acier doux',
      'Stainless steel': 'Acier inoxydable',
      'Copper wire': 'Fil de cuivre',
      'Aluminium wire': 'Fil d\'aluminium',
      'scrap': 'ferraille',
      'Grade': 'Grade',
      'Industrial': 'Industriel',
      'High quality': 'Haute qualité',
      'Clean': 'Propre',
      'Pure': 'Pur'
    },
    es: {
      'Heavy melting steel': 'Acero de fusión pesada',
      'Mild steel': 'Acero dulce',
      'Stainless steel': 'Acero inoxidable',
      'Copper wire': 'Cable de cobre',
      'Aluminium wire': 'Cable de aluminio',
      'scrap': 'chatarra',
      'Grade': 'Grado',
      'Industrial': 'Industrial',
      'High quality': 'Alta calidad',
      'Clean': 'Limpio',
      'Pure': 'Puro'
    },
    tr: {
      'Heavy melting steel': 'Ağır ergitme çeliği',
      'Mild steel': 'Yumuşak çelik',
      'Stainless steel': 'Paslanmaz çelik',
      'Copper wire': 'Bakır tel',
      'Aluminium wire': 'Alüminyum tel',
      'scrap': 'hurda',
      'Grade': 'Sınıf',
      'Industrial': 'Endüstriyel',
      'High quality': 'Yüksek kalite',
      'Clean': 'Temiz',
      'Pure': 'Saf'
    },
    en: {}
  };

  const targetFallbacks = fallbacks[targetLanguage];
  if (!targetFallbacks) return null;

  // Look for exact matches first
  if (targetFallbacks[text]) {
    return targetFallbacks[text];
  }

  // Look for partial matches
  for (const [key, value] of Object.entries(targetFallbacks)) {
    if (text.toLowerCase().includes(key.toLowerCase())) {
      return text.replace(new RegExp(key, 'gi'), value);
    }
  }

  return null;
}

export async function translateProductData(product: any, targetLanguage: Language) {
  if (!product || targetLanguage === 'en') {
    return product;
  }

  const translatedProduct = { ...product };

  try {
    // Translate key fields
    if (product.name) {
      const nameResult = await translateText(product.name, targetLanguage);
      translatedProduct.name = nameResult.translatedText;
    }

    if (product.description) {
      const descResult = await translateText(product.description, targetLanguage);
      translatedProduct.description = descResult.translatedText;
    }

    if (product.specifications) {
      const specResult = await translateText(product.specifications, targetLanguage);
      translatedProduct.specifications = specResult.translatedText;
    }

    if (product.seller) {
      const sellerResult = await translateText(product.seller, targetLanguage);
      translatedProduct.seller = sellerResult.translatedText;
    }

    // Keep original technical data like composition unchanged
    return translatedProduct;
  } catch (error) {
    console.error('Product translation error:', error);
    return product;
  }
}