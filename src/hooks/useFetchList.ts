import {useEffect, useState} from "react";
import {Api} from "../services/api.ts";

export interface useFetchProps {
    url: string
    search?: string
    type: string
    limit?: number
    skip?: number
}

export function useFetchList<T>({url, search, type, limit, skip}: useFetchProps) {

    const [data, setData] = useState<T[]>([])
    const [total, setTotal] = useState(0)

    async function getProductList() {
        const params = {
            q: search,
            limit: limit,
            skip: skip
        }
        try {
            const response = await Api.get(url, params)
            if (response.status === 200) {
                if (type === 'products') {
                    setData(response.data?.products)
                    setTotal(response.data?.total)
                } else setData(response.data)

            }
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getProductList().then()

    }, [search, skip])

    return {data, total}
}