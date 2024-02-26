import { ProductList } from "@/features/product";
import { ToggleTheme } from "@/features/theme/toggle-theme";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ToggleTheme />
      <ProductList />
    </main>
  );
}
