import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class MapDecorationType extends Record {
    static CODEC: Codec<Holder<MapDecorationType>>;
    static NO_MAP_COLOR: number;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Holder<MapDecorationType>>;
    constructor(assetId: Identifier, showOnItemFrame: boolean, mapColor: number, explorationMapElement: boolean, trackCount: boolean)
    // private assetId: Identifier;
    // private explorationMapElement: boolean;
    // private mapColor: number;
    // private showOnItemFrame: boolean;
    // private trackCount: boolean;
    assetId(): Identifier;
    equals(o: Object | null): boolean;
    explorationMapElement(): boolean;
    hasMapColor(): boolean;
    hashCode(): number;
    mapColor(): number;
    showOnItemFrame(): boolean;
    toString(): string;
    trackCount(): boolean;
}