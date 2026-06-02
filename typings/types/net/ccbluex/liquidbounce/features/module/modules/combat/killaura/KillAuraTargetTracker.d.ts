import type { TargetTracker } from '../../../../../../../../net/ccbluex/liquidbounce/utils/combat/TargetTracker.d.ts'
import type { LivingEntity } from '../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class KillAuraTargetTracker extends TargetTracker {
    static INSTANCE: KillAuraTargetTracker;
    // private ignoreShield: boolean;
    // private /*not mapped: */ getIgnoreShield(): boolean;
    validate(entity: LivingEntity): boolean;
    // private validateShield(entity: LivingEntity): boolean;
}