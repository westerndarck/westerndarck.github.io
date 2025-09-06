import Link from 'next/link';
import { Mail, Twitter } from 'lucide-react';
import { CinnamonStickIcon } from './icons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <CinnamonStickIcon className="h-8 w-8 text-primary" />
              <span className="font-bold font-headline text-2xl">Ceylon Spice Route</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Bringing the authentic, delicate taste of true Ceylon cinnamon from the heart of Sri Lanka to your kitchen.
            </p>
          </div>

          <div>
            <h4 className="font-headline font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-3">
              <a href="mailto:ytmgteam@gmali.com" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5 mr-3" />
                ytmgteam@gmali.com
              </a>
              <a href="https://twitter.com/YtmgTeam82600" target="_blank" rel="noopener noreferrer" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5 mr-3" />
                @YtmgTeam82600
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-muted-foreground text-sm">
          <p>&copy; {currentYear} Ceylon Spice Route. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
