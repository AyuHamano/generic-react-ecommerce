import {useEffect, useState} from "react";
import {Api} from "../services/api.ts";

export function useFetch({url, search}: { url: string, search?: string }) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    console.log(search)
    useEffect(() => {
        (async function () {
            const params = {
                q: search
            }
            try {
                setLoading(true)
                const response = await Api.get(url, params)
                if (response.status === 200) {
                    setData(response.data?.products)
                }
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        })()

    }, [search])

    return {data, loading}
}