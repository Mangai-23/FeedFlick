import { useState, useEffect } from "react"
import axios from 'axios';

const useAxiosFetch = (dataUrl) => {
    const [data, setData] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isload, setIsload] = useState(false);

    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();
        
        const fetchData =  async(url) => {
            setIsload(true);
            try{
               const res = await axios.get(url, 
                    {cancelToken: source.token}
                ); 
                if(isMounted) {
                    setFetchError(null);
                    setData(res.data);
                }
            }
            catch(err)
            {
                if(isMounted) {
                    setFetchError(err.message);
                    setData([])
                }
            }
            finally{
                isMounted && setTimeout(() => setIsload(false), 2000);
            }
        }
        fetchData(dataUrl);

        const clean = () => {
            isMounted=false;
            source.cancel();
        };
        return clean;

    },[dataUrl]);

  return {data, fetchError, isload};
}

export default useAxiosFetch