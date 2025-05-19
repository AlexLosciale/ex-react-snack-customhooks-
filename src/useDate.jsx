//Snack 2: useDate() – Ottenere la Data Attuale
//Creare un custom hook che restituisca la data e l'ora correnti, aggiornandosi automaticamente ogni secondo.

//Cosa deve fare?

//Restituisce un oggetto con data e ora formattata.
//Si aggiorna automaticamente ogni secondo.
//Usa useEffect() per gestire l’aggiornamento.

import { useState, useEffect, use } from 'react'

function useDate() {
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(interval)
    }
    , [])
    const [date, setDate] = useState(new Date())
    const formattedDate = date.toLocaleString('it-IT', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })
    return formattedDate
}
export default useDate

    

