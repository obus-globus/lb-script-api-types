import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PlacementRenderHandler$CurrentBlockData } from '../../../../../../net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderHandler$CurrentBlockData.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
export class PlacementRenderHandler$InOutBlockData extends Record {
    constructor(startTime: number, cullData: number, box: AABB)
    // private box: AABB;
    /*not mapped: */ box(): AABB;
    // private cullData: number;
    /*not mapped: */ cullData(): number;
    // private startTime: number;
    /*not mapped: */ startTime(): number;
    component1(): number;
    component2(): number;
    component3(): AABB;
    copy(startTime: number, cullData: number, box: AABB): PlacementRenderHandler$InOutBlockData;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toCurrent(): PlacementRenderHandler$CurrentBlockData;
    toString(): string;
}