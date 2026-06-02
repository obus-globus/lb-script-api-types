import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
export interface BlockLootSubProviderAccessor extends Object{
    getRegistries(): HolderLookup$Provider;
}