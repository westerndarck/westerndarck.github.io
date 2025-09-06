"use client";

import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { getCinnamonRecipes } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, Sparkles } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  cinnamonType: z.string().min(1, "Please select a cinnamon type."),
  cinnamonAmount: z.string().min(1, "Please enter an amount."),
});

type FormData = z.infer<typeof formSchema>;

export function RecipeForm() {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        cinnamonType: "Ceylon",
        cinnamonAmount: "",
    }
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setSuggestions([]);
    const result = await getCinnamonRecipes(data);
    setSuggestions(result.recipes);
    setIsLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="p-6 md:p-8">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid md:grid-cols-3 gap-6 items-end">
            <FormField
              control={form.control}
              name="cinnamonType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cinnamon Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Ceylon">Ceylon</SelectItem>
                      <SelectItem value="Cassia">Cassia</SelectItem>
                      <SelectItem value="Any">Any/Unsure</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cinnamonAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount Available</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 2 tsp or 1 stick" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Suggest Recipes
                </>
              )}
            </Button>
          </form>
        </Form>
      </Card>

      {isLoading && (
        <div className="mt-8 text-center">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
          <p className="mt-2 text-muted-foreground">Finding the perfect recipes...</p>
        </div>
      )}

      {suggestions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-headline font-bold mb-4 text-center">Your Recipe Suggestions</h2>
          <Card>
            <CardContent className="p-6">
              <ul className="list-disc list-inside space-y-3">
                {suggestions.map((recipe, index) => (
                  <li key={index} className="text-lg">{recipe}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
