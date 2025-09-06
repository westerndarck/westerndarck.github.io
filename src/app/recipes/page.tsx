import { RecipeForm } from './recipe-form';

export default function RecipesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Cinnamon Recipe Generator</h1>
        <p className="mt-4 text-muted-foreground text-lg">
          Have some cinnamon but not sure what to create? Tell us what you have, and our AI-powered culinary assistant will suggest delicious recipes for you.
        </p>
      </div>
      <RecipeForm />
    </div>
  );
}
