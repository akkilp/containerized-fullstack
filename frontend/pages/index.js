import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => {
    return res.json()
}) 

function HomePage() {
    const { data, error } = useSWR('/api/quotes', fetcher)

    return (
        <>
        <div className="target">
            Halojata vaan kaikille tasapuolisesti! :-)
        </div>
        <ul>
            {!!data ? data.map(item => <li> {item.name}: {item.quote}</li>) : <div>loading...</div>}
        </ul>
        </>

    )
  }
  
  export default HomePage