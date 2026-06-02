import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { HotbarItemSlot } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { LivingEntity } from '../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class AutoMobHeal$HealPlan extends Object {
    constructor(target: LivingEntity, slot: HotbarItemSlot, distanceSq: number)
    readonly distanceSq: number;
    readonly slot: HotbarItemSlot;
    readonly target: LivingEntity;
    component1(): LivingEntity;
    component2(): HotbarItemSlot;
    component3(): number;
    copy(target: LivingEntity, slot: HotbarItemSlot, distanceSq: number): AutoMobHeal$HealPlan;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}