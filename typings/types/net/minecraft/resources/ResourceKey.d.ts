import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { UnaryOperator } from '../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
export class ResourceKey<T extends unknown> extends Object {
    static codec<T extends unknown>(paramregistryName: ResourceKey<T[]>): Codec<ResourceKey<T>>;
    static create<T extends unknown>(paramregistryName: ResourceKey<T[]>, paramlocation: Identifier): ResourceKey<T>;
    static createRegistryKey<T extends unknown>(paramidentifier: Identifier): ResourceKey<T[]>;
    static streamCodec<T extends unknown>(paramregistryName: ResourceKey<T[]>): StreamCodec<ByteBuf, ResourceKey<T>>;
    private constructor(registryName: Identifier, identifier: Identifier)
    // private identifier: Identifier;
    // private registryName: Identifier;
    cast<E extends unknown>(registry: ResourceKey<E[]>): Optional<ResourceKey<E>>;
    dependent<E extends unknown>(registryKey: ResourceKey<E[]>, decoration: (param0: string) => string): ResourceKey<E>;
    dependent<E extends unknown>(registryKey: ResourceKey<E[]>, suffix: string): ResourceKey<E>;
    identifier(): Identifier;
    isFor(registry: ResourceKey<(Object | null)[]>): boolean;
    registry(): Identifier;
    registryKey(): ResourceKey<T[]>;
    toString(): string;
}