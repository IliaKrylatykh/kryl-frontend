"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/ui/utils";
import { Product } from "@/entities/product";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/shared/api/query-client";

const createProductFormSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.string(),
  images: z.array(z.string()),
  categoryId: z.string(),
});

const postProduct = async (productData: Product) => {
  const response = await axios.post(
    "https://api.kryl.shop/api/products",
    productData,
  );
  return response.data;
};

export function CreateProductForm({ className }: { className?: string }) {
  const [isCreateTransition, startCreateTransition] = useTransition();
  const form = useForm({
    resolver: zodResolver(createProductFormSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
      images: [""],
      categoryId: "1",
    },
  });

  const mutation = useMutation({
    mutationFn: postProduct,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["products"] });
      // Опционально: редирект или показ уведомления об успехе
    },
  });

  const handleSubmit = (data: Product) => {
    startCreateTransition(() => {
      mutation.mutate(data);
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={cn(className, "space-y-4")}
      >
        {/* Поля формы */}
        <Button className="mt-8" type="submit">
          Add
        </Button>
      </form>
    </Form>
  );
}
