import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
export class ResourceKey<T extends Object | number | string | boolean> extends Object {
    static codec(paramregistryName: ResourceKey<Object>): Codec<Object>;
    static create(paramregistryName: ResourceKey<Object>, paramlocation: Identifier): ResourceKey<Object>;
    static createRegistryKey(paramidentifier: Identifier): ResourceKey<Object>;
    static streamCodec(paramregistryName: ResourceKey<Object>): StreamCodec<ByteBuf, Object>;
    private constructor(registryName: Identifier, identifier: Identifier)
    // private identifier: Identifier;
    // private registryName: Identifier;
    cast(registry: ResourceKey<E[]>): Optional<ResourceKey<E>>;
    identifier(): Identifier;
    isFor(registry: ResourceKey<(Object | null)[]>): boolean;
    registry(): Identifier;
    registryKey(): ResourceKey<T[]>;
    toString(): string;
}