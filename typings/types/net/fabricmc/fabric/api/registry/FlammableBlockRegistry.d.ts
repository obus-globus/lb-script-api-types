import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FlammableBlockRegistry$Entry } from '../../../../../net/fabricmc/fabric/api/registry/FlammableBlockRegistry$Entry.d.ts'
import type { Block2ObjectMap } from '../../../../../net/fabricmc/fabric/api/util/Block2ObjectMap.d.ts'
import type { TagKey } from '../../../../../net/minecraft/tags/TagKey.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
export interface FlammableBlockRegistry extends Object, Block2ObjectMap<FlammableBlockRegistry$Entry>{
    add(arg0: TagKey<Block>, arg1: number, arg2: number): void;
    add(arg0: Block, arg1: number, arg2: number): void;
}