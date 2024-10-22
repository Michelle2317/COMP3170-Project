import "../styles/recipeForm.css";
export default function Profile() {
  return (
    <>
     <div className="mainContainer">
      <div className="image">
        <img src="../public/man.jpg"></img>
      </div>
    <div className="information">
      <h1> About Me</h1>
      <h2>First Name<span>Nathan</span></h2>
      <h2>Last Name<span>Schroter</span></h2>
      <h2>Email<span>ndschroter ....</span></h2>
      <h2>Phone Number<span> 778 ....</span></h2>
      <h2>Adress<span>5311 ....</span></h2>

    </div>
    <div className="recipes">
      <h1>Recent Recipes</h1>
      <div className="recipesImages">
        <div>
          <h2>Chicken</h2>
      <img src="../public/recipeOne.jpg"></img>
         </div>
         <div>
          <h2>Pasta</h2>
      <img src="../public/recipeTwo.jpg"></img>
           </div>
         <div>
          <h2>Chicken</h2>
           <img src="../public/recipeThree.jpg"></img>
          </div>
         <div>
          <h2>Pasta</h2>
            <img src="../public/recipeFour.jpg"></img>
             </div>
      </div>
    </div>
      </div>
    </>

      


  )
}