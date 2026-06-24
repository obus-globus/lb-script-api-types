import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { DecoratedPotPattern } from '../../../../../net/minecraft/world/level/block/entity/DecoratedPotPattern.d.ts'
export class DecoratedPotPatternRegistry extends Object {
    static registerPattern(paramarg0: ResourceKey<Item>, paramarg1: ResourceKey<DecoratedPotPattern>): void;
    private constructor()
}