import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { UseOnContext } from '../../../../../net/minecraft/world/item/context/UseOnContext.d.ts'
import type { ItemLike } from '../../../../../net/minecraft/world/level/ItemLike.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class TillableBlockRegistry extends Object {
    static register(paramarg0: Block, paramarg1: (param0: UseOnContext) => kotlin.Boolean, paramarg2: (param0: UseOnContext) => void): void;
    static register(paramarg0: Block, paramarg1: (param0: UseOnContext) => kotlin.Boolean, paramarg2: BlockState): void;
    static register(paramarg0: Block, paramarg1: (param0: UseOnContext) => kotlin.Boolean, paramarg2: BlockState, paramarg3: ItemLike): void;
    private constructor()
}