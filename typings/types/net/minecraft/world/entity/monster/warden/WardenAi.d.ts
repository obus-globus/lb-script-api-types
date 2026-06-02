import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Brain } from '../../../../../../net/minecraft/world/entity/ai/Brain.d.ts'
import type { Warden } from '../../../../../../net/minecraft/world/entity/monster/warden/Warden.d.ts'
export class WardenAi extends Object {
    static DIGGING_COOLDOWN: number;
    static EMERGE_DURATION: number;
    static ROAR_DURATION: number;
    static setDigCooldown(parambody: LivingEntity): void;
    static setDisturbanceLocation(parambody: Warden, paramposition: BlockPos): void;
    static updateActivity(parambrain: Brain<Warden>): void;
    constructor()
}