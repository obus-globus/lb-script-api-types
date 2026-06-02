import type { Runnable } from '../../../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { PoiRecord$Packed } from '../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiRecord$Packed.d.ts'
import type { PoiType } from '../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiType.d.ts'
export class PoiRecord extends Object {
    constructor(pos: BlockPos, poiType: Holder<PoiType>, setDirty: () => void)
    private constructor(pos: BlockPos, poiType: Holder<PoiType>, freeTickets: number, setDirty: () => void)
    readonly freeTickets: number;
    readonly poiType: Holder<PoiType>;
    readonly pos: BlockPos;
    // private setDirty: () => void;
    acquireTicket(): boolean;
    equals(o: Object | null): boolean;
    getFreeTickets(): number;
    getPoiType(): Holder<PoiType>;
    getPos(): BlockPos;
    hasSpace(): boolean;
    hashCode(): number;
    isOccupied(): boolean;
    pack(): PoiRecord$Packed;
    releaseTicket(): boolean;
}