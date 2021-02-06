import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => {
    return res.json()
}) 

function HomePage() {
    const { data, error } = useSWR('/api/quotes', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return (
        <>
        <div>
            Halojata vaan kaikille tasapuolisesti! :-)
        </div>
        <ul>
            {data.map(item => <li> {item.name}: {item.quote}</li>)}
        </ul>
        </>

    )
  }
  
  export default HomePage