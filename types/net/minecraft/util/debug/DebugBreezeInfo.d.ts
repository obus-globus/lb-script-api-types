import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class DebugBreezeInfo extends Record {
    static STREAM_CODEC: StreamCodec<ByteBuf, DebugBreezeInfo>;
    constructor(attackTarget: Optional<number>, jumpTarget: Optional<BlockPos>)
    // private attackTarget: Optional<number>;
    // private jumpTarget: Optional<BlockPos>;
    attackTarget(): Optional<number>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    jumpTarget(): Optional<BlockPos>;
    toString(): string;
}