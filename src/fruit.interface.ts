import { FruitsDto } from "./Fruits.dto";

export interface IFruit {
    get(): string[];
    create(fruit: FruitsDto): string;
}
