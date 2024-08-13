const BASEURL = 'https://dummyjson.com/'

export const getProductById = (id: string | undefined) => {
    return BASEURL + 'products/' + id
}