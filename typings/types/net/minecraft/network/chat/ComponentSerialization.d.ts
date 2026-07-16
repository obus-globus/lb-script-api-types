import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ExtraCodecs$LateBoundIdMapper } from '../../../../net/minecraft/util/ExtraCodecs$LateBoundIdMapper.d.ts'
export class ComponentSerialization extends Object {
    static CODEC: Codec<Component>;
    static OPTIONAL_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Optional<Component>>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Component>;
    static TRUSTED_CONTEXT_FREE_STREAM_CODEC: StreamCodec<ByteBuf, Component>;
    static TRUSTED_OPTIONAL_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Optional<Component>>;
    static TRUSTED_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Component>;
    static createLegacyComponentMatcher<T extends unknown>(paramtypes: ExtraCodecs$LateBoundIdMapper<string, MapCodec<T>>, paramcodecGetter: (param0: T) => MapCodec<T>, paramtypeFieldName: string): MapCodec<T>;
    static flatRestrictedCodec(parammaxFlatSize: number): Codec<Component>;
    constructor()
}