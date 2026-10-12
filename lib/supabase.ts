import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// NEXT_PUBLIC_* values are baked in at build time (the site is a static export),
// so they must be set in the hosting provider's build environment.
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

if (!isSupabaseConfigured) {
  console.error(
    'Supabase is not configured: set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY and rebuild the site.'
  )
}

// createClient throws on an empty URL, which would crash every page that imports it.
export const supabase = createClient(
  supabaseUrl || 'https://not-configured.supabase.co',
  supabaseAnonKey || 'not-configured'
)

// Columns visitors may read. source_url is admin-only and is not granted to the anon role.
export const PUBLIC_PRODUCT_COLUMNS =
  'id, name, category, description, image_url, location, seller, verified, min_order, rating, created_at, updated_at'

export const CATEGORIES: { id: string; name: string }[] = [
  { id: 'ferrous', name: 'Ferrous Metals' },
  { id: 'non-ferrous', name: 'Non-Ferrous Metals' },
  { id: 'automotive', name: 'Automotive Scrap' },
  { id: 'electronics', name: 'Electronic Waste' },
  { id: 'industrial', name: 'Industrial Scrap' },
  { id: 'cables', name: 'Cable & Wire Scrap' },
  { id: 'paper', name: 'Paper & Cardboard' },
  { id: 'fabric', name: 'Fabric & Textile' },
  { id: 'machinery', name: 'Machinery & Equipment' },
  { id: 'wood', name: 'Wood & Timber' },
  { id: 'plastic', name: 'Plastic Scrap' },
]

// Normalises a stored category ("Non Ferrous", " ferrous ") to its id ("non-ferrous", "ferrous").
export const normalizeCategory = (value: string | null | undefined) =>
  (value ?? '').trim().toLowerCase().replace(/[\s_]+/g, '-')

export const errorMessage = (error: unknown): string => {
  if (!isSupabaseConfigured) {
    return 'Database is not configured (missing NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY at build time).'
  }
  if (error && typeof error === 'object' && 'message' in error) {
    const e = error as { message: string; hint?: string | null; code?: string }
    return [e.message, e.hint].filter(Boolean).join(' — ')
  }
  return String(error)
}

// Counts products per category id with a single request.
export async function fetchCategoryCounts(): Promise<{ total: number; counts: Record<string, number> }> {
  const { data, error } = await supabase.from('products').select('category')
  if (error) throw error
  const counts: Record<string, number> = {}
  for (const row of (data ?? []) as { category: string | null }[]) {
    const id = normalizeCategory(row.category)
    counts[id] = (counts[id] ?? 0) + 1
  }
  return { total: data?.length ?? 0, counts }
}
