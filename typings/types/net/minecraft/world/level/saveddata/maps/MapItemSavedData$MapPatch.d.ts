import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { MapItemSavedData } from '../../../../../../net/minecraft/world/level/saveddata/maps/MapItemSavedData.d.ts'
export class MapItemSavedData$MapPatch extends Record {
    static STREAM_CODEC: StreamCodec<ByteBuf, Optional<MapItemSavedData$MapPatch>>;
    constructor(startX: number, startY: number, width: number, height: number, mapColors: number[])
    // private height: number;
    // private mapColors: number[];
    // private startX: number;
    // private startY: number;
    // private width: number;
    applyToMap(map: MapItemSavedData): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    height(): number;
    mapColors(): number[];
    startX(): number;
    startY(): number;
    toString(): string;
    width(): number;
}