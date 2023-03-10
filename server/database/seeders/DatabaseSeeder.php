<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Article;
use App\Models\Tag;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        \App\Models\User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@admin.admin',
            'password' => Hash::make('987654321'),
            'admin' => true
        ]);
  
        $article = Article::create([
            'title' => 'Nutritional Quality and Health Benefits of Vegetables: A Review',
            'content' => '
            Joao Silva Dias
            TEchnical University Lisbon
            <h1>ABSTRACT</h1>
            <p>Vegetables are considered essential for well-balanced diets since they supply vitamins, minerals, dietary fiber, and phytochemicals. 
            Each vegetable group contains a unique combination and amount of these phytonutriceuticals, which distinguishes them from other groups and vegetables whithin their own group.
             In the daily diet vegetables have been strongly associated with improvement of gastrointestinal health, good vision, and reduced risk of heart disease, stroke, chronic diseases such as diabetes, and some forms of cancer.
              Some phytochemicals of vegetables are strong antioxidants and are thought to reduce the risk of chronic disease by protecting against free radical damage, by modifying metabolic activation and detoxification of carcinogens, or even by influencing processes that alter the course of tumor cells. 
              All the vegetables may offer protection to humans against chronic diseases. Nutrition is both a quantity and a quality issue, and vegetables in all their many forms ensure an adequate intake of most vitamins and nutrients, dietary fibers, and phytochemicals which can bring a much-needed measure of balance back to diets contributing to solve many of these nutrition problems. 
              The promotion of healthy vegetable products has coincided with a surging consumer interested in the healthy functionality of food. 
              Because each vegetable contains a unique combination of phytonutriceuticals, a great diversity of vegetables should be eaten to ensure that individual’s diet includes a combination of phytonutriceuticals and to get all the health benefits. 
              This article makes a review and discusses the nutritional quality and health benefits of the major groups of vegetables. 
            More interdisciplinary work is required that involves nutritional and food scientists as well as others from biomedical fields to ascertain the thrue function of specific phytonutriceuticals.</p>',
            'thumbnailURL' => '/ecoal.jpg',
            'mediaType' => 'image',
            'mediaURL' => '/ecoal.jpg',
            'leadStory' => false
        ],
        [
            'title' => 'Fish Nutritional Value as an Approach to Childrens Nutrition',
            'content' => '
            Sahya Maulu,Kundananji Nawanzi,Moshen Abdel-Tawwab and Hala Saber khalil
        <p>Fish is a relatively cheap and accessible source of animal protein for human consumption even in rural communities. 
        It is critical for global food and nutrition security, and its consumption continues to increase. As a highly nutritious food, 
        fish consumption is highly recommended for children and expectant mothers for normal growth and development.
        </p>
      <h1>The Chemical Composition of Fish</h1> 
      <p>
      Fish contains 1820% protein, and contains eight essential amino acids including sulfur containing lysine, methionine, and cysteine (12).
       It provides easily digestible protein of high biological value that is important for the growth and development of the body, the maintenance and repair of worn out tissues and for the production of enzymes and hormones necessary for many of the bodys processes,
        is contains less fat than red meat
        The fat content ranges from 0.2 to 25%, especially polyunsaturated fatty acids (PUFAs),
     which are essential for the proper growth of children and are not associated with the occurrence of cardiovascular disease (20). 
        Fats also contribute to the energy supply and aid in the adequate absorption of vitamins K, D, A, and E
        </p>
       ',
            'thumbnailURL' => '/ecoal.jpg',
            'mediaType' => 'image',
            'mediaURL' => '/ecoal.jpg',
            'leadStory' => false
        ],
        [
            'title' => 'Nutritional composition of red meat',
            'content' => '
            Peter WILLIAMS
            ARC Key Centre for Smart Foods, University of Wollongong, Wollongong, New South Wales, Australia
            <h1>INTRODUCTION</h1>
            <p>The Food Standards Australia New Zealand (FSANZ) FoodStandards Code defines meat as 
            "the whole or part of thecarcass of any buffalo, camel, cattle, deer, goat, hare, pig,poultry, rabbit or
             sheep, slaughtered other than in a wildstate, but does not include eggs, or foetuses".
             1This definitiondoes not include kangaroo meat, which is now widely avail-able for purchase in Australia and is likely to be consideredas meat.
             The term "meat" may refer only to meat flesh (skeletalmuscle plus any attached connective tissue or fat),
              but theFSANZ definition also includes offal (i.e. meat other thanmeat flesh, including brain, heart, kidney, liver, pancreas,spleen, thymus, tongue and tripe)
             although it excludes boneand bone marrow.
             </p>
             <h1>NUTRIENT COMPOSITION OF RED MEAT </h1>
             <p>Red meat contains high biological value protein and impor-tant micronutrients that are needed for good health through-out life.
              It also contains a range of fats, including essentialomega-3 polyunsaturated fats.
              Recent analyses have shownthat there has been a significant trend to leaner cuts of meatover the past two decades.
             4While the nutritional com-position will vary somewhat according to breed, feedingregimen, season and meat cut, the following discussion willshow that, in general, lean red meat has a relatively low fatcontent, is moderate in cholesterol, and is rich in protein andmany essential vitamins and minerals</p>'
             ,
            'thumbnailURL' => '/ecoal.jpg',
            'mediaType' => 'image',
            'mediaURL' => '/ecoal.jpg',
            'leadStory' => false
        ],
        [
            'title' => 'Estimating caffeine intake from energy drinks and dietary supplements in the United States',
            'content' => '
            <p>Nice to see you in <strong>Lens</strong>. Enjoy !</p>',
            'thumbnailURL' => '/ecoal.jpg',
            'mediaType' => 'image',
            'mediaURL' => '/ecoal.jpg',
            'leadStory' => false
        ],
        [
            'title' => 'Biomarkers of intake for tropical fruits',
            'content' => '<h1>Hello from ecoal</h1><p>Nice to see you in <strong>Lens</strong>. Enjoy !</p>',
            'thumbnailURL' => '/ecoal.jpg',
            'mediaType' => 'image',
            'mediaURL' => '/ecoal.jpg',
            'leadStory' => false
        ],
        [
            'title' => 'Slow Cooker Pineapple Upside-Down Cake',
            'content' => '<h1>Ingredients</h1>
            <p>
            •    10 tablespoons unsalted butter, softened, plus more for greasing insert
            •	 1/2 cup firmly packed light brown sugar
            •	 2 tablespoons dark rum
            •	 1/2 ripe pineapple, peeled, cored and cut into 1/4-inch-thick slices
            •	 1 cup plain flour
            •	 1/2 cup pecans, toasted and finely chopped
            •	 3/4 teaspoon baking powder
            •	 1/2 teaspoon ground cinnamon
            •	 1/4 teaspoon freshly grated nutmeg
            •	 Fine salt
            •	 2/3 cup granulated sugar
            •	 2 large eggs, at room temperature
            •	 1 teaspoon pure vanilla extract
            •	 2 tablespoons whole milk
            •	 1/2 cup double cream
            •	 1 tablespoon icing sugar
            •	 1 tablespoon chopped maraschino cherries, plus whole for garnish
            </p>
            <h1>Method
            </h1>
            <p>
            Butter the inside of a 4-quart slow cooker insert. Line it completely with a double layer of foil, then butter the foil. Cut up 4 tablespoons of the butter and sprinkle in the bottom of the insert, along with the brown sugar and rum. Arrange the pineapple slices in overlapping circles to completely cover the bottom of the insert; press into the sugar mixture.
Combine the flour, pecans, baking powder, cinnamon, nutmeg and 1/2 teaspoon salt in a medium bowl.
Combine the remaining 6 tablespoons butter and the granulated sugar in the bowl of a stand mixer fitted with a paddle attachment (or in a large bowl if using a hand mixer) and beat on medium-high speed until light and fluffy, about 3 minutes. Scrape down the sides of the bowl and beat in the eggs and vanilla until incorporated.
Reduce the speed to low and beat in the flour mixture until just incorporated. Add the milk, increase the speed to medium-high and beat until smooth, about 30 seconds. Evenly spread the batter over the pineapples in the slow cooker.
Drape a double layer of paper towels over the top of the slow cooker (without touching the cake) to prevent condensation from dripping from the cover onto the cake. Cover and cook on low until a toothpick inserted in the center comes out clean, 3 to 4 hours. Turn off the slow cooker and let the cake rest for 20 minutes.
Lift the cake by the foil and place on a rack to cool (it can be served warm or at room temperature). Carefully invert onto a platter and peel off the foil.
Whip the cream until soft peaks form. Fold in the icing sugar and chopped cherries. Serve slices of cake with a dollop of whipped cream and a cherry on top.
Copyright 2013 Television Food Network, G.P. All rights reserved

            </p>',
            'thumbnailURL' => '/ecoal.jpg',
            'mediaType' => 'image',
            'mediaURL' => '/ecoal.jpg',
            'leadStory' => false
        ],
        [
            'title' => 'Crêpes : la meilleure recette rapide',
            'content' => '<h1>Hello from ecoal</h1><p>Nice to see you in <strong>Lens</strong>. Enjoy !</p>',
            'thumbnailURL' => '/ecoal.jpg',
            'mediaType' => 'image',
            'mediaURL' => '/ecoal.jpg',
            'leadStory' => false
        ],
        [
            'title' => 'Fluffy cod pastries, the traditional recipe',
            'content' => '<h1>Hello from ecoal</h1><p>Nice to see you in <strong>Lens</strong>. Enjoy !</p>',
            'thumbnailURL' => '/ecoal.jpg',
            'mediaType' => 'image',
            'mediaURL' => '/ecoal.jpg',
            'leadStory' => false
        ],
        [
            'title' => 'Pork spring roll with broccoli coleslaw',
            'content' => '<h1>Hello from ecoal</h1><p>Nice to see you in <strong>Lens</strong>. Enjoy !</p>',
            'thumbnailURL' => '/ecoal.jpg',
            'mediaType' => 'image',
            'mediaURL' => '/ecoal.jpg',
            'leadStory' => false
        ],
        [
            'title' => 'Beverage Consumption: Are Alcoholic and Sugary Drinks Tipping the Balance towards Overweight and Obesity?',
            'content' => '<h1>Hello from ecoal</h1><p>Nice to see you in <strong>Lens</strong>. Enjoy !</p>',
            'thumbnailURL' => '/ecoal.jpg',
            'mediaType' => 'image',
            'mediaURL' => '/ecoal.jpg',
            'leadStory' => false
        ],
    );
     
        $tag1 = Tag::create(['name' => 'ecoal23']);
        $tag2 = Tag::create(['name' => 'react']);

        $article->tags()->attach([$tag1->id, $tag2->id]);
       
    }
}
