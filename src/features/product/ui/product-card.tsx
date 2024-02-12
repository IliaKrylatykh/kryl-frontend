import { Product } from "@/entities/product";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Label } from "@/shared/ui/label";
import Image from "next/image";
import { FC } from "react";

export const ProductCard: FC<Product> = ({
  name,
  description,
  price,
  categoryId,
  images,
}) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src="https://tigereye.ru/images/shop_items/882.jpg.webp"
          alt="card"
          width={700}
          height={475}
          layout="responsive"
        />
        <Label htmlFor="name">{description}</Label>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Label htmlFor="name">{price}</Label>
        <Label htmlFor="name">{categoryId}</Label>
        <Button>Buy</Button>
      </CardFooter>
    </Card>
  );
};
