import type { JavaMap } from '../../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { DoubleInterval } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/util/interval_tree/DoubleInterval.d.ts'
import type { SectionPos } from '../../../../../../../../../net/minecraft/core/SectionPos.d.ts'
import type { Vector3fc } from '../../../../../../../../../org/joml/Vector3fc.d.ts'
export class NormalPlanes extends Object {
    constructor(arg0: SectionPos, arg1: number)
    constructor(arg0: SectionPos, arg1: Vector3fc)
    // private alignedDirection: number;
    // private baseDistance: number;
    // private distanceRange: DoubleInterval;
    // private normal: Vector3fc;
    // private relDistanceHash: number;
    // private relativeDistances: number[];
    // private relativeDistancesSet: (Object | null)[];
    // private sectionPos: SectionPos;
    addPlaneMember(arg0: number): void;
    prepareAndInsert(arg0: JavaMap<Vector3fc, number[]>): void;
    prepareIntegration(): void;
}