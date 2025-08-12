export interface Product {
  id: string;
  name: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  tags: string[];
  image: string;
  inStock: boolean;
}

export const categories = [
  // Women's Fashion - Detailed Subcategories
  "Women's T-Shirts & Tank Tops",
  "Women's Blouses & Shirts", 
  "Women's Sweaters & Cardigans",
  "Women's Hoodies & Sweatshirts",
  "Women's Blazers & Jackets",
  "Women's Coats & Outerwear",
  "Women's Denim Jackets",
  "Women's Bomber Jackets",
  "Women's Leather Jackets",
  "Women's Trench Coats",
  "Women's Midi Dresses",
  "Women's Maxi Dresses", 
  "Women's Mini Dresses",
  "Women's Casual Dresses",
  "Women's Formal Dresses",
  "Women's Party Dresses",
  "Women's Summer Dresses",
  "Women's Winter Dresses",
  "Women's Cocktail Dresses",
  "Women's Wedding Guest Dresses",
  "Women's Jeans",
  "Women's Skinny Jeans",
  "Women's Wide Leg Jeans",
  "Women's High Waist Jeans",
  "Women's Mom Jeans",
  "Women's Boyfriend Jeans",
  "Women's Straight Leg Jeans",
  "Women's Bootcut Jeans",
  "Women's Cropped Jeans",
  "Women's Distressed Jeans",
  "Women's Trousers & Pants",
  "Women's Leggings",
  "Women's Chinos",
  "Women's Wide Leg Pants",
  "Women's Palazzo Pants",
  "Women's Cargo Pants",
  "Women's Dress Pants",
  "Women's Skirts",
  "Women's Mini Skirts",
  "Women's Midi Skirts",
  "Women's Maxi Skirts",
  "Women's Pencil Skirts",
  "Women's A-Line Skirts",
  "Women's Pleated Skirts",
  "Women's Shorts",
  "Women's Denim Shorts",
  "Women's High Waist Shorts",
  "Women's Bermuda Shorts",
  "Women's Athletic Shorts",
  "Women's Formal Shorts",
  
  // Men's Fashion - Detailed Subcategories  
  "Men's T-Shirts",
  "Men's Polo Shirts",
  "Men's Tank Tops",
  "Men's Graphic Tees",
  "Men's Basic Tees",
  "Men's Long Sleeve Shirts",
  "Men's Dress Shirts",
  "Men's Casual Shirts",
  "Men's Oxford Shirts",
  "Men's Flannel Shirts",
  "Men's Denim Shirts",
  "Men's Hawaiian Shirts",
  "Men's Hoodies",
  "Men's Sweatshirts",
  "Men's Zip Hoodies",
  "Men's Pullover Hoodies",
  "Men's Sweaters",
  "Men's Cardigans",
  "Men's V-Neck Sweaters",
  "Men's Crew Neck Sweaters",
  "Men's Blazers",
  "Men's Sport Coats",
  "Men's Suit Jackets",
  "Men's Bomber Jackets",
  "Men's Denim Jackets",
  "Men's Leather Jackets",
  "Men's Windbreakers",
  "Men's Coats",
  "Men's Trench Coats",
  "Men's Parkas",
  "Men's Jeans",
  "Men's Skinny Jeans",
  "Men's Slim Jeans",
  "Men's Regular Jeans",
  "Men's Straight Jeans",
  "Men's Bootcut Jeans",
  "Men's Relaxed Jeans",
  "Men's Distressed Jeans",
  "Men's Raw Denim",
  "Men's Chinos",
  "Men's Dress Pants",
  "Men's Cargo Pants",
  "Men's Joggers",
  "Men's Track Pants",
  "Men's Shorts",
  "Men's Chino Shorts",
  "Men's Denim Shorts",
  "Men's Swim Shorts",
  "Men's Athletic Shorts",
  "Men's Cargo Shorts",

  // Kids & Baby - Detailed Subcategories
  "Baby Girl Clothing",
  "Baby Boy Clothing", 
  "Newborn Essentials",
  "Baby Onesies",
  "Baby Sleepwear",
  "Baby Outerwear",
  "Toddler Girl Clothing",
  "Toddler Boy Clothing",
  "Kids Girl Dresses",
  "Kids Girl Tops",
  "Kids Girl Bottoms",
  "Kids Boy Shirts",
  "Kids Boy Pants",
  "Kids Outerwear",
  "Kids Swimwear",
  "Kids Pajamas",
  "Kids School Uniforms",
  "Kids Party Wear",
  "Kids Casual Wear",
  "Kids Athletic Wear",

  // Footwear - Detailed Subcategories
  "Women's Sneakers",
  "Women's High Heels",
  "Women's Flats",
  "Women's Boots",
  "Women's Ankle Boots",
  "Women's Knee High Boots",
  "Women's Combat Boots",
  "Women's Chelsea Boots",
  "Women's Sandals",
  "Women's Wedges",
  "Women's Loafers",
  "Women's Pumps",
  "Women's Platform Shoes",
  "Women's Ballet Flats",
  "Women's Espadrilles",
  "Men's Sneakers",
  "Men's Dress Shoes",
  "Men's Casual Shoes",
  "Men's Boots",
  "Men's Chelsea Boots",
  "Men's Work Boots",
  "Men's Combat Boots",
  "Men's Loafers",
  "Men's Oxford Shoes",
  "Men's Sandals",
  "Men's Flip Flops",
  "Kids Sneakers",
  "Kids School Shoes",
  "Kids Sandals",
  "Kids Boots",

  // Bags & Accessories - Detailed Subcategories
  "Women's Handbags",
  "Women's Shoulder Bags",
  "Women's Crossbody Bags",
  "Women's Tote Bags",
  "Women's Clutch Bags",
  "Women's Backpacks",
  "Women's Wallets",
  "Women's Purses",
  "Women's Evening Bags",
  "Women's Travel Bags",
  "Men's Backpacks",
  "Men's Messenger Bags",
  "Men's Briefcases",
  "Men's Wallets",
  "Men's Travel Bags",
  "Men's Laptop Bags",
  "Kids Backpacks",
  "Kids Lunch Bags",
  "Jewelry",
  "Watches",
  "Sunglasses",
  "Hats & Caps",
  "Scarves",
  "Belts",
  "Hair Accessories",

  // Underwear & Sleepwear - Detailed Subcategories
  "Women's Bras",
  "Women's Panties",
  "Women's Lingerie Sets",
  "Women's Sleepwear",
  "Women's Robes",
  "Women's Pajamas",
  "Women's Nightgowns",
  "Women's Loungewear",
  "Men's Underwear",
  "Men's Boxers",
  "Men's Briefs",
  "Men's Pajamas",
  "Men's Sleepwear", 
  "Men's Robes",
  "Men's Loungewear",
  "Kids Underwear",
  "Kids Pajamas",
  "Kids Sleepwear",

  // Sportswear & Activewear - Detailed Subcategories
  "Women's Activewear",
  "Women's Sports Bras",
  "Women's Yoga Pants",
  "Women's Leggings",
  "Women's Athletic Shorts",
  "Women's Tank Tops",
  "Women's Athletic Jackets",
  "Women's Swimwear",
  "Women's Bikinis",
  "Women's One Piece Swimsuits",
  "Men's Activewear",
  "Men's Athletic Shirts",
  "Men's Athletic Shorts",
  "Men's Track Pants",
  "Men's Athletic Jackets",
  "Men's Swimwear",
  "Men's Board Shorts",
  "Kids Activewear",
  "Kids Swimwear",
  "Athletic Shoes",
  "Fitness Accessories",

  // Home & Living - Detailed Subcategories
  "Bedding",
  "Bed Sheets",
  "Duvet Covers",
  "Pillowcases",
  "Comforters",
  "Blankets",
  "Throws",
  "Pillows",
  "Mattress Toppers",
  "Bath Towels",
  "Hand Towels",
  "Washcloths",
  "Bath Mats",
  "Shower Curtains",
  "Bathroom Accessories",
  "Kitchen Linens",
  "Table Linens",
  "Curtains",
  "Window Treatments",
  "Decorative Pillows",
  "Wall Art",
  "Picture Frames",
  "Candles",
  "Home Fragrance",
  "Storage Solutions",
  "Organization",
  "Furniture",
  "Lighting"
];

