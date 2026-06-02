import type { GameProfile } from '../../../../../com/mojang/authlib/GameProfile.d.ts'
import type { Either } from '../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DataComponentGetter } from '../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ProfileResolver } from '../../../../../net/minecraft/server/players/ProfileResolver.d.ts'
import type { PlayerSkin$Patch } from '../../../../../net/minecraft/world/entity/player/PlayerSkin$Patch.d.ts'
import type { Item$TooltipContext } from '../../../../../net/minecraft/world/item/Item$TooltipContext.d.ts'
import type { TooltipFlag } from '../../../../../net/minecraft/world/item/TooltipFlag.d.ts'
import type { ResolvableProfile } from '../../../../../net/minecraft/world/item/component/ResolvableProfile.d.ts'
import type { ResolvableProfile$Partial } from '../../../../../net/minecraft/world/item/component/ResolvableProfile$Partial.d.ts'
export class ResolvableProfile$Dynamic extends ResolvableProfile {
    static CODEC: Codec<ResolvableProfile>;
    static STREAM_CODEC: StreamCodec<ByteBuf, ResolvableProfile>;
    static createResolved(paramgameProfile: GameProfile): ResolvableProfile;
    static createUnresolved(paramname: string): ResolvableProfile;
    static createUnresolved(paramid: UUID): ResolvableProfile;
    private constructor(nameOrId: Either<string, UUID>, skinPatch: PlayerSkin$Patch)
    // private nameOrId: Either<string, UUID>;
    addToTooltip(context: Item$TooltipContext, consumer: (param0: Component) => void, flag: TooltipFlag, components: DataComponentGetter): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    name(): Optional<string>;
    resolveProfile(profileResolver: ProfileResolver): CompletableFuture<GameProfile>;
    unpack(): Either<GameProfile, ResolvableProfile$Partial>;
}