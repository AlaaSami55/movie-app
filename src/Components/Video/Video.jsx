import Card from '../Card/Card'

export default function Video(props) {

    let { data } = props
    console.log(data);

    let CNT = 0
    return (
        <>
            <div className="row">
                {data.haveMovie ? <><h2>Trending Movie</h2>
                    {(() => {
                        CNT = 0
                    })()}{data.allmovies.filter((el) => { return CNT++ < 6 }).map((el) => {
                        return <Card data={el} />
                    })}</> : <><h2 className='mt-3'>Trending Tv</h2>
                    {(() => {
                        CNT = 0
                    })()}{data.alltv.filter((el) => { return CNT++ < 6 }).map((el) => {
                        return <Card data={el} />
                    })}</>}



            </div>
        </>
    )
}
