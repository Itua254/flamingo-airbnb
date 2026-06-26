-- Create the reviews table
CREATE TABLE public.reviews (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    author_name TEXT NOT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    content TEXT NOT NULL,
    is_approved BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Create policies for reviews
CREATE POLICY "Public reviews are viewable by everyone." ON public.reviews
    FOR SELECT USING (is_approved = true);

CREATE POLICY "Anyone can insert a review." ON public.reviews
    FOR INSERT WITH CHECK (true);


-- Create contact leads table
CREATE TABLE public.contact_leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.contact_leads ENABLE ROW LEVEL SECURITY;

-- Create policies for contact leads
CREATE POLICY "Admins can view leads." ON public.contact_leads
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Anyone can insert a lead." ON public.contact_leads
    FOR INSERT WITH CHECK (true);

-- Storage bucket for assets
INSERT INTO storage.buckets (id, name, public) VALUES ('flamingo-assets', 'flamingo-assets', true);

-- Storage policies
CREATE POLICY "Public Assets are viewable by everyone." ON storage.objects
    FOR SELECT USING (bucket_id = 'flamingo-assets');

CREATE POLICY "Admins can insert assets." ON storage.objects
    FOR INSERT WITH CHECK (bucket_id = 'flamingo-assets' AND auth.role() = 'authenticated');

CREATE POLICY "Admins can update assets." ON storage.objects
    FOR UPDATE USING (bucket_id = 'flamingo-assets' AND auth.role() = 'authenticated');

CREATE POLICY "Admins can delete assets." ON storage.objects
    FOR DELETE USING (bucket_id = 'flamingo-assets' AND auth.role() = 'authenticated');
