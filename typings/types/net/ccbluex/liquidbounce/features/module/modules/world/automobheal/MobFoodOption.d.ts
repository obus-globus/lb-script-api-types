import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MobFoodOption$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/automobheal/MobFoodOption$Companion.d.ts'
import type { TagKey } from '../../../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { ToFloatFunction } from '../../../../../../../../net/minecraft/util/ToFloatFunction.d.ts'
import type { Item } from '../../../../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class MobFoodOption extends Record {
    static Companion: MobFoodOption$Companion;
    static foodNutritionHeal(stack: ItemStack, multiplier: number): number;
    static ofBucket(item: Item): MobFoodOption;
    constructor(test: (param0: ItemStack) => kotlin.Boolean, healAmount: (param0: ItemStack) => kotlin.Float, isBucket: boolean)
    constructor(tag: TagKey<Item>, healAmount: (param0: ItemStack) => kotlin.Float, isBucket: boolean)
    constructor(item: Item, healAmount: number, isBucket: boolean)
    constructor(item: Item, healAmount: (param0: ItemStack) => kotlin.Float, isBucket: boolean)
    // private healAmount: (param0: ItemStack) => kotlin.Float;
    /*not mapped: */ healAmount(): (param0: ItemStack) => kotlin.Float;
    // private isBucket: boolean;
    /*not mapped: */ isBucket(): boolean;
    // private test: (param0: ItemStack) => kotlin.Boolean;
    /*not mapped: */ test(): (param0: ItemStack) => kotlin.Boolean;
    component1(): (param0: ItemStack) => kotlin.Boolean;
    component2(): (param0: ItemStack) => kotlin.Float;
    component3(): boolean;
    copy(test: (param0: ItemStack) => kotlin.Boolean, healAmount: (param0: ItemStack) => kotlin.Float, isBucket: boolean): MobFoodOption;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}