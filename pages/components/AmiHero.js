import Image from 'next/image'
const AmiHero= () =>{
    return(
      <div className="hero is-fullheight">
        <div className="columns is-gapless">
          <div className="column hero-body hero-left">
            <div className="has-text-left has-text-justified">
              <h1 className="title is-size-2-desktop">Lets Make Your Dream Interior</h1>
              <p className="subtitle is-size-4-desktop"> IntieAmet elitr labore dolores sea sed, Lorem vero ea stet ea lorem.ro</p>
            </div>
          </div>
          <div className="column hero-right">
              <figure className="image">
                <Image alt="" layout="fill" src="https://res.cloudinary.com/amiefran/image/upload/v1619279191/amiefran/huy-nguyen-DRMUcPC0JXc-unsplash_px1cr6.jpg"/>
              </figure>
          </div>
        </div>
      </div>
    )
  }
export default AmiHero