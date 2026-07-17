import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DataComponentMap$Builder } from '../../../../net/minecraft/core/component/DataComponentMap$Builder.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
export class DataComponentInitializers$PendingComponentBuilders<T extends unknown> extends Record {
    constructor(registryKey: ResourceKey<T[]>, builders: JavaMap<ResourceKey<T>, DataComponentMap$Builder>)
    // private builders: JavaMap<ResourceKey<T>, DataComponentMap$Builder>;
    // private registryKey: ResourceKey<T[]>;
    builders(): JavaMap<ResourceKey<T>, DataComponentMap$Builder>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    registryKey(): ResourceKey<T[]>;
    toString(): string;
}