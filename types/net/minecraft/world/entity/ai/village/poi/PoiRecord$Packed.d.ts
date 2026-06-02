import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Runnable } from '../../../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { PoiRecord } from '../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiRecord.d.ts'
import type { PoiType } from '../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiType.d.ts'
export class PoiRecord$Packed extends Record {
    static CODEC: Codec<PoiRecord$Packed>;
    // private freeTickets: number;
    // private poiType: Holder<PoiType>;
    // private pos: BlockPos;
    equals(o: Object | null): boolean;
    freeTickets(): number;
    hashCode(): number;
    poiType(): Holder<PoiType>;
    pos(): BlockPos;
    toString(): string;
    unpack(setDirty: () => void): PoiRecord;
}