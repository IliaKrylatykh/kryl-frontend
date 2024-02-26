"use client";

import { Form } from "@/shared/ui/form";
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
import { faker } from "@faker-js/faker";

const createProductFormSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.string(),
  images: z.array(z.string()),
  categoryId: z.string(),
});

export function CreateProductForm({ className }: { className?: string }) {
  const [isCreateTransition, startCreateTransition] = useTransition();
  const form = useForm({
    resolver: zodResolver(createProductFormSchema),
    defaultValues: {
      name: faker.commerce.product(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
      images: [faker.image.urlLoremFlickr()],
      categoryId: "1",
    },
  });

  return (
    <Form {...form}>
      <form
        // onSubmit={form.handleSubmit(handleSubmit)}
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
