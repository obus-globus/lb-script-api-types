import type { GameProfile } from '../../../../../com/mojang/authlib/GameProfile.d.ts'
import type { Either } from '../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ProfileResolver } from '../../../../../net/minecraft/server/players/ProfileResolver.d.ts'
import type { PlayerSkin$Patch } from '../../../../../net/minecraft/world/entity/player/PlayerSkin$Patch.d.ts'
import type { ResolvableProfile$Partial } from '../../../../../net/minecraft/world/item/component/ResolvableProfile$Partial.d.ts'
import type { TooltipProvider } from '../../../../../net/minecraft/world/item/component/TooltipProvider.d.ts'
export class ResolvableProfile extends Object implements TooltipProvider {
    static CODEC: Codec<ResolvableProfile>;
    static STREAM_CODEC: StreamCodec<ByteBuf, ResolvableProfile>;
    static createResolved(paramgameProfile: GameProfile): ResolvableProfile;
    static createUnresolved(paramname: string): ResolvableProfile;
    static createUnresolved(paramid: UUID): ResolvableProfile;
    constructor(partialProfile: GameProfile, skinPatch: PlayerSkin$Patch)
    // private partialProfile: GameProfile;
    // private skinPatch: PlayerSkin$Patch;
    name(): Optional<string>;
    partialProfile(): GameProfile;
    resolveProfile(profileResolver: ProfileResolver): CompletableFuture<GameProfile>;
    skinPatch(): PlayerSkin$Patch;
    unpack(): Either<GameProfile, ResolvableProfile$Partial>;
}