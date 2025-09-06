import type { Product, Review, Post } from './types';

export const reviews: Review[] = [
  { id: '1', author: 'Jane D.', rating: 5, comment: 'Absolutely the best cinnamon I have ever tasted! The aroma is intoxicating.', date: '2023-10-15' },
  { id: '2', author: 'John S.', rating: 4, comment: 'Great quality, but a bit pricey. Still, you get what you pay for.', date: '2023-09-22' },
  { id: '3', author: 'Emily R.', rating: 5, comment: 'Made the most amazing apple pie with this. Will be buying again!', date: '2023-11-01' }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Ceylon Cinnamon Sticks (Alba Grade)',
    slug: 'ceylon-cinnamon-sticks-alba',
    description: 'The highest grade of Ceylon cinnamon, Alba is renowned for its exquisite aroma, delicate flavor, and slender, smooth quills. Perfect for infusing beverages and creating visually stunning dishes. Each stick is hand-rolled to perfection.',
    shortDescription: 'Exquisite, top-grade cinnamon sticks.',
    price: 14.99,
    images: ['https://picsum.photos/600/400?random=1', 'https://picsum.photos/600/400?random=2', 'https://picsum.photos/600/400?random=3'],
    stock: 100,
    reviews: reviews.slice(0, 2),
    category: 'Sticks',
  },
  {
    id: '2',
    name: 'Organic Ceylon Cinnamon Powder',
    slug: 'organic-ceylon-cinnamon-powder',
    description: 'Finely ground from authentic Cinnamomum verum bark, our organic powder offers a sweet, warm flavor without the harshness of cassia. Ideal for baking, sprinkling over oatmeal, or adding to your morning coffee.',
    shortDescription: 'Fine, sweet, and aromatic powder.',
    price: 9.99,
    images: ['https://picsum.photos/600/400?random=4', 'https://picsum.photos/600/400?random=5'],
    stock: 250,
    reviews: [reviews[2]],
    category: 'Powder',
  },
  {
    id: '3',
    name: 'Cinnamon Leaf Essential Oil',
    slug: 'cinnamon-leaf-essential-oil',
    description: '100% pure, steam-distilled essential oil from cinnamon leaves. This oil has a spicy, musky, and warm aroma, perfect for aromatherapy, diffusers, and creating a cozy home atmosphere. Not for internal consumption.',
    shortDescription: 'Warm and spicy essential oil for aromatherapy.',
    price: 19.99,
    images: ['https://picsum.photos/600/400?random=6'],
    stock: 50,
    reviews: [],
    category: 'Extracts',
  },
  {
    id: '4',
    name: 'Cinnamon Infused Honey',
    slug: 'cinnamon-infused-honey',
    description: 'A delightful blend of pure, raw wildflower honey and a whole Ceylon cinnamon stick. This infusion creates a subtly spiced, sweet treat that\'s perfect for drizzling over toast, yogurt, or into tea.',
    shortDescription: 'Raw honey infused with a whole cinnamon stick.',
    price: 12.50,
    images: ['https://picsum.photos/600/400?random=7', 'https://picsum.photos/600/400?random=8'],
    stock: 80,
    reviews: [],
    category: 'Specialty',
  },
  {
    id: '5',
    name: 'Cinnamon Bark Pieces (C5 Grade)',
    slug: 'cinnamon-bark-pieces-c5',
    description: 'High-quality C5 grade cinnamon bark, broken into convenient pieces for mulling spices, potpourri, or making your own cinnamon extract. A more economical choice for applications where appearance is secondary to flavor.',
    shortDescription: 'Flavorful bark pieces for mulling and extracts.',
    price: 7.99,
    images: ['https://picsum.photos/600/400?random=9'],
    stock: 150,
    reviews: [],
    category: 'Sticks',
  },
  {
    id: '6',
    name: 'Cinnamon Sugar Blend',
    slug: 'cinnamon-sugar-blend',
    description: 'The perfect ready-to-use blend of our fine Ceylon cinnamon powder and organic cane sugar. Sprinkle generously on toast, churros, or the rim of a cocktail glass for a classic sweet and spicy finish.',
    shortDescription: 'Classic blend of cinnamon and sugar.',
    price: 6.99,
    images: ['https://picsum.photos/600/400?random=10'],
    stock: 300,
    reviews: [],
    category: 'Specialty',
  }
];

