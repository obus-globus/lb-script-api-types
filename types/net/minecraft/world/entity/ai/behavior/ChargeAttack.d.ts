import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
import type { TargetingConditions } from '../../../../../../net/minecraft/world/entity/ai/targeting/TargetingConditions.d.ts'
import type { Animal } from '../../../../../../net/minecraft/world/entity/animal/Animal.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ChargeAttack extends Behavior<Animal> {
    static DEFAULT_DURATION: number;
    constructor(timeBetweenAttacks: number, chargeTargeting: TargetingConditions, speed: number, knockbackForce: number, maxChargeDistance: number, maxTargetDetectionDistance: number, chargeSound: SoundEvent)
    // private chargeSound: SoundEvent;
    // private chargeTargeting: TargetingConditions;
    // private chargeVelocityVector: Vec3;
    // private knockbackForce: number;
    // private maxChargeDistance: number;
    // private maxTargetDetectionDistance: number;
    // private speed: number;
    // private startPosition: Vec3;
    // private timeBetweenAttacks: number;
    canStillUse(level: ServerLevel, body: Animal, timestamp: number): boolean;
    checkExtraStartConditions(level: ServerLevel, body: Animal): boolean;
    // private dealDamageToTarget(level: ServerLevel, body: Animal, target: LivingEntity): void;
    // private dealKnockBack(body: Animal, target: LivingEntity): void;
    start(level: ServerLevel, body: Animal, timestamp: number): void;
    stop(level: ServerLevel, body: Animal, timestamp: number): void;
    tick(level: ServerLevel, body: Animal, timestamp: number): void;
}