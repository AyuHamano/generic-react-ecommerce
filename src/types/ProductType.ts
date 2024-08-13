import {ReviewType} from "./ReviewType.ts";

export interface ProductType {
    id?: number
    title: string
    thumbnail: string
    description: string
    price?: number
    discount?: number
    rating?: number
    brand?: string
    category?: string
    reviews?: ReviewType[]
}