export const posts: Post[] = [
    {
        id: '1',
        slug: 'the-story-of-ceylon-cinnamon',
        title: 'The Story of Ceylon Cinnamon: From Ancient Spice to Modern Superfood',
        excerpt: 'Journey back in time to discover the rich history of Ceylon cinnamon, a spice once more valuable than gold. Learn how it shaped trade routes and continues to be a prized commodity.',
        content: '<p>The history of cinnamon is as rich and layered as its flavor. For centuries, the true source of this coveted spice was a closely guarded secret by Arab traders who transported it along ancient, arduous routes. They spun fantastic tales of cinnamon being harvested from the nests of giant birds to deter competition and maintain their monopoly.</p><p>It was not until the early 16th century that Portuguese explorers discovered the true origin: the lush, tropical island of Sri Lanka, then known as Ceylon. The quest for control over the cinnamon trade fueled colonial ambitions for centuries, with the Portuguese, Dutch, and finally the British all vying for dominance.</p><p>Today, Ceylon cinnamon (Cinnamomum verum) remains the world\'s most prized variety. Unlike its more common cousin, Cassia, true cinnamon has a delicate, sweet flavor and remarkably low levels of coumarin, a compound that can be harmful in large doses. It continues to be cultivated on small, family-owned farms in Sri Lanka, where traditional harvesting methods are passed down through generations. From a symbol of wealth and power to a beloved kitchen staple and health supplement, the story of Ceylon cinnamon is a testament to its enduring appeal.</p>',
        imageUrl: 'https://picsum.photos/800/450?random=11',
        author: 'YtmgSpice Team',
        date: '2023-11-05'
    },
    {
        id: '2',
        slug: 'ceylon-vs-cassia',
        title: 'Ceylon vs. Cassia: Why "True" Cinnamon Matters',
        excerpt: 'Not all cinnamon is created equal. We break down the key differences between Ceylon ("true") cinnamon and the more common Cassia variety, from flavor to health implications.',
        content: '<p>When you pick up a jar of cinnamon at the supermarket, you are most likely buying Cassia cinnamon. It\'s the dominant variety in global trade due to its lower cost and more robust, spicy flavor. However, there is another type of cinnamon that connoisseurs and health experts prefer: Ceylon cinnamon, also known as "true cinnamon."</p><h3>Key Differences:</h3><ul><li><strong>Flavor:</strong> Cassia is bold, spicy, and somewhat harsh. Ceylon is delicate, sweet, and has complex floral and citrus notes.</li><li><strong>Appearance:</strong> Cassia sticks are thick, dark, and hard with a single, hollow tube. Ceylon sticks are pale, brittle, and composed of many thin, paper-like layers rolled together like a cigar.</li><li><strong>Coumarin Content:</strong> This is the most significant difference. Cassia contains high levels of coumarin (up to 1%), a natural compound that can be toxic to the liver in large or frequent doses. Ceylon cinnamon contains only trace amounts (around 0.004%), making it the safer choice for regular consumption.</li></ul><p>While Cassia has its place, if you\'re using cinnamon for its health benefits or for recipes that require a more nuanced flavor, choosing Ceylon cinnamon is always the better option.</p>',
        imageUrl: 'https://picsum.photos/800/450?random=12',
        author: 'YtmgSpice Team',
        date: '2023-10-21'
    },
    {
        id: '3',
        slug: 'five-unexpected-uses-for-cinnamon',
        title: 'Five Unexpected Ways to Use Cinnamon in Your Daily Life',
        excerpt: 'Think cinnamon is just for baking? Think again! Explore five surprising and delightful ways to incorporate this versatile spice into your routine, from your morning coffee to your garden.',
        content: '<p>Cinnamon is a staple in any baker\'s pantry, but its uses extend far beyond pies and cookies. Here are five ways to get more of this wonderful spice into your life:</p><ol><li><strong>Supercharge Your Coffee:</strong> Stir a half-teaspoon of Ceylon cinnamon powder into your coffee grounds before brewing. It adds a subtle, delicious flavor and can help regulate blood sugar, preventing a mid-morning energy crash.</li><li><strong>Natural Home Freshener:</strong> Simmer a few cinnamon sticks with orange peels and cloves in a small pot of water on your stove. Your home will be filled with a warm, inviting, and all-natural aroma.</li><li><strong>A Boost for Your Plants:</strong> Cinnamon is a natural fungicide. Sprinkle a little on the soil of your houseplants to prevent mold and damping-off disease in seedlings.</li><li><strong>Spiced Savory Dishes:</strong> Cinnamon is a key ingredient in many savory spice blends around the world, from Moroccan tagines to Indian curries. Try adding a stick to the pot the next time you make chili or a rich meat stew.</li><li><strong>DIY Face Mask:</strong> Mix a teaspoon of cinnamon powder with two tablespoons of honey for a simple, antimicrobial and anti-inflammatory face mask. (Note: Always patch-test on your skin first, as cinnamon can be irritating for some).</li></ol>',
        imageUrl: 'https://picsum.photos/800/450?random=13',
        author: 'YtmgSpice Team',
        date: '2023-09-18'
    }
];
