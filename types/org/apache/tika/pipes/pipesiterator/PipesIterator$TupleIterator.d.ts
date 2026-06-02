import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { FetchEmitTuple } from '../../../../../org/apache/tika/pipes/FetchEmitTuple.d.ts'
export class PipesIterator$TupleIterator extends Object implements Iterator<FetchEmitTuple> {
    private constructor(null_: PipesIterator$TupleIterator)
    // private next: FetchEmitTuple;
    // private checkThreadOk(): void;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): FetchEmitTuple;
    // private pollNext(): FetchEmitTuple;
}