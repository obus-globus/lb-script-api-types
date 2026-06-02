import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TraversableForest } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/tree/TraversableForest.d.ts'
export interface RemovableForest extends Object, TraversableForest{
    remove(arg0: number, arg1: number, arg2: number): void;
}