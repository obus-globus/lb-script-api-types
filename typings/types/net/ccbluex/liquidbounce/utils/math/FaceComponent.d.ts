import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PlaneMask } from '../../../../../net/ccbluex/liquidbounce/utils/math/PlaneMask.d.ts'
export class FaceComponent extends Object {
    constructor(planeIndex: number, mask: PlaneMask)
    readonly mask: PlaneMask;
    readonly planeIndex: number;
    component1(): number;
    component2(): PlaneMask;
    copy(planeIndex: number, mask: PlaneMask): FaceComponent;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}