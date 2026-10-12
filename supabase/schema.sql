-- Products table and access rules for the website.
-- Run this in the Supabase dashboard: SQL Editor -> New query -> paste -> Run.
-- It is safe to run more than once.

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text not null,
  description text,
  image_url text,
  location text,
  seller text,
  verified boolean not null default false,
  min_order text,
  rating numeric(2,1),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Add any columns missing from an older version of the table.
alter table public.products add column if not exists description text;
alter table public.products add column if not exists image_url text;
alter table public.products add column if not exists location text;
alter table public.products add column if not exists seller text;
alter table public.products add column if not exists verified boolean not null default false;
alter table public.products add column if not exists min_order text;
alter table public.products add column if not exists rating numeric(2,1);
alter table public.products add column if not exists created_at timestamptz not null default now();
alter table public.products add column if not exists updated_at timestamptz not null default now();

-- Store categories in the form the website filters on ("Non Ferrous" -> "non-ferrous").
update public.products
set category = regexp_replace(lower(trim(category)), '[\s_]+', '-', 'g')
where category <> regexp_replace(lower(trim(category)), '[\s_]+', '-', 'g');

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists products_set_updated_at on public.products;
create trigger products_set_updated_at
  before update on public.products
  for each row execute function public.set_updated_at();

-- Row Level Security: everyone can read products, only signed-in admins can change them.
-- With RLS on and no SELECT policy, the website silently receives zero products.
alter table public.products enable row level security;

drop policy if exists "Products are viewable by everyone" on public.products;
create policy "Products are viewable by everyone"
  on public.products for select
  to anon, authenticated
  using (true);

drop policy if exists "Admins can insert products" on public.products;
create policy "Admins can insert products"
  on public.products for insert
  to authenticated
  with check (true);

drop policy if exists "Admins can update products" on public.products;
create policy "Admins can update products"
  on public.products for update
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Admins can delete products" on public.products;
create policy "Admins can delete products"
  on public.products for delete
  to authenticated
  using (true);

-- Admin accounts: Supabase dashboard -> Authentication -> Users -> "Add user"
-- (tick "Auto Confirm User"). Then turn off public sign-ups under
-- Authentication -> Sign In / Providers so nobody else can create an account.
