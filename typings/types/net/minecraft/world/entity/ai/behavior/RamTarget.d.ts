import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { UniformInt } from '../../../../../../net/minecraft/util/valueproviders/UniformInt.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
import type { TargetingConditions } from '../../../../../../net/minecraft/world/entity/ai/targeting/TargetingConditions.d.ts'
import type { Goat } from '../../../../../../net/minecraft/world/entity/animal/goat/Goat.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class RamTarget extends Behavior<Goat> {
    static DEFAULT_DURATION: number;
    static RAM_SPEED_FORCE_FACTOR: number;
    static TIME_OUT_DURATION: number;
    constructor(getTimeBetweenRams: (param0: Goat) => UniformInt, ramTargeting: TargetingConditions, speed: number, getKnockbackForce: (param0: Goat) => kotlin.Double, getImpactSound: (param0: Goat) => SoundEvent, getHornBreakSound: (param0: Goat) => SoundEvent)
    // private getHornBreakSound: (param0: Goat) => SoundEvent;
    // private getImpactSound: (param0: Goat) => SoundEvent;
    // private getKnockbackForce: (param0: Goat) => kotlin.Double;
    // private getTimeBetweenRams: (param0: Goat) => UniformInt;
    // private ramDirection: Vec3;
    // private ramTargeting: TargetingConditions;
    // private speed: number;
    canStillUse(level: ServerLevel, body: Goat, timestamp: number): boolean;
    checkExtraStartConditions(level: ServerLevel, body: Goat): boolean;
    finishRam(level: ServerLevel, body: Goat): void;
    // private hasRammedHornBreakingBlock(level: ServerLevel, body: Goat): boolean;
    start(level: ServerLevel, body: Goat, timestamp: number): void;
    tick(level: ServerLevel, body: Goat, timestamp: number): void;
}