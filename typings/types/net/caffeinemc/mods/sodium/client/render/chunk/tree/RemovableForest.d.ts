import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { RemovableTree } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/tree/RemovableTree.d.ts'
import type { TraversableForest } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/tree/TraversableForest.d.ts'
export interface RemovableForest<T extends RemovableTree> extends Object, TraversableForest<T>{
    addPatch(arg0: number, arg1: number, arg2: number): boolean;
    remove(arg0: number, arg1: number, arg2: number): void;
}