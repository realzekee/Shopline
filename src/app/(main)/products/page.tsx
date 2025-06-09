
import { products as allProducts } from '@/lib/data';
import ProductList from '@/components/ProductList';

interface ProductsPageProps {
  searchParams?: {
    q?: string;
  };
}

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  const searchTerm = searchParams?.q || '';

  const filteredProducts = allProducts.filter(product => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      product.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      product.description.toLowerCase().includes(lowerCaseSearchTerm) ||
      product.category.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });

  return (
    <div>
      <h1 className="font-headline text-3xl font-bold mb-8 text-primary text-center">Our Products</h1>
      <ProductList products={filteredProducts} />
    </div>
  );
}
