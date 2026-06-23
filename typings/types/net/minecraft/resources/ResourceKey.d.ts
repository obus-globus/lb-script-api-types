import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
export class ResourceKey<T extends unknown> extends Object {
    static codec(paramregistryName: ResourceKey<(Object | null)[]>): Codec<ResourceKey<Object>>;
    static create(paramregistryName: ResourceKey<(Object | null)[]>, paramlocation: Identifier): ResourceKey<Object>;
    static createRegistryKey(paramidentifier: Identifier): ResourceKey<(Object | null)[]>;
    static streamCodec(paramregistryName: ResourceKey<(Object | null)[]>): StreamCodec<ByteBuf, ResourceKey<Object>>;
    private constructor(registryName: Identifier, identifier: Identifier)
    // private identifier: Identifier;
    // private registryName: Identifier;
    cast<E extends unknown>(registry: ResourceKey<E[]>): Optional<ResourceKey<E>>;
    identifier(): Identifier;
    isFor(registry: ResourceKey<(Object | null)[]>): boolean;
    registry(): Identifier;
    registryKey(): ResourceKey<T[]>;
    toString(): string;
}