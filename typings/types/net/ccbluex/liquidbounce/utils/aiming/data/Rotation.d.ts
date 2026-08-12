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
    constructor(yaw: number, pitch: number, isNormalized?: boolean)
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
    component1(): number;
    component2(): number;
    component3(): boolean;
    copy(yaw: number, pitch: number, isNormalized: boolean): Rotation;
    /**
     * Calculates the great-circle angle between the two view directions.
     *
     * This intentionally ignores differences that do not change the forward vector, such as yaw
     * at a vertical pitch. Use {@link rotationDeltaLengthTo} for mouse movement, smoothing and rotation
     * state comparisons.
     *
     * @returns direction angle in degrees
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/data/Rotation.kt#L113 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/data/Rotation.kt:113}
     */
    directionAngleTo(other: Rotation): number;
    equals(other: Object | null): boolean;
    hashCode(): number;
    /**
     * Interpolates this rotation towards {@link other} using the given {@link factor}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/data/Rotation.kt#L162 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/data/Rotation.kt:162}
     */
    interpolateTo(other: Rotation, factor: number): Rotation;
    isDirectionCloseTo(other: Rotation, tolerance?: number): boolean;
    isRotationDeltaCloseTo(other: Rotation, tolerance?: number): boolean;
    /**
     * Fixes GCD and Modulo 360° at yaw
     *
     * @returns {@link Rotation} with fixed yaw and pitch
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/data/Rotation.kt#L81 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/data/Rotation.kt:81}
     */
    normalize(): Rotation;
    /**
     * Calculates the Euclidean length of the wrapped yaw/pitch control delta.
     *
     * Unlike {@link directionAngleTo}, this preserves yaw differences at vertical pitches and therefore
     * matches Minecraft's independent mouse, packet and movement rotation axes.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/data/Rotation.kt#L141 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/data/Rotation.kt:141}
     */
    rotationDeltaLengthTo(other: Rotation): number;
    /**
     * Calculates what angles would need to be added to arrive at {@link other}.
     *
     * Wrapped 360°
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/data/Rotation.kt#L128 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/data/Rotation.kt:128}
     */
    rotationDeltaTo(other: Rotation): RotationDelta;
    toQuaternion(dest?: Quaternionf): Quaternionf;
    toString(): string;
    /**
     * Calculates a new rotation that is closer to the {@link other} rotation by a limiting factor of
     * {@link horizontalFactor} and {@link verticalFactor}, which should be between 0 and 180 degrees.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/data/Rotation.kt#L147 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/data/Rotation.kt:147}
     */
    towardsLinear(other: Rotation, horizontalFactor: number, verticalFactor: number): Rotation;
}