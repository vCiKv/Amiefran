import Script from 'next/script'
import NavBar from '../components/NavBar'
import AmiHero from '../components/AmiHero'
import AmiServices from '../components/AmiServices'
import AmiAboutUs from '../components/AmiAboutUs'
import AmiWorks from '../components/AmiWorks'
export default function App() {
  const HomePage=()=>{
    return(
      <>
        <NavBar/>
        <AmiHero/>
        <AmiServices/>
        <AmiAboutUs/>
        <AmiWorks/> 
        <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
        <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
      </>
    )
  }
  return( <HomePage/>)
  // return (
  //   <Router>    
  //     <Switch>
  //       <Route path="/" exact component={HomePage}/>
  //       <Route path="/dashboard" component={Dashboard}/>
  //       <Route path="*"> <Redirect to="/"/> </Route>
  //     </Switch>
  //   </Router>
  // )
}

// TODO
//apply async where you can
//Css control make colors nicer and smoother
//mobile responsive 
//make popups works well
//add animations and loading
