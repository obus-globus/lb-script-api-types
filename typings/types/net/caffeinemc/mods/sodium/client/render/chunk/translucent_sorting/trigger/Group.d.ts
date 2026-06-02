import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { NormalPlanes } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger/NormalPlanes.d.ts'
import type { SortTriggering } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger/SortTriggering.d.ts'
import type { DoubleInterval } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/util/interval_tree/DoubleInterval.d.ts'
import type { Vector3fc } from '../../../../../../../../../org/joml/Vector3fc.d.ts'
export class Group extends Object {
    constructor(arg0: NormalPlanes)
    // private baseDistance: number;
    // private distances: DoubleInterval;
    // private facePlaneDistances: number[];
    // private normal: Vector3fc;
    // private relDistanceHash: number;
    // private sectionPos: number;
    normalPlanesEquals(arg0: NormalPlanes): boolean;
    // private planeTriggered(arg0: number, arg1: number): boolean;
    replaceWith(arg0: NormalPlanes): void;
    triggerRange(arg0: SortTriggering, arg1: number, arg2: number): void;
}