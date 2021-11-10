import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 30, -15, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("bXHyyA");
charactersCollection.sort();
console.log(charactersCollection.data);

const ll = new LinkedList();
ll.add(-5);
ll.add(-9);
ll.add(10);
ll.add(2);

ll.sort();
ll.print();
