import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Rotation$Companion } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation$Companion.d.ts'
import type { RotationDelta } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/RotationDelta.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Quaternionf } from '../../../../../../org/joml/Quaternionf.d.ts'
export class Rotation extends Record {
    static Companion: Rotation$Companion;
    static ZERO: Rotation;
    static fromRotationVec(diffX: number, diffY: number, diffZ: number): Rotation;
    static fromRotationVec(lookVec: Vec3): Rotation;
    static lookingAt(point: Vec3, from: Vec3): Rotation;
    constructor(yaw: number, pitch: number, isNormalized: boolean)
    /*not mapped: */ directionVector(): Vec3;
    // private isNormalized: boolean;
    /*not mapped: */ isNormalized(): boolean;
    // private pitch: number;
    /*not mapped: */ pitch(): number;
    /*not mapped: */ xRot(): number;
    /*not mapped: */ yRot(): number;
    // private yaw: number;
    /*not mapped: */ yaw(): number;
    add(x: number, y: number): Rotation;
    /**
     * Calculates the angle between this and the other rotation.
     *
     * @returns angle in degrees
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/data/Rotation.kt#L109 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/data/Rotation.kt:109}
     */
    angleTo(other: Rotation): number;
    approximatelyEquals(other: Rotation, tolerance: number): boolean;
    component1(): number;
    component2(): number;
    component3(): boolean;
    copy(yaw: number, pitch: number, isNormalized: boolean): Rotation;
    equals(other: Object | null): boolean;
    hashCode(): number;
    /**
     * Interpolates this rotation towards {@link other} using the given {@link factor}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/data/Rotation.kt#L144 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/data/Rotation.kt:144}
     */
    interpolateTo(other: Rotation, factor: number): Rotation;
    /**
     * Fixes GCD and Modulo 360° at yaw
     *
     * @returns {@link Rotation} with fixed yaw and pitch
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/data/Rotation.kt#L81 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/data/Rotation.kt:81}
     */
    normalize(): Rotation;
    /**
     * Calculates what angles would need to be added to arrive at {@link other}.
     *
     * Wrapped 360°
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/data/Rotation.kt#L118 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/data/Rotation.kt:118}
     */
    rotationDeltaTo(other: Rotation): RotationDelta;
    toQuaternion(dest: Quaternionf): Quaternionf;
    toString(): string;
    /**
     * Calculates a new rotation that is closer to the {@link other} rotation by a limiting factor of
     * {@link horizontalFactor} and {@link verticalFactor}, which should be between 0 and 180 degrees.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/data/Rotation.kt#L129 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/data/Rotation.kt:129}
     */
    towardsLinear(other: Rotation, horizontalFactor: number, verticalFactor: number): Rotation;
}