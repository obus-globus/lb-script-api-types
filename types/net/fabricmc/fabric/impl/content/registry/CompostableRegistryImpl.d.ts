import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CompostableRegistry } from '../../../../../../net/fabricmc/fabric/api/registry/CompostableRegistry.d.ts'
import type { TagKey } from '../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemLike } from '../../../../../../net/minecraft/world/level/ItemLike.d.ts'
export class CompostableRegistryImpl extends Object implements CompostableRegistry {
    static INSTANCE: CompostableRegistry;
    constructor()
    add(arg0: TagKey<Item>, arg1: number): void;
    add(arg0: ItemLike, arg1: number): void;
    clear(arg0: TagKey<Item>): void;
    clear(arg0: ItemLike): void;
    get(arg0: ItemLike): number;
    remove(arg0: TagKey<Item>): void;
    remove(arg0: ItemLike): void;
}