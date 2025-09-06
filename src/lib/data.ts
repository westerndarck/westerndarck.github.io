import type { Product, Review, Post } from './types';

export const reviews: Review[] = [
  { id: '1', author: 'Jane D.', rating: 5, comment: 'Absolutely the best cinnamon I have ever tasted! The aroma is intoxicating.', date: '2023-10-15' },
  { id: '2', author: 'John S.', rating: 4, comment: 'Great quality, but a bit pricey. Still, you get what you pay for.', date: '2023-09-22' },
  { id: '3', author: 'Emily R.', rating: 5, comment: 'Made the most amazing apple pie with this. Will be buying again!', date: '2023-11-01' }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Cinnamon Rolls',
    slug: 'cinnamon-rolls',
    description: 'Freshly baked cinnamon rolls with a gooey center and cream cheese frosting. Made with the finest Ceylon cinnamon. A delight for your senses.',
    shortDescription: '1kg of delicious, freshly baked cinnamon rolls.',
    price: 10000,
    images: ['https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjaW5uYW1vbiUyMHJvbGxzfGVufDB8fHx8MTc1NzE5NTI4N3ww&ixlib=rb-4.1.0&q=80&w=1080'],
    stock: 50,
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
