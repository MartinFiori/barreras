import { useQuery } from "@tanstack/react-query";

export default function useCustomQuery({ fn, key, search }) {
  const { data, isLoading, error } = useQuery({
    queryFn: () => fn({ ...search }),
    queryKey: [key, { search }],
  });
  return [data, isLoading, error];
}
