import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories } from '@/store/slices/categorySlice';
import { RootState } from '@/store/store';
import axios from 'axios';

// Define the expected structure of the API response
interface Category {
  id: number;
  name: string;
  description: string;
  parentCategory: number;
  image: string;
}

interface FetchCategoriesResponse {
  categories: Category[];
}

export const useFetchCategories = (options?: { forceRefresh?: boolean }) => {
  const categories = useSelector((state: RootState) => state.category.categories || []);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const shouldFetch = options?.forceRefresh || categories?.length === 0;

    if (shouldFetch) {
      const fetchCategories = async () => {
        setLoading(true);
        setError(null);

        try {
          // Extract API call to a reusable service
          const { data } = await axios.get<FetchCategoriesResponse>('/api/categories');
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-expect-error
          dispatch(setCategories(data.categories));
        } catch (err) {
          const errorMessage =
            axios.isAxiosError(err) && err.response
              ? `Error: ${err.response.data?.message || 'Failed to fetch categories'}`
              : 'An unknown error occurred.';
          setError(errorMessage);
          console.error('Fetch Categories Error:', err);
        } finally {
          setLoading(false);
        }
      };

      fetchCategories();
    }
  }, [categories?.length, dispatch, options?.forceRefresh]);

  return { categories, loading, error };
};
