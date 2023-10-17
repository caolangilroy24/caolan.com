import image from '../img/Pullaheeny.jpg'
export const HomePage = () => {
  return (
    <div className='homepage-container' style={{backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat"}}>
    {/* <div> */}
        <h1>HomePage</h1>
        <p>I know I know, its very basic atm, but just you wait and see</p>
        </div>
  )
}
