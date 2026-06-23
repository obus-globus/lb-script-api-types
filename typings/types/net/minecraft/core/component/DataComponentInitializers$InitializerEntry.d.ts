import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { DataComponentInitializers$Initializer } from '../../../../net/minecraft/core/component/DataComponentInitializers$Initializer.d.ts'
import type { DataComponentMap$Builder } from '../../../../net/minecraft/core/component/DataComponentMap$Builder.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
export class DataComponentInitializers$InitializerEntry<T extends unknown> extends Record {
    private constructor(key: ResourceKey<T>, initializer: (param0: DataComponentMap$Builder, param1: HolderLookup$Provider, param2: ResourceKey<T>) => void)
    // private initializer: (param0: DataComponentMap$Builder, param1: HolderLookup$Provider, param2: ResourceKey<T>) => void;
    // private key: ResourceKey<T>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    initializer(): (param0: DataComponentMap$Builder, param1: HolderLookup$Provider, param2: ResourceKey<T>) => void;
    key(): ResourceKey<T>;
    run(components: DataComponentMap$Builder, context: HolderLookup$Provider): void;
    toString(): string;
}