import { useState, useEffect } from "react";



function CurrencyConverter(currency) {

    const [data, setData] = useState({});



    useEffect(() => {



        fetch(`https://v6.exchangerate-api.com/v6/c7b1221410bbff4a591153d8/latest/${currency}`)

            .then(response => response.json())

            .then((res) => setData(res.conversion_rates))



    }, [currency])

    return data;







}

export default CurrencyConverter;