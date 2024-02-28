"use client";

import { Credentials } from "@/entities/user";
import { queryClient } from "@/shared/api/query-client";
import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Spinner } from "@/shared/ui/spinner";
import { cn } from "@/shared/ui/utils";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthService } from "../lib/auth-service";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { LoginSchema } from "../model/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormError } from "@/shared/ui/form-error";
import { FormSuccess } from "@/shared/ui/form-success";
import { FcGoogle } from "react-icons/fc";

interface AuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AuthForm({ className, ...props }: AuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    console.log(data);
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="your@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message="" />
          <FormSuccess message="" />
          <Button disabled={isLoading}>
            {isLoading && <Spinner className="mr-2 h-4 w-4 animate-spin" />}
            Login
          </Button>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button disabled={isLoading}>
        {isLoading && <Spinner className="mr-2 h-4 w-4 animate-spin" />}
        <FcGoogle />
      </Button>
    </div>
  );
}
