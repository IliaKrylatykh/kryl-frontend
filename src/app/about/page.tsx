import { ProductList } from "@/features/product";
import { ToggleTheme } from "@/features/theme/toggle-theme";

export default function AuthenticationPage() {
  return (
    <>
      <ToggleTheme />
      <ProductList />
    </>
  );
}