export const brands = [
  // H&M Brand Family
  'H&M', 'Divided', 'H&M Conscious', 'H&M Studio', 'H&M Premium', 'H&M+', 'H&M Modern Classics', 
  'H&M Home', 'H&M Beauty', 'H&M Sport', 'H&M Kids', 'H&M Baby', 'Mama H&M', 'H&M Basics', 'H&M Trend',
  
  // Major Fashion Brands
  'Zara', 'Forever 21', 'Uniqlo', 'Gap', 'Old Navy', 'Banana Republic', 'J.Crew', 'Madewell',
  'ASOS', 'Topshop', 'Urban Outfitters', 'American Eagle', 'Abercrombie & Fitch', 'Hollister',
  'Express', 'Ann Taylor', 'LOFT', 'Nordstrom', 'Macy\'s', 'Target', 'Walmart', 'Amazon',
  
  // Premium & Designer Brands
  'Calvin Klein', 'Tommy Hilfiger', 'Ralph Lauren', 'Polo Ralph Lauren', 'Lacoste', 'Hugo Boss',
  'Armani Exchange', 'Michael Kors', 'Kate Spade', 'Coach', 'Marc Jacobs', 'Tory Burch',
  'Ted Baker', 'Burberry', 'Gucci', 'Prada', 'Versace', 'Dolce & Gabbana', 'Armani',
  
  // Denim Specialists
  'Levi\'s', 'Wrangler', 'Lee', 'Lucky Brand', 'True Religion', 'Citizens of Humanity',
  'AG Jeans', '7 For All Mankind', 'Paige', 'Joe\'s Jeans', 'Hudson Jeans', 'Current/Elliott',
  
  // Athletic & Sportswear
  'Nike', 'Adidas', 'Puma', 'Under Armour', 'Reebok', 'New Balance', 'ASICS', 'Converse',
  'Vans', 'Fila', 'Champion', 'Lululemon', 'Athleta', 'Patagonia', 'The North Face',
  
  // Fast Fashion & Affordable
  'Primark', 'Shein', 'Romwe', 'Zaful', 'Boohoo', 'Missguided', 'PrettyLittleThing',
  'Fashion Nova', 'Rainbow', 'Charlotte Russe', 'Wet Seal', 'Papaya', 'Rue21',
  
  // Department Store Brands
  'Nordstrom Rack', 'TJ Maxx', 'Marshalls', 'Ross', 'Kohl\'s', 'JCPenney', 'Sears',
  'Dillard\'s', 'Bloomingdale\'s', 'Neiman Marcus', 'Saks Fifth Avenue',
  
  // European Fashion
  'Mango', 'COS', 'Other Stories', 'Weekday', 'Monki', 'Bershka', 'Pull & Bear',
  'Stradivarius', 'Massimo Dutti', 'Sandro', 'Maje', 'The Kooples', 'Isabel Marant',
  
  // Contemporary Brands
  'Everlane', 'Reformation', 'Ganni', 'Acne Studios', 'A.P.C.', 'Norse Projects',
  'Wood Wood', 'Arket', 'Cos', 'Filippa K', 'Joseph', 'Theory', 'Vince',
  
  // Lingerie & Intimates
  'Victoria\'s Secret', 'Pink', 'Aerie', 'La Perla', 'Agent Provocateur', 'Calvin Klein Underwear',
  'Tommy John', 'MeUndies', 'ThirdLove', 'Savage X Fenty', 'Hanky Panky', 'Cosabella',
  
  // Footwear Brands
  'Steve Madden', 'Nine West', 'Jessica Simpson', 'Sam Edelman', 'Cole Haan', 'Clarks',
  'Dr. Martens', 'Timberland', 'UGG', 'Birkenstock', 'Crocs', 'Allbirds', 'Rothys',
  
  // Accessories & Bags
  'Fossil', 'Guess', 'Rebecca Minkoff', 'Mansur Gavriel', 'Polene', 'Staud', 'Cult Gaia',
  'Jacquemus', 'Bottega Veneta', 'Saint Laurent', 'Celine', 'Hermès', 'Chanel', 'Dior',
  
  // Beauty & Cosmetics
  'Sephora', 'Ulta', 'MAC', 'NARS', 'Urban Decay', 'Too Faced', 'Benefit', 'Clinique',
  'Estée Lauder', 'Lancôme', 'Maybelline', 'L\'Oréal', 'CoverGirl', 'Revlon', 'NYX',
  
  // Sustainable & Ethical
  'Patagonia', 'Eileen Fisher', 'Stella McCartney', 'Gabriela Hearst', 'Kotn', 'Outerknown',
  'Christy Dawn', 'Mara Hoffman', 'Amour Vert', 'Groceries Apparel', 'Alternative Apparel',
  
  // Vintage & Thrift
  'ThredUp', 'Poshmark', 'The RealReal', 'Vestiaire Collective', 'Buffalo Exchange',
  'Crossroads Trading', 'Plato\'s Closet', 'Goodwill', 'Salvation Army', 'Local Thrift',
  
  // Online Direct-to-Consumer
  'Warby Parker', 'Allbirds', 'Bombas', 'Outdoor Voices', 'Girlfriend Collective',
  'Cuyana', 'MM.LaFleur', 'Stitch Fix', 'Trunk Club', 'Rent the Runway', 'Le Tote',
  
  // International Brands
  'Muji', 'GU', 'Gu', 'Massimo Dutti', 'Oysho', 'Lefties', 'Parfois', 'Manoush',
  'Claudie Pierlot', 'Ba&sh', 'Rouje', 'Realisation Par', 'Gala González', 'Palomo Spain',
  
  // Emerging & Indie Brands
  'Ganni', 'ROTATE', 'Stine Goya', 'Baum und Pferdgarten', 'Cecilie Bahnsen', 'Loveshackfancy',
  'Zimmermann', 'Faithfull the Brand', 'Spell & The Gypsy Collective', 'Free People',
  
  // Men\'s Specific
  'Bonobos', 'Everlane', 'J.Crew', 'Club Monaco', 'Rag & Bone', 'A.P.C.', 'Acne Studios',
  'Norse Projects', 'Our Legacy', 'Sunspel', 'John Smedley', 'Stone Island', 'CP Company',
  
  // Luxury Streetwear
  'Off-White', 'Balenciaga', 'Vetements', 'Fear of God', 'Essentials', 'Kith', 'Supreme',
  'Palace', 'Stone Island', 'A Bathing Ape', 'Comme des Garçons', 'Issey Miyake',
  
  // Teen & Young Adult
  'Brandy Melville', 'Princess Polly', 'White Fox', 'Showpo', 'Tiger Mist', 'Beginning Boutique',
  'Meshki', 'Sabo Skirt', 'Peppermayo', 'Lioness', 'Motel Rocks', 'Dolls Kill',
  
  // Plus Size Specialists
  'Torrid', 'Lane Bryant', 'Ashley Stewart', 'City Chic', 'Eloquii', 'Universal Standard',
  'Good American', 'Rebdolls', 'Fashion to Figure', 'Simply Be', 'Yours Clothing',
  
  // Maternity
  'A Pea in the Pod', 'Motherhood Maternity', 'Pink Blush', 'PinkBlush Maternity',
  'Seraphine', 'Isabella Oliver', 'HATCH', 'Ingrid & Isabel', 'Blanqi',
  
  // Workwear & Professional
  'Ann Taylor', 'Banana Republic', 'Brooks Brothers', 'Theory', 'Hugo Boss', 'Elie Tahari',
  'Diane von Furstenberg', 'Talbots', 'Chico\'s', 'White House Black Market', 'Lafayette 148',
  
  // Casual & Lifestyle
  'Anthropologie', 'Free People', 'Madewell', 'J.Crew', 'L.L.Bean', 'Eddie Bauer',
  'REI Co-op', 'Patagonia', 'Outdoor Research', 'Arc\'teryx', 'Canada Goose',
  
  // Home & Lifestyle
  'West Elm', 'CB2', 'Crate & Barrel', 'Williams Sonoma', 'Pottery Barn', 'IKEA',
  'Target Home', 'World Market', 'HomeGoods', 'Anthropologie Home', 'Urban Outfitters Home',
  
  // Beauty & Personal Care
  'Glossier', 'Fenty Beauty', 'Rare Beauty', 'Haus Labs', 'KKW Beauty', 'Kylie Cosmetics',
  'Charlotte Tilbury', 'Pat McGrath Labs', 'Natasha Denona', 'Huda Beauty', 'Jeffree Star',
  
  // Tech & Lifestyle
  'Apple', 'Away', 'Herschel', 'Fjällräven', 'JanSport', 'Eastpak', 'Kipling', 'Samsonite',
  'Tumi', 'Rimowa', 'Globe-Trotter', 'Monos', 'Calpak', 'Beis', 'Béis',
  
  // Regional & Local Brands
  'Revolve', 'Nasty Gal', 'Showpo', 'Beginning Boutique', 'Selfridges', 'Harvey Nichols',
  'Liberty London', 'Harrods', 'Galeries Lafayette', 'Le Bon Marché', 'Barneys New York',
  
  // Fictional Fashion-Forward Brands
  'Luxe Label', 'Modern Edge', 'City Chic Style', 'Trendy Touch', 'Fashion Forward',
  'Style Studio', 'Chic Collection', 'Urban Trends', 'Fashion Fusion', 'Style Sanctuary',
  'Trendy Threads', 'Modern Muse', 'Chic Avenue', 'Style Society', 'Fashion Collective',
  'Urban Elegance', 'Modern Classic', 'Style Essential', 'Fashion Elite', 'Trendy Luxe',
  'Chic Boutique', 'Style Studio NYC', 'Fashion House', 'Urban Style Co', 'Modern Fashion',
  'Trendy Collection', 'Style Icon', 'Fashion Insider', 'Chic Designs', 'Urban Chic',
  'Style Central', 'Fashion District', 'Trendy Elite', 'Chic Society', 'Style Revolution',
  'Fashion Forward Co', 'Urban Fashion', 'Style Elements', 'Trendy Collective', 'Chic Label',
  'Style Works', 'Fashion Code', 'Urban Edge', 'Style Lab', 'Trendy Studio',
  'Chic Modern', 'Style House', 'Fashion Street', 'Urban Style', 'Style Co',
  'Trendy Fashion', 'Chic Studio', 'Style Brand', 'Fashion Lab', 'Urban Collection',
  'Style Society Co', 'Trendy Label', 'Chic Fashion', 'Style Studio Co', 'Fashion Studio',
  'Urban Boutique', 'Style Element', 'Trendy House', 'Chic Co', 'Style District',
  'Fashion Collective Co', 'Urban Label', 'Style Code', 'Trendy Brand', 'Chic House',
  'Style Studio NYC', 'Fashion Society', 'Urban Fashion Co', 'Style Lab Co', 'Trendy Co',
  'Chic Brand Co', 'Style Collection', 'Fashion House Co', 'Urban Style Co', 'Style Brand Co',
  'Trendy Studio Co', 'Chic Collection Co', 'Style House Co', 'Fashion Lab Co', 'Urban Co',
  'Style Society NYC', 'Trendy House Co', 'Chic Studio Co', 'Style District Co', 'Fashion Co',
  'Urban Chic Co', 'Style Central Co', 'Trendy Collection Co', 'Chic Society Co', 'Style Studio LA',
  'Fashion District Co', 'Urban Edge Co', 'Style Elements Co', 'Trendy Elite Co', 'Chic Label Co',
  'Style Works Co', 'Fashion Code Co', 'Urban Fashion Lab', 'Style Lab NYC', 'Trendy Studio LA',
  'Chic Modern Co', 'Style House NYC', 'Fashion Street Co', 'Urban Style Lab', 'Style Co NYC'
];

