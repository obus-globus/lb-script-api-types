import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GlobalPos } from '../../../../../net/minecraft/core/GlobalPos.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
export class LodestoneTracker extends Record {
    static CODEC: Codec<LodestoneTracker>;
    static STREAM_CODEC: StreamCodec<ByteBuf, LodestoneTracker>;
    constructor(target: Optional<GlobalPos>, tracked: boolean)
    // private target: Optional<GlobalPos>;
    // private tracked: boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    target(): Optional<GlobalPos>;
    tick(level: ServerLevel): LodestoneTracker;
    toString(): string;
    tracked(): boolean;
}