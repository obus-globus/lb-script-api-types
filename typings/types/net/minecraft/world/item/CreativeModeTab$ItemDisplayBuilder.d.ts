import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FeatureFlagSet } from '../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { CreativeModeTab } from '../../../../net/minecraft/world/item/CreativeModeTab.d.ts'
import type { CreativeModeTab$Output } from '../../../../net/minecraft/world/item/CreativeModeTab$Output.d.ts'
import type { CreativeModeTab$TabVisibility } from '../../../../net/minecraft/world/item/CreativeModeTab$TabVisibility.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ItemLike } from '../../../../net/minecraft/world/level/ItemLike.d.ts'
export class CreativeModeTab$ItemDisplayBuilder extends Object implements CreativeModeTab$Output {
    constructor(tab: CreativeModeTab, featureFlagSet: FeatureFlagSet)
    // private featureFlagSet: FeatureFlagSet;
    searchTabContents: ItemStack[];
    // private tab: CreativeModeTab;
    tabContents: E[];
    accept(stack: ItemStack, tabVisibility: CreativeModeTab$TabVisibility): void;
    accept(stack: ItemStack): void;
    accept(item: ItemLike): void;
    accept(item: ItemLike, tabVisibility: CreativeModeTab$TabVisibility): void;
    acceptAll(stacks: E[]): void;
    acceptAll(stacks: E[], tabVisibility: CreativeModeTab$TabVisibility): void;
}