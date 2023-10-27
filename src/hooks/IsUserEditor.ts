import { api } from "@/utils/api";
import useUserSession from "./useUserSession";

export const IsUserEditor = () => {
  const user = useUserSession();

  const userData = api && api.users ? api.users.getById.useQuery(
    {
      id: user?.id ? user?.id : "",
    },
    {
      enabled: !!user?.id,
    }
  ): null;

  if (!userData) return false;

  return userData?.data?.role === "ADMIN" || userData?.data?.role === "MOD";
};
