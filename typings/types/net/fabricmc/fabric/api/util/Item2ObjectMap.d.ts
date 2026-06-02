import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TagKey } from '../../../../../net/minecraft/tags/TagKey.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemLike } from '../../../../../net/minecraft/world/level/ItemLike.d.ts'
export interface Item2ObjectMap<V extends Object | number | string | boolean> extends Object{
    add(arg0: TagKey<Item>, arg1: V): void;
    add(arg0: ItemLike, arg1: V): void;
    clear(arg0: TagKey<Item>): void;
    clear(arg0: ItemLike): void;
    get(arg0: ItemLike): V;
    remove(arg0: TagKey<Item>): void;
    remove(arg0: ItemLike): void;
}