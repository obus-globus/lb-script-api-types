import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class Recipe$CommonInfo extends Record {
    static MAP_CODEC: MapCodec<Recipe$CommonInfo>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Recipe$CommonInfo>;
    constructor(showNotification: boolean)
    // private showNotification: boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    showNotification(): boolean;
    toString(): string;
}