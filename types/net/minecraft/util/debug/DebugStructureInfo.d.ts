import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { DebugStructureInfo$Piece } from '../../../../net/minecraft/util/debug/DebugStructureInfo$Piece.d.ts'
import type { BoundingBox } from '../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
export class DebugStructureInfo extends Record {
    static STREAM_CODEC: StreamCodec<ByteBuf, DebugStructureInfo>;
    constructor(boundingBox: BoundingBox, pieces: DebugStructureInfo$Piece[])
    // private boundingBox: BoundingBox;
    // private pieces: DebugStructureInfo$Piece[];
    boundingBox(): BoundingBox;
    equals(o: Object | null): boolean;
    hashCode(): number;
    pieces(): DebugStructureInfo$Piece[];
    toString(): string;
}