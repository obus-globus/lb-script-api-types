import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MobFoodOption } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/automobheal/MobFoodOption.d.ts'
import type { HotbarItemSlot } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
export class AutoMobHeal$FoodCandidate extends Object {
    constructor(slot: HotbarItemSlot, option: MobFoodOption, healAmount: number)
    readonly healAmount: number;
    readonly option: MobFoodOption;
    readonly slot: HotbarItemSlot;
    component1(): HotbarItemSlot;
    component2(): MobFoodOption;
    component3(): number;
    copy(slot: HotbarItemSlot, option: MobFoodOption, healAmount: number): AutoMobHeal$FoodCandidate;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}