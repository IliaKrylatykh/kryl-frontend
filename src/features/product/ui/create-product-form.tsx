"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/ui/utils";
import { Product, ProductService } from "@/entities/product";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "@/shared/api/query-client";
import { EditProduct } from "@/entities/product/model/types";
import { Input } from "@/shared/ui/input";

const createProductFormSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.string().transform((val) => parseFloat(val)),
  images: z.array(z.string()),
  categoryId: z.string().transform((val) => parseInt(val)),
});

export function CreateProductForm({ className }: { className?: string }) {
  const form = useForm<Product>({
    resolver: zodResolver(createProductFormSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 1,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPu3s_xDuO6ORCCmMc7mbM4Uki7qWWpNDK9A&usqp=CAU",
      ],
      categoryId: 1,
    },
  });

  const mutation = useMutation({
    mutationFn: ProductService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const onSubmit = async (data: EditProduct) => {
    try {
      await mutation.mutateAsync(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(className, "space-y-4")}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="name..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>description</FormLabel>
              <FormControl>
                <Input placeholder="description..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>price</FormLabel>
              <FormControl>
                <Input placeholder="price..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>categoryId</FormLabel>
              <FormControl>
                <Input placeholder="categoryId..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mt-8" type="submit">
          Add
        </Button>
      </form>
    </Form>
  );
}
