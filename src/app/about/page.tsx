import { ProductList } from "@/features/product";
import { ToggleTheme } from "@/shared/theme/toggle-theme";
import { AppHeader } from "@/widgets/app-header/app-header";

export default function AuthenticationPage() {
  return (
    <>
      <AppHeader variant="public" />
      <ToggleTheme />
      <ProductList />
    </>
  );
}
