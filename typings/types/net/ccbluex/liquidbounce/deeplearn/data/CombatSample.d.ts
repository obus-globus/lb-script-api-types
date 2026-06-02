import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CombatSample$Companion } from '../../../../../net/ccbluex/liquidbounce/deeplearn/data/CombatSample$Companion.d.ts'
import type { Rotation } from '../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { RotationDelta } from '../../../../../net/ccbluex/liquidbounce/utils/aiming/data/RotationDelta.d.ts'
import type { Vec2 } from '../../../../../net/minecraft/world/phys/Vec2.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class CombatSample extends Record {
    static AGE: string;
    static CURRENT_DIRECTION_VECTOR: string;
    static Companion: CombatSample$Companion;
    static DELTA_VECTOR: string;
    static DISTANCE: string;
    static HURT_TIME: string;
    static PREVIOUS_DIRECTION_VECTOR: string;
    static P_DIFF: string;
    static TARGET_DIRECTION_VECTOR: string;
    static T_DIFF: string;
    constructor(currentVector: Vec3, previousVector: Vec3, targetVector: Vec3, velocityDelta: Vec2, playerDiff: Vec3, targetDiff: Vec3, distance: number, hurtTime: number, age: number)
    // private age: number;
    /**
     * Age in this case is the Entity Age, however, we will use it later to determine
     * the time we have been tracking this entity.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/data/CombatSample.kt#L50 | src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/data/CombatSample.kt:50}
     */
    /*not mapped: */ age(): number;
    /*not mapped: */ asInput(): number[];
    /*not mapped: */ asOutput(): number[];
    /*not mapped: */ currentRotation(): Rotation;
    // private currentVector: Vec3;
    /*not mapped: */ currentVector(): Vec3;
    // private distance: number;
    /*not mapped: */ distance(): number;
    // private hurtTime: number;
    /*not mapped: */ hurtTime(): number;
    // private playerDiff: Vec3;
    /*not mapped: */ playerDiff(): Vec3;
    /*not mapped: */ previousRotation(): Rotation;
    // private previousVector: Vec3;
    /*not mapped: */ previousVector(): Vec3;
    /**
     * Velocity delta should be in a positive direction,
     * going from the previous rotation to the current rotation.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/data/CombatSample.kt#L72 | src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/data/CombatSample.kt:72}
     */
    /*not mapped: */ previousVelocityDelta(): RotationDelta;
    // private targetDiff: Vec3;
    /*not mapped: */ targetDiff(): Vec3;
    /*not mapped: */ targetRotation(): Rotation;
    // private targetVector: Vec3;
    /*not mapped: */ targetVector(): Vec3;
    /**
     * Total delta should be in a positive direction,
     * going from the current rotation to the target rotation.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/data/CombatSample.kt#L65 | src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/data/CombatSample.kt:65}
     */
    /*not mapped: */ totalDelta(): RotationDelta;
    // private velocityDelta: Vec2;
    /*not mapped: */ velocityDelta(): Vec2;
    component1(): Vec3;
    component2(): Vec3;
    component3(): Vec3;
    component4(): Vec2;
    component5(): Vec3;
    component6(): Vec3;
    component7(): number;
    component8(): number;
    component9(): number;
    copy(currentVector: Vec3, previousVector: Vec3, targetVector: Vec3, velocityDelta: Vec2, playerDiff: Vec3, targetDiff: Vec3, distance: number, hurtTime: number, age: number): CombatSample;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}