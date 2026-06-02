import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TagKey } from '../../../../../net/minecraft/tags/TagKey.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
export interface Block2ObjectMap<V extends Object | number | string | boolean> extends Object{
    add(arg0: TagKey<Block>, arg1: V): void;
    add(arg0: Block, arg1: V): void;
    clear(arg0: TagKey<Block>): void;
    clear(arg0: Block): void;
    get(arg0: Block): V;
    remove(arg0: TagKey<Block>): void;
    remove(arg0: Block): void;
}