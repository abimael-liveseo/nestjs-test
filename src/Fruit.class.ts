import { IFruit } from "./fruit.interface";
import { FruitsDto } from "./Fruits.dto";


export class Fruit implements IFruit {
    public fruits: string[];

    constructor() {
        this.fruits = ['banana', 'maça', 'laranja', 'abacate'];
    }

    get(): string[] {
        return this.fruits;    
    }

    create(fruit: FruitsDto): string {
        return this.fruits.find(item => item == fruit.name);
    }
}
