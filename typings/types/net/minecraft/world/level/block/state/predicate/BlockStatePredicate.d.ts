import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../java/lang/Comparable.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { StateDefinition } from '../../../../../../../net/minecraft/world/level/block/state/StateDefinition.d.ts'
import type { Property } from '../../../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export class BlockStatePredicate extends Object implements Predicate<BlockState> {
    static ANY: (param0: BlockState) => boolean;
    static forBlock(paramblock: Block): BlockStatePredicate;
    private constructor(definition: StateDefinition<Block, BlockState>)
    // private definition: StateDefinition<Block, BlockState>;
    // private properties: JavaMap<Property<any>, (param0: Object) => boolean>;
    and(arg0: (param0: BlockState) => boolean): (param0: BlockState) => boolean;
    applies<T extends Comparable<T>>(input: BlockState, key: Property<T>, predicate: (param0: Object) => boolean): boolean;
    negate(): (param0: BlockState) => boolean;
    or(arg0: (param0: BlockState) => boolean): (param0: BlockState) => boolean;
    test(input: BlockState): boolean;
    where<V extends Comparable<V>>(property: Property<V>, predicate: (param0: Object) => boolean): BlockStatePredicate;
}