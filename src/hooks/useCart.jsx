import { useQuery } from '@tanstack/react-query'

import useAuth from './useAuth';

const useCart = () => {
    const {user, loading} = useAuth();
    const token = localStorage.getItem('access-token');
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/carts?email=${user.email}`, {headers: {
                authorization: `Bearer ${token}`
            }})
            return response.json();
        },
      })
    return [cart, refetch]
};

export default useCart;