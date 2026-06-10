import type { AtomicBoolean } from '../../../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export abstract class TrackedBlockStatePredicate extends Object implements Predicate<BlockState> {
    static FULLY_INITIALIZED: AtomicBoolean;
    static isEqual(paramarg0: Object): (param0: Object | null) => boolean;
    static not(paramarg0: (param0: Object) => boolean): (param0: Object | null) => boolean;
    constructor(arg0: number)
    readonly index: number;
    and(arg0: (param0: BlockState) => boolean): (param0: BlockState) => boolean;
    getIndex(): number;
    negate(): (param0: BlockState) => boolean;
    or(arg0: (param0: BlockState) => boolean): (param0: BlockState) => boolean;
}