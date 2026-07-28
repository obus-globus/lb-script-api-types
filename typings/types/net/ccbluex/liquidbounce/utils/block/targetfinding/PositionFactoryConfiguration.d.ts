import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class PositionFactoryConfiguration extends Record {
    constructor(eyePos: Vec3, randomNumber: number)
    // private eyePos: Vec3;
    /*not mapped: */ eyePos(): Vec3;
    // private randomNumber: number;
    /**
     * Random number [[-1;1]]. Can also be constant.
     * TODO: Wire this into point selection so aim modes can apply deterministic per-jump jitter.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a847f7e000c4d4be9b75e414d34b2481d6f08e17/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/FaceTargetPositionFactory.kt#L52 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/FaceTargetPositionFactory.kt:52}
     */
    /*not mapped: */ randomNumber(): number;
    component1(): Vec3;
    component2(): number;
    copy(eyePos: Vec3, randomNumber: number): PositionFactoryConfiguration;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}