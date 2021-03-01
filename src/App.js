import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  return (
    <div className="App">
      <h1>Cheesy Deluxe Pizza Pasta!</h1>
      <h4>
        Cooking Tips For <u>PIZZA PASTA</u>
      </h4>
      <div className="row">
        <div className="col-md-3">
          <img
            src="https://www.thechunkychef.com/wp-content/uploads/2017/10/Deluxe-Pizza-Pasta-scoop.jpg"
            alt="pasta"
            className="pic"
          />
        </div>
        <div class="col-md-6">
          <p>⭐⭐⭐⭐⭐</p>
          <p className="data">
            Everything you love about a deluxe pizza, with flavors like
            pepperoni, Italian sausage, green bell pepper, plenty of cheese, and
            sweet onion, in a kid-friendly one pot pasta recipe, ready in just
            30 minutes. What’s not to love?!
          </p>
          <p>
            <strong>⭐4.4 &nbsp;&nbsp; ⌛30 min &nbsp;&nbsp; 🎂Easy</strong>
          </p>
          <button onClick={() => setLike(like + 1)}>👍{like}</button>
          <button onClick={() => setDislike(dislike + 1)}>👎{dislike}</button>
        </div>
      </div>

      <a href="#ingd" className="ing btn btn-info" data-toggle="collapse">
        Ingredient
      </a>
      <a href="#data" className="prep btn btn-info" data-toggle="collapse">
        Preparation
      </a>
      <div id="ingd" className="collapse">
        <ul className="data">
          <li>
            {" "}
            1 lb mild Italian sausage, casings removed ((or buy pre-ground
            sausage))
          </li>
          <li>1/2 cup sliced pepperoni, (divided)</li>
          <li>1/2 green bell pepper, diced</li>
          <li>1/2 yellow onion, diced</li>
          <li>4 cloves garlic, minced</li>
        </ul>
      </div>

      <div id="data" className="collapse">
        <ul className="data">
          <li>
            Brown sausage in dutch oven and drain grease, then return to pot.
          </li>
          <li>
            {" "}
            Add pepperoni pieces, onion, green pepper and garlic. Cook a few
            minutes.{" "}
          </li>
          <li>Stir in pasta sauce, seasonings and water. Bring to a boil.</li>
          <li>
            Once boiling, add pasta, stir, cover, and simmer 12-15 minutes,
            until pasta is tender and most of the liquid is gone.
          </li>
          <li>Add soaked almonds.</li>
          <li>
            Stir in 1 cup of cheese, then top with remaining cheese and
            pepperoni slices..
          </li>
          <li>Broil on HIGH for 1-3 minutes..</li>
        </ul>
      </div>
    </div>
  );
}
