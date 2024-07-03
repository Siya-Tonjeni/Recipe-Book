import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipesList from './components/RecipesList';
import RecipeDetail from './components/RecipeDetail';

const recipes = [
  // Add recipe objects here (image, title, description, ingredients, instructions)
  {
    id: 1,
    image: "../Assets/fudge.jpg",
    title: "Fudge",
    description: "Delicious fudge in a favourite flavour",
    ingredient: [
      "3 1/4 Cups Milk",
      "3 Cups Sugar",
      "1 1/2 tsp Salt",
      "1/2 Cup Butter"
    ],
    instructions: [
      "In a large heavy bottomed pan heat milk, butter, sugar and salt on a low heat until all the sugar is dissolved and the mixture is smooth",
      "Then turn up the heat and let the mix boil for 10 minutes. Keep stirring during this time",
      "Take off the heat and beat the fudge until it starts to set, then pour into the tin",
      "Sprinkle your desired amount of sea salt over the top of the fudge",
      "Leave the fudge for several hours or overnight to set, you can set it in the fridge quicker, then cut up into pieces to serve",
      "Store in an airtight container in the fridge for up to 3 weeks"
    ],
  },
  {
    id: 2,
    image: "../Assets/churros.jpg",
    title: "Churros",
    description: "Crispy outside and airy inside super easy recipe and such a fun party dessert!",
    ingredient: [
      "1/4 cup caster sugar",
      "2 tsp ground cinnamon",
      "1 Cup Flour",
      "Pinch of salt",
      "1 tbsp Oil",
      "1 cup Boiling water",
      "2 cups Oil (for frying)",
    ],
    instructions: [
      "Cinnamon sugar coating: Combine sugar and cinnamon in a shallow bowl, set aside.",
      "Batter: Mix flour, baking powder and salt in a bowl. Add oil and water and mix until just combined - it should be a thick, gummy batter, like a wet sticky dough, not thin and watery.",
      "Piping bag: Transfer dough into a piping bag with a star tip nozzle. Set aside while oil heats.",
      "Heat oil: Heat oil over medium high in a small pot to 170°C",
      "Pipe & snip: Pipe 15cm lengths of dough into the oil, snipping with scissors. Do 3 to 4 per batch, makes 10 to 12 in total.",
      "Cook: Cook for 2-3 minutes or until golden and crisp, rolling occasionally.",
      "Drain: Remove onto paper towel lined plate to drain. Then roll in sugar. Serve hot with Chocolate Sauce!"
    ],
  },
  {
    id: 3,
    image: "../Assets/cucumber-salad.jpg",
    title: "Spicy Cucumber Salad",
    description: "Korean inspired cucumber salad is refreshing, tangy and zesty",
    ingredient: [
      "6-7 mini cucumbers",
      "1/2 tsp course sea salt",
      "3 garlic cloves, minced",
      "1 1/2 tsp ginger, minced",
      "2 Tbsp soy sauce",
      "1 Tbsp rice vinegar",
      "1 tsp sesame oil",
      "1/2 tsp white granulated sugar",
      "1/2 tsp red pepper flakes", 
      "1/2 tsp white sesame seeds",
      "3-5 Tbsp chili onion crunch"
    ],
    instructions: [
      "Thinly slice the cucumbers, add to a large bowl and sprinkle with the salt. Set aside for 15 minutes. Mix the sauce together while the cucumbers salt. The salt will pull out extra moisture. ",
      "Discard the moisture in the bowl from the cucumbers, you can also use a paper towel to soak up the liquid.",
      " Add the sauce mix to the bowl with cucumbers. Mix well. Top the cucumber salad with Chili Onion Crunch and sesame seeds. ",
    ]
  },
  {
    id: 4,
    image: "../Assets/salmon.jpg",
    title: "Firecracker Salmon",
    description: "Succulent, flakey and fork tender with crispy edges.",
    ingredient: [
      "1 tsp garlic minced",
      "1/2 tsp ginger minced", 
      "1 Tbsp olive oil",
      "1 Tbsp low sodium soy sauce",
      "2 Tbsp Heinz chili sauce",
      "1 tsp brown sugar",
      "1 pinch crushed red chili flakes",
      "1-2 tsp sriracha",
      "4 skin off salmon fillets",
      "1 pinch salt to season",
      "1 pinch pepper to season",
      "1/2 teaspoon paprika",
      "1/4 cup chives chopped"
    ],
    instructions: [
      "In a shallow bowl, whisk together the minced garlic, minced ginger, olive oil, soy sauce, chili sauce, brown sugar, red chili flakes and sriracha to combine.",
      "Season salmon with salt, pepper and paprika. Add salmon fillets to the marinade, turning each to evenly coat in the sauce.",
      "Cover with plastic wrap and let marinate in the refrigerator for 2 hours or overnight (if time allows).",
      "Preheat oven to 190°C. Heat an oven proof skillet over medium heat with a small drizzle of oil.",
      "Sear salmon for 2-3 minutes on both sides, undisturbed, to get nice crust.",
      "Return all salmon fillets to the skillet. Alternatively, transfer to baking dish. Bake for 8-10 minutes, or until cooked to your liking.",
      "Serve warm with chopped chives."
    ]
  },
  {
    id: 5,
    image: "../Assets/kale-salad.jpg",
    title: "Kale Caeser Salad",
    description: "Filling delicious kale",
    ingredient: [
      "2 heads garlic",
      "olive oil, as needed",
      "kosher salt",
      "3/4 lb raw, sliced bacon",
      "1/4 cup freshly squeezed lemon juice",
      "1 tbsp dijon mustard",
      "3 anchovy fillets packed in oil, drained",
      "1/2 cup grated parmesan cheese",
      "1 cup olive oil",
      "freshly cracked black pepper",
      "1 bunch kale, stemmed + rinsed + dried",
      "1/2 lb crusty italian bread, torn into ½” pieces",
      "3 hearts of romaine, both ends trimmed + rinsed + dried",
      "1 small chunk parmesan cheese, shaved for topping",
    ],
    instructions: [
      "Preheat the oven to 300°F. Cut the tops off the heads of garlic, revealing the garlic cloves. Place the heads face-up on a piece of foil. Drizzle with olive oil and season with salt. Wrap the foil up, pinching it at the top, so the garlic is enclosed. Roast for 2 hours until soft and golden. Let cool.",
      "Raise the oven heat to 425°F. Lay the slices of bacon in one, even layer onto a sheet pan. Roast for 20-22 minutes, or until crispy. Transfer the bacon to a plate lined with paper towels to drain. Cool and roughly chop.",
      "Combine the lemon juice, dijon mustard, anchovy fillets, and a ¼ cup of grated parmesan cheese in the bowl of a food processor. Squeeze all of the roasted garlic out of the skins into the bowl. Pulse to combine. With the processor running, slowly drizzle in the olive oil. Season with salt and lots of freshly cracked black pepper to taste.",
      "Roll the kale leaves tightly lengthwise and cut the kale into ¼” slices. Place them in a large mixing bowl, along with a generous spoonful of the dressing. Toss well and “massage” the kale for about 30 seconds. Let sit for 10 minutes.",
      "Meanwhile, heat a large skillet over medium heat. Coat the bottom with a generous amount of olive oil. Add the torn bread. Let toast for a few minutes until golden and crisp on all sides, stirring often. Season with a pinch of salt and let the croutons cool slightly.",
      "Cut the romaine into ¼” slices and add to the kale, along with the remaining dressing. Toss for about 30 seconds to allow the romaine to soften slightly. Toss in the bacon, croutons, and remaining ¼ cup of grated parmesan.",
      "Serve the salad on a platter with the parmesan shavings and more freshly cracked black pepper over top."
    ]
  },
  {
    id: 6,
    image: "../Assets/lemon-loaf.jpg",
    title: "Lemon Loaf Cake",
    description: "Tender buttery crumb and full of bright citrus flavor cake",
    ingredient: [
      "1 1/2 cups all-purpose flour",
      "1 1/2 teaspoons baking powder",
      "1 Tbsp lemon zest",
      "1/2 tsp salt",
      "1/2 cup unsalted butter, at room temperature",
      "1 cup granulated sugar",
      "2 large eggs at room temperature",
      "1 tsp vanilla extract",
      "2 Tbsp lemon juice",
      "1/2 cup buttermilk"
    ],
    instructions: [
      "Preheat the oven to 350F degrees Fahrenheit. Grease an (8×4 inch or 9×5 inch) loaf pan with cooking spray",
      "In a medium bowl, whisk together the flour, baking powder, lemon zest, and salt. Set aside.",
      "In the bowl of a stand mixer fitted with the paddle attachment (or with an electric mixer), beat the butter and sugar together until fluffy and pale, about 4-6 minutes. With a spatula, scrape the sides and bottom of the bowl as needed. With the mixer on low-speed, add the eggs one at a time, add the vanilla extract and lemon juice. Beat on medium-high speed until combined. With the mixer on low, add the flour and buttermilk alternately to the batter, beginning and ending with the flour.",
      "Put the batter into the prepared loaf pan and bake for 45-55 minutes until the cake is golden brown and a toothpick inserted into the cake comes out clean with only a few moist crumbs.",
      "Remove from the oven and allow to cool in the pan for about 15 minutes.",
      "Prepare the lemon syrup by combining together the confectioners sugar and lemon juice. Set aside.",
      "Remove the lemon loaf from the pan and set it on a rack. Brush the syrup over the loaf while warm.",
      "Make the icing by whisking together the confectioners sugar, lemon juice and milk. Add additional juice, if needed. The icing should be thick.",
      "When the loaf is completely cool, pour the icing over the loaf."
    ]
  },
  
];

function App() {
  const [recipeList, setRecipeList] = useState(recipes);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipesList recipes={recipeList} />} />
        <Route path="/recipe/:id" element={<RecipeDetail recipes={recipeList} />} />
      </Routes>
    </Router>
   
  );
}

export default App;
