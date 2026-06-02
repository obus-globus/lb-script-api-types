import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { ContextKey } from '../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { ContextKeySet } from '../../../../../../net/minecraft/util/context/ContextKeySet.d.ts'
import type { ContextMap } from '../../../../../../net/minecraft/util/context/ContextMap.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { FuelValues } from '../../../../../../net/minecraft/world/level/block/entity/FuelValues.d.ts'
export class SlotDisplayContext extends Object {
    static CONTEXT: ContextKeySet;
    static FUEL_VALUES: ContextKey<FuelValues>;
    static REGISTRIES: ContextKey<HolderLookup$Provider>;
    static fromLevel(paramlevel: Level): ContextMap;
    constructor()
}