import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
import type { GoAndGiveItemsToTarget$ItemThrower } from '../../../../../../net/minecraft/world/entity/ai/behavior/GoAndGiveItemsToTarget$ItemThrower.d.ts'
import type { PositionTracker } from '../../../../../../net/minecraft/world/entity/ai/behavior/PositionTracker.d.ts'
import type { InventoryCarrier } from '../../../../../../net/minecraft/world/entity/npc/InventoryCarrier.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class GoAndGiveItemsToTarget<E extends LivingEntity & InventoryCarrier> extends Behavior<E> {
    static DEFAULT_DURATION: number;
    constructor(targetPositionGetter: (param0: LivingEntity) => Optional<PositionTracker>, speedModifier: number, timeoutDuration: number, itemThrower: (param0: E, param1: ServerLevel, param2: Object | null, param3: ItemStack) => void)
    // private itemThrower: (param0: E, param1: ServerLevel, param2: Object | null, param3: ItemStack) => void;
    // private speedModifier: number;
    // private targetPositionGetter: (param0: LivingEntity) => Optional<PositionTracker>;
    // private throwVelocity: Vec3;
    canStillUse(level: ServerLevel, body: E, timestamp: number): boolean;
    // private canThrowItemToTarget(body: E): boolean;
    checkExtraStartConditions(level: ServerLevel, body: E): boolean;
    start(level: ServerLevel, body: E, timestamp: number): void;
    tick(level: ServerLevel, body: E, timestamp: number): void;
}