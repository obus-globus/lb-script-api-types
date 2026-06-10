import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { FabricTagKey } from '../../../net/fabricmc/fabric/api/tag/FabricTagKey.d.ts'
import type { TagKeyMixin } from '../../../net/fabricmc/fabric/mixin/tag/convention/TagKeyMixin.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
export class TagKey<T extends Object | number | string | boolean> extends Record implements FabricTagKey, TagKeyMixin {
    static codec(paramregistryName: ResourceKey<(Object | null)[]>): Codec<TagKey<Object>>;
    static create(paramregistry: ResourceKey<(Object | null)[]>, paramlocation: Identifier): TagKey<Object>;
    static hashedCodec(paramregistryName: ResourceKey<(Object | null)[]>): Codec<TagKey<Object>>;
    static streamCodec(paramregistryName: ResourceKey<(Object | null)[]>): StreamCodec<ByteBuf, TagKey<Object>>;
    constructor(registry: ResourceKey<T[]>, location: Identifier)
    // private location: Identifier;
    // private registry: ResourceKey<T[]>;
    cast<E extends Object | number | string | boolean>(registry: ResourceKey<E[]>): Optional<TagKey<E>>;
    equals(o: Object | null): boolean;
    getName(): Component;
    getTranslationKey(): string;
    hashCode(): number;
    isFor(registry: ResourceKey<(Object | null)[]>): boolean;
    location(): Identifier;
    registry(): ResourceKey<T[]>;
    toString(): string;
}