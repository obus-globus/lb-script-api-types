import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DynamicRegistryView } from '../../../../../../net/fabricmc/fabric/api/event/registry/DynamicRegistryView.d.ts'
import type { RegistryEntryAddedCallback } from '../../../../../../net/fabricmc/fabric/api/event/registry/RegistryEntryAddedCallback.d.ts'
import type { RegistryAccess } from '../../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
export class DynamicRegistryViewImpl extends Object implements DynamicRegistryView {
    constructor(arg0: Map<ResourceKey<(Object | null)[]>, (Object | null)[]>)
    // private registries: Map<ResourceKey<(Object | null)[]>, (Object | null)[]>;
    asRegistryAccess(): RegistryAccess;
    getOptional(arg0: ResourceKey<T[]>): Optional<T[]>;
    registerEntryAdded(arg0: ResourceKey<T[]>, arg1: (param0: T, param1: number, param2: Identifier) => void): void;
    stream(): Stream<(Object | null)[]>;
}