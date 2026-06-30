import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PlaneMask } from '../../../../../net/ccbluex/liquidbounce/utils/math/PlaneMask.d.ts'
export class FaceComponent extends Record {
    constructor(planeIndex: number, mask: PlaneMask)
    // private mask: PlaneMask;
    /*not mapped: */ mask(): PlaneMask;
    // private planeIndex: number;
    /*not mapped: */ planeIndex(): number;
    component1(): number;
    component2(): PlaneMask;
    copy(planeIndex: number, mask: PlaneMask): FaceComponent;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}