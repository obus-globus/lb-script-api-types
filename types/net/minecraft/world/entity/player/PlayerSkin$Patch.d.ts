import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientAsset$ResourceTexture } from '../../../../../net/minecraft/core/ClientAsset$ResourceTexture.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { PlayerModelType } from '../../../../../net/minecraft/world/entity/player/PlayerModelType.d.ts'
export class PlayerSkin$Patch extends Record {
    static EMPTY: PlayerSkin$Patch;
    static MAP_CODEC: MapCodec<PlayerSkin$Patch>;
    static STREAM_CODEC: StreamCodec<ByteBuf, PlayerSkin$Patch>;
    static create(paramtexture: Optional<ClientAsset$ResourceTexture>, paramcapeTexture: Optional<ClientAsset$ResourceTexture>, paramelytraTexture: Optional<ClientAsset$ResourceTexture>, parammodel: Optional<PlayerModelType>): PlayerSkin$Patch;
    constructor(body: Optional<ClientAsset$ResourceTexture>, cape: Optional<ClientAsset$ResourceTexture>, elytra: Optional<ClientAsset$ResourceTexture>, model: Optional<PlayerModelType>)
    // private body: Optional<ClientAsset$ResourceTexture>;
    // private cape: Optional<ClientAsset$ResourceTexture>;
    // private elytra: Optional<ClientAsset$ResourceTexture>;
    // private model: Optional<PlayerModelType>;
    body(): Optional<ClientAsset$ResourceTexture>;
    cape(): Optional<ClientAsset$ResourceTexture>;
    elytra(): Optional<ClientAsset$ResourceTexture>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    model(): Optional<PlayerModelType>;
    toString(): string;
}