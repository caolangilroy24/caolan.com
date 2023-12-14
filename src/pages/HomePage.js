import image from '../img/Pullaheeny.jpg'
export const HomePage = () => {
  return (
    <div data-testid='homepage' className='homepage-container' style={{backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat"}}>
    {/* <div> */}
        <h1 homepage-title></h1> 

        <div class="row">
          <div class="column">
          AHHHHHH FML 
          </div>
          <div class="column">
            <h1>Hi my name is Caolan Gilroy</h1>
          </div>


        </div>
        <div class="row">
          <div class="column">
            <p>Why isnt this working?</p>
            </div>
            <div class="column">
              <p>I am a Full-Stack Software Engineer from the west coast of Ireland. I enjoy web development and I currently aspire to move to Berlin Germany.</p>
            </div>
        </div>
      </div>

  )
  // Hi, My name is Caolan Gilroy
  // <p>I am an Irish software engineer with 3 years experience in full stack, java script language. I am 25 years old that has a passion for software development and also design. front end and back end. lol bum</p>

}
