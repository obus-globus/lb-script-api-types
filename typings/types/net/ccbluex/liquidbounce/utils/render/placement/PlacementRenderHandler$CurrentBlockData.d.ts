import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PlacementRenderHandler$InOutBlockData } from '../../../../../../net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderHandler$InOutBlockData.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
export class PlacementRenderHandler$CurrentBlockData extends Record {
    constructor(cullData: number, box: AABB)
    // private box: AABB;
    /*not mapped: */ box(): AABB;
    // private cullData: number;
    /*not mapped: */ cullData(): number;
    component1(): number;
    component2(): AABB;
    copy(cullData: number, box: AABB): PlacementRenderHandler$CurrentBlockData;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toInOut(startTime: number): PlacementRenderHandler$InOutBlockData;
    toString(): string;
}