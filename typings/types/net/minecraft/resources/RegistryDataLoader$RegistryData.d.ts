import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Exception } from '../../../java/lang/Exception.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { BiConsumer } from '../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { RegistryValidator } from '../../../net/minecraft/resources/RegistryValidator.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
export class RegistryDataLoader$RegistryData<T extends unknown> extends Record {
    constructor(key: ResourceKey<T[]>, elementCodec: Codec<T>, validator: (param0: T[], param1: Map<ResourceKey<Object>, Exception>) => void)
    // private elementCodec: Codec<T>;
    // private key: ResourceKey<T[]>;
    // private validator: (param0: T[], param1: Map<ResourceKey<Object>, Exception>) => void;
    elementCodec(): Codec<T>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    key(): ResourceKey<T[]>;
    runWithArguments(output: (param0: ResourceKey<T[]>, param1: Codec<T>) => void): void;
    toString(): string;
    validator(): (param0: T[], param1: Map<ResourceKey<Object>, Exception>) => void;
}