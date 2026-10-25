/**
 * RESTAURANT ISTANBUL DREUX — MENU DATABASE
 * 12 Categories conforming strictly to authentic offerings & verified prices.
 */

const menuDatabase = {
  "sandwichs": [
    {
      id: "sand-1",
      name: {
        fr: "Kebab Traditionnel (Pain Maison)",
        en: "Traditional Kebab (House Bread)"
      },
      desc: {
        fr: "Broche artisanale marinée, pain turc maison cuit au four, crudités fraîches et sauce au choix. Le menu comprend frites dorées et boisson 33 cl.",
        en: "Artisanal marinated spit-roasted meat in house-baked Turkish bread with fresh salad and choice of sauce. Menu includes golden fries and 33 cl beverage."
      },
      tag: { fr: "Incontournable", en: "House Classic" },
      pricing: { type: "dual", solo: "8,50 €", menu: "10,00 €" },
      img: "assets/images/dish-kebab.jpg"
    },
    {
      id: "sand-2",
      name: {
        fr: "Dürüm Kebab (Galette Roulée)",
        en: "Dürüm Kebab (Rolled Flatbread)"
      },
      desc: {
        fr: "Viande kebab marinée finement tranchée, roulée dans une galette moelleuse avec salade, tomates, oignons et sauce. Menu servi avec frites et boisson 33 cl.",
        en: "Tender sliced kebab meat rolled in warm flatbread with crisp lettuce, vine tomatoes, onions and sauce. Menu served with fries and 33 cl drink."
      },
      tag: { fr: "Spécialité Dürüm", en: "Dürüm Roll" },
      pricing: { type: "dual", solo: "8,50 €", menu: "10,00 €" },
      img: "assets/images/hero-sandwich.jpg"
    },
    {
      id: "sand-3",
      name: {
        fr: "Sandwich Américain",
        en: "American Steak Sandwich"
      },
      desc: {
        fr: "Steaks de bœuf hachés saisis à la plancha, fromage fondu, oignons grillés et crudités croquantes. Menu servi avec frites et boisson 33 cl.",
        en: "Seared seasoned minced beef patties, melted cheese, grilled caramelized onions and crisp salad. Menu served with fries and 33 cl drink."
      },
      tag: { fr: "Gourmand", en: "Steak Lover" },
      pricing: { type: "dual", solo: "8,50 €", menu: "10,00 €" },
      img: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sand-4",
      name: {
        fr: "Sandwich Köfte Maison",
        en: "Homemade Köfte Sandwich"
      },
      desc: {
        fr: "Boulettes artisanales de bœuf assaisonnées au cumin, persil plat et épices douces d'Orient. Menu servi avec frites et boisson 33 cl.",
        en: "Traditional spiced Turkish beef meatballs seasoned with cumin, fresh flat-leaf parsley and delicate spices. Menu served with fries and 33 cl drink."
      },
      tag: { fr: "Fait Maison", en: "Homemade" },
      pricing: { type: "dual", solo: "8,50 €", menu: "10,00 €" },
      img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sand-5",
      name: {
        fr: "Sandwich Poulet Mariné",
        en: "Marinated Chicken Sandwich"
      },
      desc: {
        fr: "Émincé de filets de poulet tendres marinés au paprika doux et herbes méditerranéennes. Menu servi avec frites et boisson 33 cl.",
        en: "Tender chicken breast fillets marinated in mild paprika and fragrant Mediterranean herbs. Menu served with fries and 33 cl drink."
      },
      tag: { fr: "Volaille Tendre", en: "Tender Poultry" },
      pricing: { type: "dual", solo: "8,50 €", menu: "10,00 €" },
      img: "assets/images/dish-poulet.jpg"
    },
    {
      id: "sand-6",
      name: {
        fr: "Sandwich Merguez",
        en: "Grilled Merguez Sandwich"
      },
      desc: {
        fr: "Véritables saucisses merguez de bœuf et agneau grillées à la flamme, sauce et crudités. Menu servi avec frites et boisson 33 cl.",
        en: "Flame-grilled spiced beef and lamb merguez sausages with fresh crisp salad and house sauce. Menu served with fries and 33 cl drink."
      },
      tag: { fr: "Grillé à la flamme", en: "Flame Grilled" },
      pricing: { type: "dual", solo: "8,50 €", menu: "10,00 €" },
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
    }
  ],

  "panini": [
    {
      id: "pan-1",
      name: {
        fr: "Panini Poulet",
        en: "Chicken Panini"
      },
      desc: {
        fr: "Filet de poulet mariné et émincé, fromage emmental fondant, pressé à chaud dans un pain ciabatta croustillant.",
        en: "Seasoned marinated chicken breast and melted Emmental cheese toasted hot in crisp artisan ciabatta bread."
      },
      tag: { fr: "Classique", en: "Classic" },
      pricing: { type: "dual", solo: "6,50 €", menu: "8,00 €" },
      img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pan-2",
      name: {
        fr: "Panini Steak",
        en: "Steak Panini"
      },
      desc: {
        fr: "Steak de bœuf haché assaisonné, fromage fondu coulant, toasté à cœur avec herbes.",
        en: "Seasoned ground beef steak with rich melted cheese pressed to golden perfection."
      },
      tag: { fr: "Bœuf Saisi", en: "Seared Beef" },
      pricing: { type: "dual", solo: "6,50 €", menu: "8,00 €" },
      img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pan-3",
      name: {
        fr: "Panini Fromage",
        en: "Three Cheese Panini"
      },
      desc: {
        fr: "Généreuse garniture de fromages fondants emmental et cheddar sur pain croustillant chaud.",
        en: "Warm crisp sandwich filled with a generous combination of melted Emmental and creamy Cheddar."
      },
      tag: { fr: "Végétarien", en: "Vegetarian" },
      pricing: { type: "dual", solo: "6,00 €", menu: "7,50 €" },
      img: "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pan-4",
      name: {
        fr: "Panini Kebab",
        en: "Kebab Panini"
      },
      desc: {
        fr: "Tranches savoureuses de viande kebab artisanale et fromage fondant pressés à chaud.",
        en: "Artisanal kebab meat slices paired with rich melted cheese, toasted hot and crunchy."
      },
      tag: { fr: "Spécialité Maison", en: "House Special" },
      pricing: { type: "dual", solo: "6,50 €", menu: "8,00 €" },
      img: "assets/images/hero-sandwich.jpg"
    }
  ],

  "crudites": [
    {
      id: "crud-1",
      name: {
        fr: "Pain Crudités",
        en: "Fresh Veggie Turkish Bread"
      },
      desc: {
        fr: "Pain turc maison cuit au four, généreusement garni de salade verte, tomates fraîches, concombres, oignons rouges, maïs et sauce au choix.",
        en: "Freshly baked Turkish bread loaded with crisp lettuce, ripe tomatoes, cucumbers, red onions, sweet corn and choice of dressing."
      },
      tag: { fr: "Fraîcheur du Jour", en: "Daily Fresh" },
      pricing: { type: "dual", solo: "4,50 €", menu: "6,00 €" },
      img: "assets/images/gallery-bread.jpg"
    },
    {
      id: "crud-2",
      name: {
        fr: "Galette Crudités",
        en: "Fresh Veggie Wrap"
      },
      desc: {
        fr: "Galette fine et légère roulée avec assortiment complet de légumes croquants du jour et sauce blanche.",
        en: "Light thin wrap rolled with a colorful garden mix of fresh crisp vegetables and house white sauce."
      },
      tag: { fr: "Léger & Croquant", en: "Crisp & Light" },
      pricing: { type: "dual", solo: "4,50 €", menu: "6,00 €" },
      img: "assets/images/gallery-mezze.jpg"
    }
  ],

  "barquettes-frites": [
    {
      id: "frit-1",
      name: {
        fr: "Petite Barquette de Frites",
        en: "Small Golden Fries"
      },
      desc: {
        fr: "Frites dorées croustillantes à l'extérieur et moelleuses à cœur, salées à point.",
        en: "Crispy golden French fries, lightly salted and served piping hot."
      },
      tag: { fr: "Individuel", en: "Single Serving" },
      pricing: { type: "single", price: "3,00 €" },
      img: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "frit-2",
      name: {
        fr: "Moyenne Barquette de Frites",
        en: "Medium Golden Fries"
      },
      desc: {
        fr: "Portion généreuse de frites croustillantes pour accompagner vos sandwichs ou viandes.",
        en: "Substantial serving of golden fries to accompany your meal."
      },
      tag: { fr: "Généreux", en: "Generous" },
      pricing: { type: "single", price: "4,00 €" },
      img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "frit-3",
      name: {
        fr: "Grande Barquette de Frites",
        en: "Large Golden Fries"
      },
      desc: {
        fr: "Très grande portion familiale de frites croustillantes à partager entre convives.",
        en: "Extra-large family-size basket of golden fries ideal for sharing."
      },
      tag: { fr: "À Partager", en: "To Share" },
      pricing: { type: "single", price: "5,00 €" },
      img: "https://images.unsplash.com/photo-1518013034458-30b0ee243591?auto=format&fit=crop&w=600&q=80"
    }
  ],

  "barquettes-viande": [
    {
      id: "v-1",
      name: {
        fr: "Petite Barquette de Viande Kebab",
        en: "Small Kebab Meat Tray"
      },
      desc: {
        fr: "Délicieuse viande de kebab artisanale marinée et tranchée à la broche, servie sans féculents.",
        en: "Artisanal marinated kebab meat carved fresh from the spit, served pure without carbs."
      },
      tag: { fr: "Broche Maison", en: "House Spit" },
      pricing: { type: "single", price: "7,00 €" },
      img: "assets/images/hero-doner.jpg"
    },
    {
      id: "v-2",
      name: {
        fr: "Moyenne Barquette de Viande Kebab",
        en: "Medium Kebab Meat Tray"
      },
      desc: {
        fr: "Portion généreuse de viande de kebab tranchée finement, parfumée aux épices douces.",
        en: "Substantial portion of thinly sliced spiced kebab meat."
      },
      tag: { fr: "Saveur Pure", en: "Pure Meat" },
      pricing: { type: "single", price: "9,00 €" },
      img: "assets/images/dish-kebab.jpg"
    },
    {
      id: "v-3",
      name: {
        fr: "Grande Barquette de Viande Kebab",
        en: "Large Kebab Meat Tray"
      },
      desc: {
        fr: "Grande barquette de viande kebab pour les amateurs de grillades authentiques ou à partager.",
        en: "Large platter of tender seasoned spit-roasted kebab meat for big appetites or sharing."
      },
      tag: { fr: "Format Maxi", en: "Maxi Portion" },
      pricing: { type: "single", price: "12,00 €" },
      img: "assets/images/hero-grill.jpg"
    }
  ],

  "assiettes": [
    {
      id: "ass-1",
      name: {
        fr: "Assiette Kebab",
        en: "Kebab Meat Platter"
      },
      desc: {
        fr: "Généreuse portion de viande kebab artisanale marinée, accompagnée de frites dorées, boulgour turc parfumé, riz maison et crudités fraîches.",
        en: "Generous serving of house spit-roasted kebab meat, accompanied by golden fries, fragrant Turkish bulgur, seasoned rice and garden salad."
      },
      tag: { fr: "Le Grand Classique", en: "House Classic" },
      pricing: { type: "single", price: "13,00 €" },
      extraNote: {
        fr: "Frites, boulgour et riz inclus",
        en: "Fries, bulgur and rice included"
      },
      img: "assets/images/hero-doner.jpg"
    },
    {
      id: "ass-2",
      name: {
        fr: "Assiette Brochette d'Agneau",
        en: "Lamb Skewer Platter"
      },
      desc: {
        fr: "Tendres morceaux d'agneau mariné enfilés sur broche et saisis à la braise. Servie avec frites, boulgour, riz et crudités.",
        en: "Tender skewered pieces of marinated lamb grilled over charcoal. Served with golden fries, Turkish bulgur, rice and fresh salad."
      },
      tag: { fr: "Grillade Noble", en: "Charcoal Grilled" },
      pricing: { type: "single", price: "15,00 €" },
      extraNote: {
        fr: "Frites, boulgour et riz inclus",
        en: "Fries, bulgur and rice included"
      },
      img: "assets/images/dish-agneau.jpg"
    },
    {
      id: "ass-3",
      name: {
        fr: "Assiette Köfte Grillé",
        en: "Grilled Köfte Platter"
      },
      desc: {
        fr: "Boulettes artisanales de bœuf haché aux herbes fraîches et épices d'Orient grillées au feu. Servie avec frites, boulgour, riz et salade.",
        en: "Traditional spiced Turkish minced beef patties seared over open fire. Served with fries, bulgur, rice and fresh salad."
      },
      tag: { fr: "Fait Maison", en: "Homemade" },
      pricing: { type: "single", price: "13,00 €" },
      extraNote: {
        fr: "Frites, boulgour et riz inclus",
        en: "Fries, bulgur and rice included"
      },
      img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ass-4",
      name: {
        fr: "Assiette Poulet Mariné",
        en: "Marinated Chicken Platter"
      },
      desc: {
        fr: "Blancs de poulet tendres et juteux marinés aux épices douces et saisis à la plancha. Servie avec frites, boulgour, riz et crudités.",
        en: "Tender and juicy chicken breast fillets marinated in mild Mediterranean spices. Served with fries, bulgur, rice and salad."
      },
      tag: { fr: "Volaille Tendre", en: "Tender Poultry" },
      pricing: { type: "single", price: "13,00 €" },
      extraNote: {
        fr: "Frites, boulgour et riz inclus",
        en: "Fries, bulgur and rice included"
      },
      img: "assets/images/dish-poulet.jpg"
    },
    {
      id: "ass-5",
      name: {
        fr: "Assiette Côtelettes d'Agneau (Pirzola)",
        en: "Lamb Chops Platter (Pirzola)"
      },
      desc: {
        fr: "Côtelettes d'agneau de première qualité marinées au romarin et thym, grillées à la flamme. Servie avec frites, boulgour, riz et crudités.",
        en: "Prime lamb cutlets marinated in fragrant thyme and rosemary, grilled to perfection over flame. Served with fries, bulgur, rice and salad."
      },
      tag: { fr: "Spécialité d'Anatolie", en: "Chef Signature" },
      pricing: { type: "single", price: "16,00 €" },
      extraNote: {
        fr: "Frites, boulgour et riz inclus",
        en: "Fries, bulgur and rice included"
      },
      img: "assets/images/dish-agneau.jpg"
    },
    {
      id: "ass-6",
      name: {
        fr: "Assiette Royale Mixte (Festin Istanbul)",
        en: "Royal Mixed Grill Platter (Istanbul Feast)"
      },
      desc: {
        fr: "L'expérience suprême réunissant côtelette d'agneau, brochette köfte, viande kebab et poulet mariné. Servie avec frites, boulgour, riz et crudités.",
        en: "The ultimate mixed feast bringing together grilled lamb chop, artisanal köfte, spit kebab and marinated chicken with all sides."
      },
      tag: { fr: "Festin Prestige", en: "Prestige Feast" },
      pricing: { type: "single", price: "18,00 €" },
      extraNote: {
        fr: "Frites, boulgour et riz inclus",
        en: "Fries, bulgur and rice included"
      },
      img: "assets/images/hero-grill.jpg"
    },
    {
      id: "ass-7",
      name: {
        fr: "Assiette Steak Haché",
        en: "Minced Beef Steak Platter"
      },
      desc: {
        fr: "Deux steaks de bœuf hachés saisis à point sur le grill avec oignons dorés. Servie avec frites, boulgour, riz et crudités.",
        en: "Two seared pure beef patties grilled to order with caramelized onions. Served with golden fries, bulgur, rice and salad."
      },
      tag: { fr: "Simple & Bon", en: "Classic Beef" },
      pricing: { type: "single", price: "12,00 €" },
      extraNote: {
        fr: "Frites, boulgour et riz inclus",
        en: "Fries, bulgur and rice included"
      },
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ass-8",
      name: {
        fr: "Assiette Merguez Grillée",
        en: "Grilled Merguez Platter"
      },
      desc: {
        fr: "Véritables saucisses merguez de bœuf et agneau relevées et grillées à la flamme. Servie avec frites, boulgour, riz et salade.",
        en: "Authentic spiced beef and lamb merguez sausages flame grilled until juicy and charred. Served with fries, bulgur, rice and salad."
      },
      tag: { fr: "Épicé & Parfumé", en: "Spicy & Rich" },
      pricing: { type: "single", price: "12,00 €" },
      extraNote: {
        fr: "Frites, boulgour et riz inclus",
        en: "Fries, bulgur and rice included"
      },
      img: "assets/images/gallery-grill.jpg"
    }
  ],

  "lahmacun": [
    {
      id: "lahm-1",
      name: {
        fr: "Lahmacun Traditionnel",
        en: "Traditional Lahmacun"
      },
      desc: {
        fr: "Fine galette anatolienne croustillante garnie d'un hachis de viande de bœuf assaisonné aux poivrons rouges, tomates mûres, persil et épices orientales.",
        en: "Crisp thin Anatolian flatbread baked with a savory minced beef topping, red peppers, sun-ripened tomatoes, flat-leaf parsley and mild spices."
      },
      tag: { fr: "Cuisson Minute", en: "Hearth Baked" },
      pricing: { type: "single", price: "4,50 €" },
      img: "assets/images/dish-lahmacun.jpg"
    },
    {
      id: "lahm-2",
      name: {
        fr: "Lahmacun Spécial Kebab (Roulé)",
        en: "Special Kebab Stuffed Lahmacun (Rolled)"
      },
      desc: {
        fr: "Lahmacun croustillant garni à la minute de viande de kebab dorée, salade, tomates, oignons et filet de jus de citron, roulé comme un wrap gourmand.",
        en: "Crispy lahmacun generously stuffed with carved kebab meat, fresh garden salad and a squeeze of fresh lemon, rolled wrap-style."
      },
      tag: { fr: "Spécialité Maison", en: "House Signature" },
      pricing: { type: "single", price: "8,50 €" },
      img: "assets/images/dish-lahmacun.jpg"
    }
  ],

  "salades": [
    {
      id: "sal-1",
      name: {
        fr: "Salade Mixte du Chef",
        en: "Chef's Garden Mixed Salad"
      },
      desc: {
        fr: "Salade verte croquante, tomates mûres, concombres, oignons rouges émincés, maïs doux, olives kalamata et vinaigrette maison à la grenade.",
        en: "Crisp green lettuce, ripe tomatoes, cucumbers, red onions, sweet corn, olives and signature pomegranate vinaigrette."
      },
      tag: { fr: "Légère & Fraîche", en: "Light & Fresh" },
      pricing: { type: "single", price: "6,50 €" },
      img: "assets/images/gallery-mezze.jpg"
    },
    {
      id: "sal-2",
      name: {
        fr: "Salade Poulet Grillé",
        en: "Grilled Chicken Salad"
      },
      desc: {
        fr: "Émincé de filet de poulet mariné tiède posé sur lit de salade croquante, tomates cerises, concombres et sauce blanche légère.",
        en: "Warm seasoned chicken breast strips served over crisp lettuce, cherry tomatoes, cucumbers and light garlic herb dressing."
      },
      tag: { fr: "Protéinée", en: "Protein Rich" },
      pricing: { type: "single", price: "8,50 €" },
      img: "assets/images/dish-poulet.jpg"
    },
    {
      id: "sal-3",
      name: {
        fr: "Salade Kebab",
        en: "Warm Kebab Salad"
      },
      desc: {
        fr: "Généreuse portion de viande kebab artisanale tranchée sur lit de salade verte, tomates fraîches, oignons rouges et sauce au choix.",
        en: "Generous serving of spit-roasted kebab meat on crisp romaine lettuce, ripe tomatoes, red onions and choice of sauce."
      },
      tag: { fr: "Gourmande", en: "Hearty Salad" },
      pricing: { type: "single", price: "8,50 €" },
      img: "assets/images/hero-sandwich.jpg"
    },
    {
      id: "sal-4",
      name: {
        fr: "Salade Feta & Olives",
        en: "Feta & Mediterranean Olive Salad"
      },
      desc: {
        fr: "Dés de véritable fromage feta méditerranéen, tomates fraîches, concombres, olives noires, origan et huile d'olive vierge extra.",
        en: "Creamy cubes of Greek feta cheese, ripe vine tomatoes, crisp cucumber, kalamata olives, wild oregano and extra virgin olive oil."
      },
      tag: { fr: "Méditerranée", en: "Mediterranean" },
      pricing: { type: "single", price: "7,00 €" },
      img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    }
  ],

  "desserts": [
    {
      id: "des-1",
      name: {
        fr: "Baklava Traditionnel aux Pistaches",
        en: "Traditional Pistachio Baklava"
      },
      desc: {
        fr: "Fines feuilles de pâte filo pur beurre croustillantes, garnies de pistaches fraîches d'Anatolie concassées et nappées de miel délicat.",
        en: "Crisp delicate layers of pure butter filo pastry filled with fragrant crushed Turkish pistachios and soaked in blossom honey syrup."
      },
      tag: { fr: "Tradition Turque", en: "Turkish Heritage" },
      pricing: { type: "single", price: "3,50 €" },
      img: "assets/images/dish-baklava.jpg"
    },
    {
      id: "des-2",
      name: {
        fr: "Tiramisu Maison Gourmand",
        en: "Homemade Mascarpone Tiramisu"
      },
      desc: {
        fr: "Crème onctueuse au mascarpone, biscuits imbibés d'un café doux et saupoudrés de cacao amer de qualité.",
        en: "Velvety mascarpone cream, delicate coffee-soaked sponge biscuits and a dusting of dark Dutch cocoa powder."
      },
      tag: { fr: "Douceur Maison", en: "House Favorite" },
      pricing: { type: "single", price: "3,50 €" },
      img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "des-3",
      name: {
        fr: "Riz au Lait Traditionnel (Sütlaç)",
        en: "Traditional Oven-Baked Rice Pudding (Sütlaç)"
      },
      desc: {
        fr: "Riz au lait onctueux parfumé à la vanille naturelle, doré délicatement au four selon la recette anatolienne ancestrale.",
        en: "Creamy slow-cooked vanilla rice pudding gently caramelized on top in the hearth according to authentic Turkish tradition."
      },
      tag: { fr: "Spécialité Four", en: "Oven Baked" },
      pricing: { type: "single", price: "3,50 €" },
      img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "des-4",
      name: {
        fr: "Tarte au Caramel Daim",
        en: "Crunchy Daim Caramel Tart"
      },
      desc: {
        fr: "Délicieuse tarte croustillante aux éclats d'amandes caramélisées, caramel fondant et chocolat au lait.",
        en: "Crunchy tart crust layered with sweet caramel fudge, crispy almond Daim bits and creamy milk chocolate."
      },
      tag: { fr: "Croustillant", en: "Crunchy Caramel" },
      pricing: { type: "single", price: "3,50 €" },
      img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80"
    }
  ],

  "boissons": [
    {
      id: "boi-coca",
      name: {
        fr: "Coca-Cola Original (Canette 33 cl)",
        en: "Coca-Cola Original (33 cl Can)"
      },
      desc: {
        fr: "La saveur légendaire servie bien fraîche pour sublimer votre repas.",
        en: "Classic chilled refreshing Coca-Cola soda served ice cold."
      },
      tag: { fr: "Fraîcheur", en: "Chilled" },
      pricing: { type: "single", price: "1,50 €" },
      img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "boi-zero",
      name: {
        fr: "Coca-Cola Zéro (Canette 33 cl)",
        en: "Coca-Cola Zero (33 cl Can)"
      },
      desc: {
        fr: "Toute la saveur authentique de Coca-Cola avec zéro sucres et zéro calories.",
        en: "Great authentic Coca-Cola taste with zero sugar and zero calories."
      },
      tag: { fr: "Sans Sucre", en: "Sugar Free" },
      pricing: { type: "single", price: "1,50 €" },
      img: "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "boi-7up",
      name: {
        fr: "7 Up Citron & Lime (Canette 33 cl)",
        en: "7 Up Lemon & Lime (33 cl Can)"
      },
      desc: {
        fr: "Boisson gazeuse pétillante et rafraîchissante aux arômes naturels d'agrumes.",
        en: "Crisp and sparkling lemon-lime flavored soft drink served ice-cold."
      },
      tag: { fr: "Agrumes Pétillants", en: "Crisp Citrus" },
      pricing: { type: "single", price: "1,50 €" },
      img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "boi-fanta",
      name: {
        fr: "Fanta Orange (Canette 33 cl)",
        en: "Fanta Orange (33 cl Can)"
      },
      desc: {
        fr: "Boisson pétillante fruitée au goût gourmand d'orange gorgée de soleil.",
        en: "Deliciously vibrant orange fruit-flavored soda with lively bubbles."
      },
      tag: { fr: "Fruité & Pétillant", en: "Fruity Orange" },
      pricing: { type: "single", price: "1,50 €" },
      img: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "boi-ayran",
      name: {
        fr: "Ayran Traditionnel Turc (25 cl)",
        en: "Traditional Turkish Ayran (25 cl)"
      },
      desc: {
        fr: "La boisson nationale turque rafraîchissante à base de yaourt battu, eau et légère pointe de sel. Parfaite avec les grillades.",
        en: "Authentic Turkish chilled yogurt beverage with water and a pinch of salt. The traditional companion for kebabs and grilled meats."
      },
      tag: { fr: "Tradition Turque", en: "Turkish Classic" },
      pricing: { type: "single", price: "1,50 €" },
      img: "https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "boi-the",
      name: {
        fr: "Thé Traditionnel Turc (Çay)",
        en: "Authentic Turkish Black Tea (Çay)"
      },
      desc: {
        fr: "Thé noir corsé et aromatique infusé lentement au semovar selon la tradition et servi chaud dans son verre tulipe.",
        en: "Robust, fragrant Turkish black tea brewed fresh in traditional double samovar pots and served hot in a signature tulip glass."
      },
      tag: { fr: "Infusé au Semovar", en: "Freshly Brewed" },
      pricing: { type: "single", price: "1,50 €" },
      img: "assets/images/gallery-tea.jpg"
    },
    {
      id: "boi-eau",
      name: {
        fr: "Eau Minérale Cristaline 50 cl",
        en: "Still Mineral Water Cristaline 50 cl"
      },
      desc: {
        fr: "Bouteille d'eau de source pure et fraîche.",
        en: "Bottle of pure, crisp natural spring water."
      },
      tag: { fr: "Eau Pure", en: "Spring Water" },
      pricing: { type: "single", price: "1,00 €" },
      img: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "boi-sanpel",
      name: {
        fr: "San Pellegrino 50 cl",
        en: "San Pellegrino Sparkling 50 cl"
      },
      desc: {
        fr: "Eau minérale naturelle gazeuse aux fines bulles rafraîchissantes.",
        en: "Gently sparkling natural mineral water from Italian springs."
      },
      tag: { fr: "Pétillante", en: "Sparkling" },
      pricing: { type: "single", price: "2,00 €" },
      img: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "boi-redbull",
      name: {
        fr: "Red Bull Energy Drink 25 cl",
        en: "Red Bull Energy Drink 25 cl"
      },
      desc: {
        fr: "Canette fraîche de boisson énergisante Red Bull 25 cl.",
        en: "Chilled can of energizing Red Bull 25 cl."
      },
      tag: { fr: "Énergie", en: "Energy" },
      pricing: { type: "single", price: "3,00 €" },
      img: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80"
    }
  ],

  "menu-enfant": [
    {
      id: "enf-1",
      name: {
        fr: "Menu Enfant (Midi Uniquement)",
        en: "Kids Special Menu (Lunch Only)"
      },
      desc: {
        fr: "Formule adaptée aux plus jeunes : sandwich au choix (kebab, steak ou poulet) accompagné d'une petite barquette de frites dorées et d'une boisson fraîche (Capri-Sun ou canette 33 cl). Servi uniquement le midi.",
        en: "Special combo designed for children: sandwich of choice (kebab, beef patty or chicken), served with small golden fries and a chilled soft drink or Capri-Sun. Available for lunch only."
      },
      tag: { fr: "Uniquement le Midi", en: "Lunch Only" },
      pricing: { type: "single", price: "9,00 €" },
      extraNote: {
        fr: "Sandwich au choix + petite frite + boisson fraîche",
        en: "Sandwich of choice + small fries + chilled drink"
      },
      img: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=600&q=80"
    }
  ],

  "supplements": [
    {
      id: "sup-1",
      name: {
        fr: "Supplément Fromage",
        en: "Extra Cheese"
      },
      desc: {
        fr: "Tranche d'emmental ou cheddar fondant supplémentaire pour garnir généreusement vos sandwichs, paninis ou galettes.",
        en: "Extra slice of melted Emmental or Cheddar cheese to enhance your sandwich or panini."
      },
      tag: { fr: "Gourmandise", en: "Extra Melt" },
      pricing: { type: "single", price: "+0,50 €" },
      img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sup-2",
      name: {
        fr: "Supplément Frites dans le Sandwich",
        en: "Extra Fries in Sandwich"
      },
      desc: {
        fr: "Portion de frites dorées croustillantes ajoutée directement au cœur de votre sandwich ou galette.",
        en: "Extra portion of crispy golden fries loaded directly inside your sandwich or wrap."
      },
      tag: { fr: "Croustillant", en: "Crispy" },
      pricing: { type: "single", price: "+0,50 €" },
      img: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sup-3",
      name: {
        fr: "Supplément Portion de Viande",
        en: "Extra Meat Portion"
      },
      desc: {
        fr: "Généreuse portion de viande kebab, poulet ou köfte supplémentaire pour les très gros appétits.",
        en: "Substantial additional serving of seasoned kebab, chicken or köfte meat for extra big appetites."
      },
      tag: { fr: "Portion Renforcée", en: "Double Meat" },
      pricing: { type: "single", price: "+1,00 €" },
      img: "assets/images/hero-doner.jpg"
    },
    {
      id: "sup-4",
      name: {
        fr: "Supplément Assiette Mixte (Viande Supplémentaire)",
        en: "Mixed Meat Plate Supplement (Extra Meat)"
      },
      desc: {
        fr: "Composez votre assiette sur-mesure en ajoutant une viande supplémentaire au choix (brochette agneau, côtelette, steak ou poulet).",
        en: "Customize your feast by adding a supplementary premium grilled meat of choice (lamb skewer, chop, steak or chicken)."
      },
      tag: { fr: "Sur vos Assiettes", en: "For Platters" },
      pricing: { type: "single", price: "+3,00 €" },
      img: "assets/images/dish-agneau.jpg"
    }
  ]
};
