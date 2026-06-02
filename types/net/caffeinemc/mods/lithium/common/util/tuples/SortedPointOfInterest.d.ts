import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { PoiRecord } from '../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiRecord.d.ts'
export class SortedPointOfInterest extends Object {
    constructor(arg0: PoiRecord, arg1: number)
    constructor(arg0: PoiRecord, arg1: BlockPos)
    readonly consumed: boolean;
    // private distanceSq: number;
    // private poi: PoiRecord;
    distanceSq(): number;
    getPos(): BlockPos;
    getX(): number;
    getY(): number;
    getZ(): number;
    isConsumed(): boolean;
    poi(): PoiRecord;
    setConsumed(): void;
}