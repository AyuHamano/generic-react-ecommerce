export class ProductType {
    id?: number
    title: string
    thumbnail: string
    description: string
    price?: number
    discount?: number
    rating?: number
    brand?: string
    category?: string


    constructor({
                    id = 0,
                    thumbnail = '',
                    title = '',
                    price = 0,
                    discount = 0,
                    category = '',
                    rating = 0,
                    description = '',
                    brand = ''
                }: ProductType) {
        this.title = title
        this.thumbnail = thumbnail
        this.id = id
        this.brand = brand
        this.description = description
        this.price = price
        this.discount = discount
        this.rating = rating
        this.category = category

    }
}