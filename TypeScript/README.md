# Gilded Rose

This code represents a refactored version of the existing Gilded Rose inventory management system implemented in TypeScript.

## Installation
To use this codebase, you need to have Node.js and npm installed on your system.

1. Clone the repository:

```bash
git clone <https://github.com/annatheodo/gildedRose-refactoring-kata.git>
```

2. Navigate to the project directory:

```bash
cd <gildedRose-refactoring-kata>
```

3. Switch to the "development" branch:

```bash
git checkout development
```

4. Install the project dependencies:

```bash
npm install
```

## Running app
1. Create a new file in the project directory (same level as the app directory) and name it index.ts.

2. In the **index.ts** file, import the necessary dependencies and instantiate an instance of the GildedRose class. Here's an example:

```sh
import { GildedRose } from './app/gilded-rose';
import { Item } from './app/item';

// Create sample items
const items: Item[] = [
  new Item('Normal Item', 10, 20),
  // Add more items as needed
];

// Instantiate GildedRose
const gildedRose = new GildedRose(items);

// Update the quality
gildedRose.updateQuality();

// Print the updated items
items.forEach((item) => {
  console.log(item.name, item.sellIn, item.quality);
});
```

3. Open a terminal or command prompt and navigate to the project directory. Run the following command to compile the TypeScript code into JavaScript:

```bash
npx tsc index.ts
```

4. After successful compilation, you should see a generated **index.js** file in the project directory. Run the following command to execute the JavaScript code:

```bash
node index.js
```

## Running tests

This codebase includes a set of tests written using the Jest testing framework. The tests ensure that the Gilded Rose application behaves correctly for different scenarios.

To run the tests,  execute the command:

```sh
npm run test:jest
```

To run all tests in watch mode

```sh
npm run test:jest:watch
```

