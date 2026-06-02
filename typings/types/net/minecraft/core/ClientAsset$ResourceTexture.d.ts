import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../com/mojang/serialization/MapCodec.d.ts'
import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ClientAsset$Texture } from '../../../net/minecraft/core/ClientAsset$Texture.d.ts'
import type { StreamCodec } from '../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
export class ClientAsset$ResourceTexture extends Record implements ClientAsset$Texture {
    static CODEC: Codec<ClientAsset$ResourceTexture>;
    static DEFAULT_FIELD_CODEC: MapCodec<ClientAsset$ResourceTexture>;
    static STREAM_CODEC: StreamCodec<ByteBuf, ClientAsset$ResourceTexture>;
    constructor(texture: Identifier)
    constructor(id: Identifier, texturePath: Identifier)
    // private id: Identifier;
    // private texturePath: Identifier;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): Identifier;
    texturePath(): Identifier;
    toString(): string;
}