import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StackedContents$IngredientInfo } from '../../../../../net/minecraft/world/entity/player/StackedContents$IngredientInfo.d.ts'
import type { StackedContents$Output } from '../../../../../net/minecraft/world/entity/player/StackedContents$Output.d.ts'
export class StackedContents<T extends unknown> extends Object {
    constructor()
    amounts: { [key: string]: any };
    account(item: T, count: number): void;
    clear(): void;
    getResultUpperBound(ingredients: (param0: T) => boolean[]): number;
    // private getUniqueAvailableIngredientItems(ingredients: (param0: T) => boolean[]): T[];
    // private hasAtLeast(item: T, count: number): boolean;
    // private put(item: T, count: number): void;
    // private take(item: T, amount: number): void;
    tryPick(ingredients: (param0: T) => boolean[], amount: number, output: (param0: T) => void): boolean;
    tryPickAll(ingredients: (param0: T) => boolean[], maxSize: number, output: (param0: T) => void): number;
}