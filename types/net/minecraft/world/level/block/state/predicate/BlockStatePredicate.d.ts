import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { StateDefinition } from '../../../../../../../net/minecraft/world/level/block/state/StateDefinition.d.ts'
import type { Property } from '../../../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export class BlockStatePredicate extends Object implements Predicate<BlockState> {
    static ANY: (param0: BlockState) => kotlin.Boolean;
    static forBlock(paramblock: Block): BlockStatePredicate;
    static isEqual(paramarg0: Object): (param0: Object | null) => kotlin.Boolean;
    static not(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    private constructor(definition: StateDefinition<Block, BlockState>)
    // private definition: StateDefinition<Block, BlockState>;
    // private properties: Map<Property<Object>, (param0: Object) => kotlin.Boolean>;
    and(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    applies(input: BlockState, key: Property<T>, predicate: (param0: Object) => kotlin.Boolean): boolean;
    negate(): (param0: T) => kotlin.Boolean;
    or(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    test(input: BlockState): boolean;
    where(property: Property<V>, predicate: (param0: Object) => kotlin.Boolean): BlockStatePredicate;
}