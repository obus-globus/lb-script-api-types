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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/FaceTargetPositionFactory.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/FaceTargetPositionFactory.kt:48}
     */
    /*not mapped: */ randomNumber(): number;
    component1(): Vec3;
    component2(): number;
    copy(eyePos: Vec3, randomNumber: number): PositionFactoryConfiguration;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}