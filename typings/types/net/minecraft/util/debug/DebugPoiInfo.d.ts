import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { PoiRecord } from '../../../../net/minecraft/world/entity/ai/village/poi/PoiRecord.d.ts'
import type { PoiType } from '../../../../net/minecraft/world/entity/ai/village/poi/PoiType.d.ts'
export class DebugPoiInfo extends Record {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, DebugPoiInfo>;
    constructor(pos: BlockPos, poiType: Holder<PoiType>, freeTicketCount: number)
    constructor(record: PoiRecord)
    // private freeTicketCount: number;
    // private poiType: Holder<PoiType>;
    // private pos: BlockPos;
    equals(o: Object | null): boolean;
    freeTicketCount(): number;
    hashCode(): number;
    poiType(): Holder<PoiType>;
    pos(): BlockPos;
    toString(): string;
}