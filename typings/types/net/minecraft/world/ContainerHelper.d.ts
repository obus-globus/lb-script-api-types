import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ValueInput } from '../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
export class ContainerHelper extends Object {
    static TAG_ITEMS: string;
    static clearOrCountMatchingItems(paramcontainer: ItemStack[], parampredicate: (param0: ItemStack) => boolean, paramamountToRemove: number, paramcountingOnly: boolean): number;
    static clearOrCountMatchingItems(paramitemStack: ItemStack, parampredicate: (param0: ItemStack) => boolean, paramamountToRemove: number, paramcountingOnly: boolean): number;
    static loadAllItems(paraminput: ValueInput, paramitemStacks: ItemStack[]): void;
    static removeItem(paramitemStacks: ItemStack[], paramslot: number, paramcount: number): ItemStack;
    static saveAllItems(paramoutput: ValueOutput, paramitemStacks: ItemStack[]): void;
    static saveAllItems(paramoutput: ValueOutput, paramitemStacks: ItemStack[], paramalsoWhenEmpty: boolean): void;
    static takeItem(paramitemStacks: ItemStack[], paramslot: number): ItemStack;
    constructor()
}