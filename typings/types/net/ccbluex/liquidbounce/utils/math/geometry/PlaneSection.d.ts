import type { DoubleDoublePair } from '../../../../../../it/unimi/dsi/fastutil/doubles/DoubleDoublePair.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class PlaneSection extends Object {
    constructor(originPoint: Vec3, dirVec1: Vec3, dirVec2: Vec3)
    readonly dirVec1: Vec3;
    readonly dirVec2: Vec3;
    readonly originPoint: Vec3;
    castPointsOnUniformly(maxPoints: number, consumer: Function1<Vec3, void>): void;
    getFairStepSide(nPoints: number): DoubleDoublePair;
}