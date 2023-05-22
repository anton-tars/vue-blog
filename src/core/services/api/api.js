const baseApiUrl = 'https://fakestoreapi.com';

export const getProducts = async () => {
    const res = await fetch(`${baseApiUrl}/products`);
    const finalRes = await res.json();
    return finalRes;
}