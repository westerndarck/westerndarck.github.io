"use server";

import { suggestRecipes, type CinnamonRecipeInput } from '@/ai/flows/cinnamon-recipe-suggestions';

export async function getCinnamonRecipes(input: CinnamonRecipeInput) {
  try {
    const result = await suggestRecipes(input);
    return result;
  } catch (error) {
    console.error("Error getting recipe suggestions:", error);
    return { recipes: [] };
  }
}
