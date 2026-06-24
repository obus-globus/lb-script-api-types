import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { BoundingBox } from '../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
export class DebugStructureInfo$Piece extends Record {
    static STREAM_CODEC: StreamCodec<ByteBuf, DebugStructureInfo$Piece>;
    constructor(boundingBox: BoundingBox, isStart: boolean)
    // private boundingBox: BoundingBox;
    // private isStart: boolean;
    boundingBox(): BoundingBox;
    equals(o: Object | null): boolean;
    hashCode(): number;
    isStart(): boolean;
    toString(): string;
}