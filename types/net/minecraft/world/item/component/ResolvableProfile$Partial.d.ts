import type { GameProfile } from '../../../../../com/mojang/authlib/GameProfile.d.ts'
import type { PropertyMap } from '../../../../../com/mojang/authlib/properties/PropertyMap.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class ResolvableProfile$Partial extends Record {
    static EMPTY: ResolvableProfile$Partial;
    static STREAM_CODEC: StreamCodec<ByteBuf, ResolvableProfile$Partial>;
    constructor(name: Optional<string>, id: Optional<UUID>, properties: PropertyMap)
    // private id: Optional<UUID>;
    // private name: Optional<string>;
    // private properties: PropertyMap;
    // private createProfile(): GameProfile;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): Optional<UUID>;
    name(): Optional<string>;
    properties(): PropertyMap;
    toString(): string;
}