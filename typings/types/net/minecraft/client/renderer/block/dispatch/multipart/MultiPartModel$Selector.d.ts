import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class MultiPartModel$Selector<T extends Object | number | string | boolean> extends Record {
    constructor(condition: (param0: BlockState) => boolean, model: T)
    // private condition: (param0: BlockState) => boolean;
    // private model: T;
    condition(): (param0: BlockState) => boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    model(): T;
    toString(): string;
    with<S extends Object | number | string | boolean>(newModel: S): MultiPartModel$Selector<S>;
}