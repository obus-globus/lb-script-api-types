import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StackedContents$IngredientInfo } from '../../../../../net/minecraft/world/entity/player/StackedContents$IngredientInfo.d.ts'
import type { StackedContents$Output } from '../../../../../net/minecraft/world/entity/player/StackedContents$Output.d.ts'
export class StackedContents<T extends Object | number | string | boolean> extends Object {
    constructor()
    amounts: Reference2IntOpenHashMap<T>;
    account(item: T, count: number): void;
    clear(): void;
    getResultUpperBound(ingredients: (param0: T) => kotlin.Boolean[]): number;
    // private getUniqueAvailableIngredientItems(ingredients: (param0: T) => kotlin.Boolean[]): T[];
    // private hasAtLeast(item: T, count: number): boolean;
    // private put(item: T, count: number): void;
    // private take(item: T, amount: number): void;
    tryPick(ingredients: (param0: T) => kotlin.Boolean[], amount: number, output: (param0: T) => void): boolean;
    tryPickAll(ingredients: (param0: T) => kotlin.Boolean[], maxSize: number, output: (param0: T) => void): number;
}