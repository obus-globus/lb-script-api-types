import type { Object } from '../../../java/lang/Object.d.ts'
import type { HolderLookup$RegistryLookup } from '../../../net/minecraft/core/HolderLookup$RegistryLookup.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
export interface Registry$PendingTags<T extends unknown> extends Object{
    apply(): void;
    key(): ResourceKey<T[]>;
    lookup(): HolderLookup$RegistryLookup<T>;
    size(): number;
}