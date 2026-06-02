import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StackedContents$IngredientInfo } from '../../../../../net/minecraft/world/entity/player/StackedContents$IngredientInfo.d.ts'
import type { StackedContents$Output } from '../../../../../net/minecraft/world/entity/player/StackedContents$Output.d.ts'
export class StackedContents$RecipePicker extends Object {
    constructor(null_: StackedContents$RecipePicker)
    // private data: BitSet;
    // private ingredientCount: number;
    // private ingredients: (param0: T) => kotlin.Boolean[];
    // private itemCount: number;
    // private items: T[];
    // private path: (Object | null)[];
    // private assign(item: number, ingredient: number): void;
    // private clearAllVisited(): void;
    // private clearRange(offset: number, count: number): void;
    // private clearSatisfied(): void;
    // private connectionCount(): number;
    // private connectionOffset(): number;
    // private findNewItemAssignmentPath(startingItem: number): (Object | null)[];
    // private getConnectionIndex(item: number, ingredient: number): number;
    // private getResidualIndex(item: number, ingredient: number): number;
    // private getSatisfiedIndex(ingredient: number): number;
    // private getVisitedIngredientIndex(ingredient: number): number;
    // private getVisitiedItemIndex(item: number): number;
    // private hasConnection(item: number, ingredient: number): boolean;
    // private hasVisitedIngredient(ingredient: number): boolean;
    // private hasVisitedItem(item: number): boolean;
    // private isAssigned(item: number, ingredient: number): boolean;
    // private isSatisfied(ingredient: number): boolean;
    // private residualCount(): number;
    // private residualOffset(): number;
    // private satisfiedCount(): number;
    // private satisfiedOffset(): number;
    // private setConnection(item: number, ingredient: number): void;
    // private setInitialConnections(): void;
    // private setSatisfied(ingredient: number): void;
    // private tryAssigningNewItem(capacity: number): (Object | null)[];
    tryPick(capacity: number, output: (param0: T) => void): boolean;
    tryPickAll(maxSize: number, output: (param0: T) => void): number;
    // private unassign(item: number, ingredient: number): void;
    // private visitIngredient(item: number): void;
    // private visitItem(item: number): void;
    // private visitedIngredientCount(): number;
    // private visitedIngredientOffset(): number;
    // private visitedItemCount(): number;
    // private visitedItemOffset(): number;
}