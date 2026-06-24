import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Path } from '../../../../net/minecraft/world/level/pathfinder/Path.d.ts'
export class DebugPathInfo extends Record {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, DebugPathInfo>;
    constructor(path: Path, maxNodeDistance: number)
    // private maxNodeDistance: number;
    // private path: Path;
    equals(o: Object | null): boolean;
    hashCode(): number;
    maxNodeDistance(): number;
    path(): Path;
    toString(): string;
}