import {useEffect, useState} from "react";
import {Api} from "../services/api.ts";

interface useFetchProps {
    url: string
    search?: string
    type: string
    limit?: number
}

export function useFetch({url, search, type, limit}: useFetchProps) {

    const [data, setData] = useState([])

    useEffect(() => {
        (async function () {
            const params = {
                q: search,
                limit: limit
            }
            try {
                const response = await Api.get(url, params)
                if (response.status === 200) {
                    if (type === 'products') setData(response.data?.products)
                    else setData(response.data)
                }
            } catch (error) {
                console.log(error)
            }
        })()

    }, [search])

    return {data}
}