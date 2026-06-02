import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FlammableBlockRegistry$Entry } from '../../../../../../net/fabricmc/fabric/api/registry/FlammableBlockRegistry$Entry.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface FireBlockHooks extends Object{
    fabric_getVanillaEntry(arg0: BlockState): FlammableBlockRegistry$Entry;
}