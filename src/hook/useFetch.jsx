import { useEffect, useState } from "react"
import { databases } from "../appwrite";
import { appwriteConfig } from "../appwrite/appwriteConfig";

export const useFetch = (table) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetch = async () => {
            setIsLoading(true);
            try{
                const data = await databases.listDocuments(
                    appwriteConfig.databaseId,
                    table,
                    []
                  )
                  setData(data.documents);
                  setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }

        };
        fetch();
    }, [table]);
    return {data, isLoading, error};
}