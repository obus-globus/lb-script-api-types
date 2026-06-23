import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { EntityType } from '../../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { Item } from '../../../../../../../net/minecraft/world/item/Item.d.ts'
import type { Potion } from '../../../../../../../net/minecraft/world/item/alchemy/Potion.d.ts'
import type { Enchantment } from '../../../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
import type { Biome } from '../../../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { Structure } from '../../../../../../../net/minecraft/world/level/levelgen/structure/Structure.d.ts'
import type { Fluid } from '../../../../../../../net/minecraft/world/level/material/Fluid.d.ts'
export class TagRegistration<T extends Object | number | string | boolean> extends Record {
    static BIOME_TAG: TagRegistration<Biome>;
    static BLOCK_TAG: TagRegistration<Block>;
    static ENCHANTMENT_TAG: TagRegistration<Enchantment>;
    static ENTITY_TYPE_TAG: TagRegistration<EntityType<any>>;
    static FLUID_TAG: TagRegistration<Fluid>;
    static ITEM_TAG: TagRegistration<Item>;
    static POTION_TAG: TagRegistration<Potion>;
    static STRUCTURE_TAG: TagRegistration<Structure>;
    constructor(registryKey: ResourceKey<T[]>)
    // private registryKey: ResourceKey<T[]>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    registerC(arg0: string): TagKey<T>;
    registerFabric(arg0: string): TagKey<T>;
    registryKey(): ResourceKey<T[]>;
    toString(): string;
}