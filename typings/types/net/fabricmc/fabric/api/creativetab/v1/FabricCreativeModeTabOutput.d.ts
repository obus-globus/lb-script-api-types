import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FeatureFlagSet } from '../../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { CreativeModeTab$ItemDisplayParameters } from '../../../../../../net/minecraft/world/item/CreativeModeTab$ItemDisplayParameters.d.ts'
import type { CreativeModeTab$Output } from '../../../../../../net/minecraft/world/item/CreativeModeTab$Output.d.ts'
import type { CreativeModeTab$TabVisibility } from '../../../../../../net/minecraft/world/item/CreativeModeTab$TabVisibility.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ItemLike } from '../../../../../../net/minecraft/world/level/ItemLike.d.ts'
export class FabricCreativeModeTabOutput extends Object implements CreativeModeTab$Output {
    constructor(arg0: CreativeModeTab$ItemDisplayParameters, arg1: ItemStack[], arg2: ItemStack[])
    readonly context: CreativeModeTab$ItemDisplayParameters;
    readonly displayStacks: ItemStack[];
    readonly searchTabStacks: ItemStack[];
    accept(stack: ItemStack): void;
    accept(arg0: ItemStack, arg1: CreativeModeTab$TabVisibility): void;
    accept(item: ItemLike): void;
    accept(item: ItemLike, tabVisibility: CreativeModeTab$TabVisibility): void;
    acceptAll(stacks: ItemStack[]): void;
    acceptAll(stacks: ItemStack[], tabVisibility: CreativeModeTab$TabVisibility): void;
    getContext(): CreativeModeTab$ItemDisplayParameters;
    getDisplayStacks(): ItemStack[];
    getEnabledFeatures(): FeatureFlagSet;
    // private getEnabledStacks(arg0: ItemStack[]): ItemStack[];
    getSearchTabStacks(): ItemStack[];
    insertAfter(arg0: (param0: ItemStack) => boolean, arg1: ItemStack[], arg2: CreativeModeTab$TabVisibility): void;
    insertAfter(arg0: ItemStack, arg1: ItemStack[]): void;
    insertAfter(arg0: ItemStack, arg1: ItemLike[]): void;
    insertAfter(arg0: ItemStack, arg1: ItemStack[], arg2: CreativeModeTab$TabVisibility): void;
    insertAfter(arg0: ItemLike, arg1: ItemStack[]): void;
    insertAfter(arg0: ItemLike, arg1: ItemLike[]): void;
    insertAfter(arg0: ItemLike, arg1: ItemStack[], arg2: CreativeModeTab$TabVisibility): void;
    insertBefore(arg0: (param0: ItemStack) => boolean, arg1: ItemStack[], arg2: CreativeModeTab$TabVisibility): void;
    insertBefore(arg0: ItemStack, arg1: ItemStack[]): void;
    insertBefore(arg0: ItemStack, arg1: ItemLike[]): void;
    insertBefore(arg0: ItemStack, arg1: ItemStack[], arg2: CreativeModeTab$TabVisibility): void;
    insertBefore(arg0: ItemLike, arg1: ItemStack[]): void;
    insertBefore(arg0: ItemLike, arg1: ItemLike[]): void;
    insertBefore(arg0: ItemLike, arg1: ItemStack[], arg2: CreativeModeTab$TabVisibility): void;
    // private isEnabled(arg0: ItemStack): boolean;
    prepend(arg0: ItemStack): void;
    prepend(arg0: ItemStack, arg1: CreativeModeTab$TabVisibility): void;
    prepend(arg0: ItemLike): void;
    prepend(arg0: ItemLike, arg1: CreativeModeTab$TabVisibility): void;
    shouldShowOpRestrictedItems(): boolean;
}