export const products: Product[] = [
  // Women's Fashion
  {
    id: '1',
    name: 'Pleated Midi Dress',
    description: 'Elegant pleated midi dress in soft viscose blend. Perfect for both casual and formal occasions.',
    brand: 'H&M',
    category: "Women's Midi Dresses",
    price: 49.99,
    tags: ['dress', 'midi', 'pleated', 'elegant', 'viscose', 'formal', 'casual'],
    image: '/api/placeholder/300/400',
    inStock: true
  },
  {
    id: '2',
    name: 'Cropped Denim Jacket',
    description: 'Classic cropped denim jacket with vintage wash. Features button closure and chest pockets.',
    brand: 'Divided',
    category: "Women's Denim Jackets",
    price: 39.99,
    tags: ['denim', 'jacket', 'cropped', 'vintage', 'classic', 'outerwear'],
    image: '/api/placeholder/300/400',
    inStock: true
  },
  {
    id: '3',
    name: 'High-Waisted Wide Leg Jeans',
    description: 'Trendy high-waisted wide leg jeans in organic cotton denim. Sustainable fashion choice.',
    brand: 'H&M Conscious',
    category: "Women's Wide Leg Jeans", 
    price: 59.99,
    tags: ['jeans', 'high-waisted', 'wide-leg', 'organic', 'sustainable', 'denim'],
    image: '/api/placeholder/300/400',
    inStock: false
  },
  {
    id: '4',
    name: 'Silk Blend Blouse',
    description: 'Luxurious silk blend blouse with delicate button details. Perfect for professional settings.',
    brand: 'H&M Premium',
    category: "Women's Blouses & Shirts",
    price: 79.99,
    tags: ['blouse', 'silk', 'professional', 'luxury', 'button-up', 'office'],
    image: '/api/placeholder/300/400',
    inStock: true
  },
  {
    id: '5',
    name: 'Knitted Cardigan',
    description: 'Soft knitted cardigan in merino wool blend. Cozy and versatile layering piece.',
    brand: 'H&M Modern Classics',
    category: "Women's Sweaters & Cardigans",
    price: 69.99,
    tags: ['cardigan', 'knitted', 'merino', 'wool', 'layering', 'cozy'],
    image: '/api/placeholder/300/400',
    inStock: true
  },
  {
    id: '6',
    name: 'Floral Print Maxi Dress',
    description: 'Bohemian floral print maxi dress with flowing silhouette. Perfect for summer occasions.',
    brand: 'Zara',
    category: "Women's Maxi Dresses",
    price: 54.99,
    tags: ['maxi', 'dress', 'floral', 'bohemian', 'summer', 'flowing'],
    image: '/api/placeholder/300/400',
    inStock: true
  },

  // Men's Fashion
  {
    id: '7',
    name: 'Cotton Oxford Shirt',
    description: 'Classic cotton oxford shirt with button-down collar. Essential wardrobe staple.',
    brand: 'J.Crew',
    category: "Men's Oxford Shirts",
    price: 34.99,
    tags: ['shirt', 'oxford', 'cotton', 'classic', 'button-down', 'essential'],
    image: '/api/placeholder/300/400',
    inStock: true
  },
  {
    id: '8',
    name: 'Slim Fit Chinos',
    description: 'Modern slim fit chinos in stretch cotton twill. Available in multiple colors.',
    brand: 'Bonobos',
    category: "Men's Chinos",
    price: 44.99,
    tags: ['chinos', 'slim-fit', 'cotton', 'stretch', 'twill', 'modern'],
    image: '/api/placeholder/300/400',
    inStock: true
  },
  {
    id: '9',
    name: 'Hoodie with Zip',
    description: 'Comfortable hoodie with full zip and kangaroo pocket. Made from organic cotton.',
    brand: 'Champion',
    category: "Men's Zip Hoodies",
    price: 29.99,
    tags: ['hoodie', 'zip', 'organic', 'cotton', 'casual', 'comfortable'],
    image: '/api/placeholder/300/400',
    inStock: true
  },
  {
    id: '10',
    name: 'Wool Blend Blazer',
    description: 'Tailored wool blend blazer with structured shoulders. Perfect for business occasions.',
    brand: 'Hugo Boss',
    category: "Men's Blazers",
    price: 149.99,
    tags: ['blazer', 'wool', 'tailored', 'business', 'formal', 'structured'],
    image: '/api/placeholder/300/400',
    inStock: false
  },
  {
    id: '11',
    name: 'Graphic Print T-Shirt',
    description: 'Trendy graphic print t-shirt in soft cotton jersey. Contemporary streetwear style.',
    brand: 'Urban Outfitters',
    category: "Men's Graphic Tees",
    price: 19.99,
    tags: ['t-shirt', 'graphic', 'print', 'cotton', 'streetwear', 'trendy'],
    image: '/api/placeholder/300/400',
    inStock: true
  },
  {
    id: '12',
    name: 'Regular Fit Jeans',
    description: 'Classic regular fit jeans in durable denim. Timeless five-pocket design.',
    brand: 'Levi\'s',
    category: "Men's Regular Jeans",
    price: 49.99,
    tags: ['jeans', 'regular-fit', 'denim', 'classic', 'five-pocket', 'timeless'],
    image: '/api/placeholder/300/400',
    inStock: true
  },

  // Kids & Baby
  {
    id: '13',
    name: 'Unicorn Print Dress',
    description: 'Adorable unicorn print dress for girls. Soft cotton with comfortable fit.',
    brand: 'H&M Kids',
    category: 'Kids Girl Dresses',
    price: 19.99,
    tags: ['dress', 'unicorn', 'print', 'girls', 'cotton', 'comfortable'],
    image: '/api/placeholder/300/400',
    inStock: true
  },
  {
    id: '14',
    name: 'Dinosaur T-Shirt & Shorts Set',
    description: 'Fun dinosaur themed t-shirt and shorts set for boys. Perfect for playtime.',
    brand: 'Gap Kids',
    category: 'Toddler Boy Clothing',
    price: 24.99,
    tags: ['set', 'dinosaur', 'boys', 't-shirt', 'shorts', 'playtime'],
    image: '/api/placeholder/300/400',
    inStock: true
  },
  {
    id: '15',
    name: 'Baby Onesie 3-Pack',
    description: 'Soft organic cotton onesies in pack of 3. Essential for newborn wardrobe.',
    brand: 'Carter\'s',
    category: 'Baby Onesies',
    price: 16.99,
    tags: ['onesie', 'baby', 'organic', 'cotton', '3-pack', 'newborn'],
    image: '/api/placeholder/300/400',
    inStock: true
  },
  {
    id: '16',
    name: 'School Backpack',
    description: 'Durable school backpack with multiple compartments. Perfect for students.',
    brand: 'JanSport',
    category: 'Kids Backpacks',
    price: 34.99,
    tags: ['backpack', 'school', 'durable', 'compartments', 'students'],
    image: '/api/placeholder/300/400',
    inStock: false
  },
  {
    id: '17',
    name: 'Princess Tulle Skirt',
    description: 'Magical tulle skirt perfect for dress-up and special occasions.',
    brand: 'Disney',
    category: 'Kids Girl Bottoms',
    price: 22.99,
    tags: ['skirt', 'tulle', 'princess', 'dress-up', 'special', 'occasions'],
    image: '/api/placeholder/300/400',
    inStock: true
  },
  {
    id: '18',
    name: 'Knitted Baby Cardigan',
    description: 'Cozy knitted cardigan for babies. Soft and warm for cooler weather.',
    brand: 'Petit Bateau',
    category: 'Baby Girl Clothing',
    price: 28.99,
    tags: ['cardigan', 'baby', 'knitted', 'cozy', 'warm', 'weather'],
    image: '/api/placeholder/300/400',
    inStock: true
  },

  // Home & Living
  {
    id: '19',
    name: 'Linen Duvet Cover Set',
    description: 'Luxurious linen duvet cover set in natural colors. Creates a serene bedroom atmosphere.',
    brand: 'West Elm',
    category: 'Duvet Covers',
    price: 89.99,
    tags: ['duvet', 'linen', 'luxurious', 'natural', 'bedroom', 'serene'],
    image: '/api/placeholder/300/300',
    inStock: true
  },
  {
    id: '20',
    name: 'Velvet Cushion Cover',
    description: 'Soft velvet cushion cover with hidden zipper. Adds elegance to any room.',
    brand: 'CB2',
    category: 'Decorative Pillows',
    price: 19.99,
    tags: ['cushion', 'velvet', 'zipper', 'elegance', 'room', 'decor'],
    image: '/api/placeholder/300/300',
    inStock: true
  },
  {
    id: '21',
    name: 'Ceramic Dinner Plates Set',
    description: 'Modern ceramic dinner plates set of 4. Perfect for everyday dining.',
    brand: 'Crate & Barrel',
    category: 'Kitchen Linens',
    price: 39.99,
    tags: ['plates', 'ceramic', 'dinner', 'modern', 'dining', 'set'],
    image: '/api/placeholder/300/300',
    inStock: true
  },
  {
    id: '22',
    name: 'Scented Candle Collection',
    description: 'Set of 3 scented candles with relaxing fragrances. Creates cozy ambiance.',
    brand: 'Bath & Body Works',
    category: 'Candles',
    price: 24.99,
    tags: ['candles', 'scented', 'relaxing', 'cozy', 'ambiance', 'collection'],
    image: '/api/placeholder/300/300',
    inStock: false
  },
  {
    id: '23',
    name: 'Cotton Bath Towel Set',
    description: 'Absorbent cotton bath towel set in spa-quality material. Set of 2.',
    brand: 'Pottery Barn',
    category: 'Bath Towels',
    price: 49.99,
    tags: ['towels', 'cotton', 'bath', 'absorbent', 'spa', 'quality'],
    image: '/api/placeholder/300/300',
    inStock: true
  },
  {
    id: '24',
    name: 'Bamboo Storage Basket',
    description: 'Sustainable bamboo storage basket with handles. Perfect for organization.',
    brand: 'IKEA',
    category: 'Storage Solutions',
    price: 34.99,
    tags: ['basket', 'bamboo', 'storage', 'sustainable', 'organization', 'handles'],
    image: '/api/placeholder/300/300',
    inStock: true
  },

  // Beauty & Accessories
  {
    id: '25',
    name: 'Vintage-Style Sunglasses',
    description: 'Retro vintage-style sunglasses with UV protection. Perfect summer accessory.',
    brand: 'Ray-Ban',
    category: 'Sunglasses',
    price: 24.99,
    tags: ['sunglasses', 'vintage', 'retro', 'uv-protection', 'summer', 'accessory'],
    image: '/api/placeholder/300/300',
    inStock: true
  },
  {
    id: '26',
    name: 'Gold-Plated Hoop Earrings',
    description: 'Elegant gold-plated hoop earrings. Adds sophistication to any outfit.',
    brand: 'Pandora',
    category: 'Jewelry',
    price: 19.99,
    tags: ['earrings', 'gold-plated', 'hoop', 'elegant', 'sophisticated', 'jewelry'],
    image: '/api/placeholder/300/300',
    inStock: true
  },
  {
    id: '27',
    name: 'Leather Crossbody Bag',
    description: 'Compact leather crossbody bag with adjustable strap. Perfect for daily essentials.',
    brand: 'Coach',
    category: "Women's Crossbody Bags",
    price: 69.99,
    tags: ['bag', 'crossbody', 'leather', 'adjustable', 'compact', 'essentials'],
    image: '/api/placeholder/300/300',
    inStock: true
  },
  {
    id: '28',
    name: 'Silk Hair Scrunchie Set',
    description: 'Gentle silk hair scrunchie set of 3. Protects hair while adding style.',
    brand: 'Slip',
    category: 'Hair Accessories',
    price: 14.99,
    tags: ['scrunchie', 'silk', 'hair', 'gentle', 'style', 'set'],
    image: '/api/placeholder/300/300',
    inStock: false
  },
  {
    id: '29',
    name: 'Statement Necklace',
    description: 'Bold statement necklace with geometric design. Perfect for special occasions.',
    brand: 'BaubleBar',
    category: 'Jewelry',
    price: 29.99,
    tags: ['necklace', 'statement', 'bold', 'geometric', 'special', 'occasions'],
    image: '/api/placeholder/300/300',
    inStock: true
  },
  {
    id: '30',
    name: 'Quilted Handbag',
    description: 'Classic quilted handbag with chain strap. Timeless design for everyday use.',
    brand: 'Chanel',
    category: "Women's Handbags",
    price: 79.99,
    tags: ['handbag', 'quilted', 'chain', 'classic', 'timeless', 'everyday'],
    image: '/api/placeholder/300/300',
    inStock: true
  },

  // Sportswear
  {
    id: '31',
    name: 'High-Support Sports Bra',
    description: 'High-support sports bra with moisture-wicking fabric. Perfect for intense workouts.',
    brand: 'Lululemon',
    category: "Women's Sports Bras",
    price: 39.99,
    tags: ['sports-bra', 'high-support', 'moisture-wicking', 'workout', 'intense', 'fitness'],
    image: '/api/placeholder/300/400',
    inStock: true
  },
  {
    id: '32',
    name: 'Running Leggings',
    description: 'Stretchy running leggings with side pockets. Made from recycled polyester.',
    brand: 'Athleta',
    category: "Women's Leggings",
    price: 34.99,
    tags: ['leggings', 'running', 'stretchy', 'pockets', 'recycled', 'polyester'],
    image: '/api/placeholder/300/400',
    inStock: true
  },
  {
    id: '33',
    name: 'Athletic Tank Top',
    description: 'Breathable athletic tank top with quick-dry technology. Ideal for gym sessions.',
    brand: 'Nike',
    category: "Women's Tank Tops",
    price: 24.99,
    tags: ['tank-top', 'athletic', 'breathable', 'quick-dry', 'gym', 'sessions'],
    image: '/api/placeholder/300/400',
    inStock: true
  },
  {
    id: '34',
    name: 'Yoga Mat with Strap',
    description: 'Non-slip yoga mat with carrying strap. Perfect for home or studio practice.',
    brand: 'Manduka',
    category: 'Fitness Accessories',
    price: 49.99,
    tags: ['yoga-mat', 'non-slip', 'strap', 'home', 'studio', 'practice'],
    image: '/api/placeholder/300/300',
    inStock: false
  },
  {
    id: '35',
    name: 'Training Shorts',
    description: 'Lightweight training shorts with inner brief. Great for cardio workouts.',
    brand: 'Under Armour',
    category: "Men's Athletic Shorts",
    price: 29.99,
    tags: ['shorts', 'training', 'lightweight', 'brief', 'cardio', 'workouts'],
    image: '/api/placeholder/300/400',
    inStock: true
  },
  {
    id: '36',
    name: 'Wireless Sports Headphones',
    description: 'Sweat-resistant wireless headphones designed for active lifestyle.',
    brand: 'Beats',
    category: 'Fitness Accessories',
    price: 79.99,
    tags: ['headphones', 'wireless', 'sweat-resistant', 'active', 'lifestyle', 'sports'],
    image: '/api/placeholder/300/300',
    inStock: true
  },

  // Underwear & Sleepwear
  {
    id: '37',
    name: 'Cotton Brief 5-Pack',
    description: 'Comfortable cotton briefs in pack of 5. Everyday essentials in neutral colors.',
    brand: 'Calvin Klein',
    category: "Men's Briefs",
    price: 24.99,
    tags: ['briefs', 'cotton', '5-pack', 'comfortable', 'essentials', 'neutral'],
    image: '/api/placeholder/300/300',
    inStock: true
  },
  {
    id: '38',
    name: 'Lace Push-Up Bra',
    description: 'Elegant lace push-up bra with padded cups. Available in multiple colors.',
    brand: 'Victoria\'s Secret',
    category: "Women's Bras",
    price: 34.99,
    tags: ['bra', 'lace', 'push-up', 'padded', 'elegant', 'colors'],
    image: '/api/placeholder/300/300',
    inStock: true
  },
  {
    id: '39',
    name: 'Satin Pajama Set',
    description: 'Luxurious satin pajama set with button-up top and matching shorts.',
    brand: 'Eberjey',
    category: "Women's Pajamas",
    price: 59.99,
    tags: ['pajama', 'satin', 'luxurious', 'button-up', 'shorts', 'set'],
    image: '/api/placeholder/300/400',
    inStock: true
  },
  {
    id: '40',
    name: 'Modal Sleep Shirt',
    description: 'Soft modal sleep shirt with relaxed fit. Perfect for comfortable nights.',
    brand: 'Cosabella',
    category: "Women's Sleepwear",
    price: 29.99,
    tags: ['sleep-shirt', 'modal', 'soft', 'relaxed', 'comfortable', 'nights'],
    image: '/api/placeholder/300/400',
    inStock: false
  },
  {
    id: '41',
    name: 'Seamless Hipster 3-Pack',
    description: 'Seamless hipster underwear pack of 3. No visible lines under clothing.',
    brand: 'Spanx',
    category: "Women's Panties",
    price: 19.99,
    tags: ['hipster', 'seamless', '3-pack', 'underwear', 'invisible', 'lines'],
    image: '/api/placeholder/300/300',
    inStock: true
  },
  {
    id: '42',
    name: 'Flannel Pajama Pants',
    description: 'Cozy flannel pajama pants with elastic waistband. Perfect for winter nights.',
    brand: 'L.L.Bean',
    category: "Men's Pajamas",
    price: 24.99,
    tags: ['pajama-pants', 'flannel', 'cozy', 'elastic', 'winter', 'nights'],
    image: '/api/placeholder/300/400',
    inStock: true
  },

  // Shoes & Bags
  {
    id: '43',
    name: 'White Leather Sneakers',
    description: 'Classic white leather sneakers with minimalist design. Versatile everyday footwear.',
    brand: 'Adidas',
    category: "Women's Sneakers",
    price: 69.99,
    tags: ['sneakers', 'white', 'leather', 'minimalist', 'versatile', 'everyday'],
    image: '/api/placeholder/300/300',
    inStock: true
  },
  {
    id: '44',
    name: 'Block Heel Ankle Boots',
    description: 'Stylish ankle boots with comfortable block heel. Perfect for office or casual wear.',
    brand: 'Sam Edelman',
    category: "Women's Ankle Boots",
    price: 89.99,
    tags: ['ankle-boots', 'block-heel', 'stylish', 'comfortable', 'office', 'casual'],
    image: '/api/placeholder/300/400',
    inStock: true
  },
  {
    id: '45',
    name: 'Canvas Tote Bag',
    description: 'Eco-friendly canvas tote bag with reinforced handles. Perfect for shopping.',
    brand: 'Everlane',
    category: "Women's Tote Bags",
    price: 19.99,
    tags: ['tote-bag', 'canvas', 'eco-friendly', 'reinforced', 'shopping', 'handles'],
    image: '/api/placeholder/300/300',
    inStock: true
  },
  {
    id: '46',
    name: 'Ballet Flats',
    description: 'Comfortable ballet flats in soft leather. Classic design for everyday elegance.',
    brand: 'Tory Burch',
    category: "Women's Flats",
    price: 49.99,
    tags: ['ballet-flats', 'comfortable', 'leather', 'classic', 'elegance', 'everyday'],
    image: '/api/placeholder/300/300',
    inStock: false
  },
  {
    id: '47',
    name: 'Laptop Messenger Bag',
    description: 'Professional laptop messenger bag with padded compartment. Perfect for work.',
    brand: 'Tumi',
    category: "Men's Laptop Bags",
    price: 99.99,
    tags: ['messenger-bag', 'laptop', 'professional', 'padded', 'work', 'compartment'],
    image: '/api/placeholder/300/300',
    inStock: true
  },
  {
    id: '48',
    name: 'Suede Loafers',
    description: 'Elegant suede loafers with tassel detail. Perfect for smart casual occasions.',
    brand: 'Cole Haan',
    category: "Men's Loafers",
    price: 79.99,
    tags: ['loafers', 'suede', 'elegant', 'tassel', 'smart-casual', 'occasions'],
    image: '/api/placeholder/300/300',
    inStock: true
  },
  {
    id: '49',
    name: 'Evening Clutch Bag',
    description: 'Glamorous evening clutch with beaded detail. Perfect for special events.',
    brand: 'Kate Spade',
    category: "Women's Clutch Bags",
    price: 39.99,
    tags: ['clutch', 'evening', 'glamorous', 'beaded', 'special', 'events'],
    image: '/api/placeholder/300/300',
    inStock: true
  },
  {
    id: '50',
    name: 'Running Shoes',
    description: 'Lightweight running shoes with cushioned sole. Designed for performance and comfort.',
    brand: 'Brooks',
    category: 'Athletic Shoes',
    price: 89.99,
    tags: ['running-shoes', 'lightweight', 'cushioned', 'performance', 'comfort', 'athletic'],
    image: '/api/placeholder/300/300',
    inStock: true
  }
]; 