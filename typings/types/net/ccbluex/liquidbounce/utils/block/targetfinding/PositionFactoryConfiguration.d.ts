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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/FaceTargetPositionFactory.kt#L52 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/FaceTargetPositionFactory.kt:52}
     */
    /*not mapped: */ randomNumber(): number;
    component1(): Vec3;
    component2(): number;
    copy(eyePos: Vec3, randomNumber: number): PositionFactoryConfiguration;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}