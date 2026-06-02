import type { Consumer } from '../../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../../java/util/Iterator.d.ts'
import type { StorageView } from '../../../../../../../../net/fabricmc/fabric/api/transfer/v1/storage/StorageView.d.ts'
export class CombinedStorage$CombinedIterator extends Object implements Iterator<StorageView<T>> {
    constructor(null_: CombinedStorage$CombinedIterator)
    // private currentPartIterator: Iterator<StorageView<T>>;
    // private partIterator: Iterator<S>;
    // private advanceCurrentPartIterator(): void;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): StorageView<T>;
}