import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ModuleNotifier$ItemConsumptionState extends Object {
    constructor(itemStack: ItemStack, useDuration: number, lastTicksUsingItem: number)
    /*not mapped: */ isComplete(): boolean;
    readonly itemStack: ItemStack;
    lastTicksUsingItem: number;
    readonly useDuration: number;
    component1(): ItemStack;
    component2(): number;
    component3(): number;
    copy(itemStack: ItemStack, useDuration: number, lastTicksUsingItem: number): ModuleNotifier$ItemConsumptionState;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}