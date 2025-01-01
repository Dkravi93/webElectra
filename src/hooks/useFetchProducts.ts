import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '@/store/slices/productSlice';
import { RootState } from '@/store/store';
import axios from 'axios';

// Define the Product interface and API response structure
export interface Product {
  id: string; // Corresponds to the `_id` field in MongoDB
  name: string;
  price: number;
  description: string;
  images: string[];
  stock: number;
  category: string; // The ObjectId reference to the category
  isOnSale: boolean;
  salePrice?: number; // Optional field since it’s only applicable when `isOnSale` is true
  rating: number;
  reviews: Review[]; // Array of reviews
  createdAt: string; // ISO date string for creation timestamp
  updatedAt: string; // ISO date string for update timestamp
}

// Sub-interface for Review
export interface Review {
  userName: string;
  rating: number; // Between 1 and 5
  review: string;
  createdAt: string; // ISO date string
}

interface FetchProductsResponse {
  products: Product[];
}

// Service function to fetch products
const fetchProductsAPI = async (): Promise<FetchProductsResponse> => {
  const response = await axios.get<FetchProductsResponse>('/api/products');
  return response.data;
};

export const useFetchProducts = (options?: { forceRefresh?: boolean }) => {
  const products = useSelector((state: RootState) => state.product.products);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const shouldFetch = options?.forceRefresh || products?.length === 0;

    if (shouldFetch) {
      const fetchProducts = async () => {
        setLoading(true);
        setError(null);

        try {
          const data = await fetchProductsAPI();
          // @ts-ignore
          dispatch(setProducts(data.products));
        } catch (err) {
          const errorMessage =
            axios.isAxiosError(err) && err.response
              ? `Error: ${err.response.data?.message || 'Failed to fetch products'}`
              : 'An unknown error occurred.';
          setError(errorMessage);
          console.error('Fetch Products Error:', err);
        } finally {
          setLoading(false);
        }
      };

      fetchProducts();
    }
  }, [products?.length, dispatch, options?.forceRefresh]);

  return { products, loading, error };
};
