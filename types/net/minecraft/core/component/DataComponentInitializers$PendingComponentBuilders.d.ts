import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DataComponentMap$Builder } from '../../../../net/minecraft/core/component/DataComponentMap$Builder.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
export class DataComponentInitializers$PendingComponentBuilders<T extends Object | number | string | boolean> extends Record {
    constructor(registryKey: ResourceKey<T[]>, builders: Map<ResourceKey<T>, DataComponentMap$Builder>)
    // private builders: Map<ResourceKey<T>, DataComponentMap$Builder>;
    // private registryKey: ResourceKey<T[]>;
    builders(): Map<ResourceKey<T>, DataComponentMap$Builder>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    registryKey(): ResourceKey<T[]>;
    toString(): string;
}