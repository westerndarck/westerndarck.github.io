// This is a server-side file.
'use server';

/**
 * @fileOverview Provides recipe suggestions based on the type and amount of cinnamon the user has.
 *
 * - suggestRecipes - A function that suggests recipes based on cinnamon availability.
 * - CinnamonRecipeInput - The input type for the suggestRecipes function.
 * - CinnamonRecipeOutput - The return type for the suggestRecipes function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CinnamonRecipeInputSchema = z.object({
  cinnamonType: z
    .string()
    .describe('The type of cinnamon available (e.g., Ceylon, Cassia).'),
  cinnamonAmount: z
    .string()
    .describe('The amount of cinnamon available (e.g., 2 teaspoons, 1 stick).'),
});
export type CinnamonRecipeInput = z.infer<typeof CinnamonRecipeInputSchema>;

const CinnamonRecipeOutputSchema = z.object({
  recipes: z
    .array(z.string())
    .describe('An array of recipe suggestions that use the specified cinnamon type and amount.'),
});
export type CinnamonRecipeOutput = z.infer<typeof CinnamonRecipeOutputSchema>;

export async function suggestRecipes(input: CinnamonRecipeInput): Promise<CinnamonRecipeOutput> {
  return cinnamonRecipeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'cinnamonRecipePrompt',
  input: {schema: CinnamonRecipeInputSchema},
  output: {schema: CinnamonRecipeOutputSchema},
  prompt: `You are a recipe suggestion AI. Given the type of cinnamon and the amount a user has available, suggest recipes that appropriately utilize the provided cinnamon.

  Cinnamon Type: {{{cinnamonType}}}
  Cinnamon Amount: {{{cinnamonAmount}}}

  Provide a list of recipe suggestions.`,
});

const cinnamonRecipeFlow = ai.defineFlow(
  {
    name: 'cinnamonRecipeFlow',
    inputSchema: CinnamonRecipeInputSchema,
    outputSchema: CinnamonRecipeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
