const AmiServices = () =>{
  const serviceStyle = {
    minHeight:"100vh",
    marginBottom:"20vh"
  }
  const pageData =
  [
    ["3D mock ups and samples","laptop-outline"],
    ["Decor Contracting","leaf-outline"],
    ["Lighting design","bulb-outline"],
    ["Ultimate Space Planning and Management","clipboard-outline"],
    ["equipment specifications and procurement","bed-outline"],
    ["Interior Design Consultancy and Contracting.","people-outline"]
  ]
  const serviceCards = pageData.map(arr=>
    <div key={arr[0]} className="column is-4">
      <div className="box">
        <span className="icon is-large mb-3">
          <ion-icon size="large" name={arr[1]}></ion-icon>
        </span>
        <hr/>
        <h4 className="is-capitalized">{arr[0]}</h4>
      </div>
    </div>
  )

    return (
      <section style={serviceStyle} id="services" className="services section pb-6"> 
        <div className="shape-rec"></div>
        <div className="shape-circle"></div>
        <div className="container">

          <div className ="has-text-centered is-capitalized mb-6">
            <h2 className="title is-1 ">Services</h2>
            <p className="subtitle is-3">We Offers all sorts of services which include</p>
          </div>
          <div className="columns is-multiline has-text-centered">
              {serviceCards}
          </div>          
        </div>
      </section>
    )
  }
export default AmiServices