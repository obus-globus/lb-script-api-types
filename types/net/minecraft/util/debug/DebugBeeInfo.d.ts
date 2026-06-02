import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class DebugBeeInfo extends Record {
    static STREAM_CODEC: StreamCodec<ByteBuf, DebugBeeInfo>;
    // private blacklistedHives: BlockPos[];
    // private flowerPos: Optional<BlockPos>;
    // private hivePos: Optional<BlockPos>;
    // private travelTicks: number;
    blacklistedHives(): BlockPos[];
    equals(o: Object | null): boolean;
    flowerPos(): Optional<BlockPos>;
    hasHive(hivePos: BlockPos): boolean;
    hashCode(): number;
    hivePos(): Optional<BlockPos>;
    toString(): string;
    travelTicks(): number;
}