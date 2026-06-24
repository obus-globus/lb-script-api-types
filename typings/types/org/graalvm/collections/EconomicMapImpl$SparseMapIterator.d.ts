import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
export abstract class EconomicMapImpl$SparseMapIterator<E extends unknown> extends Object implements Iterator<E> {
    private constructor(null_: (Object | null)[])
    // private current: number;
    forEachRemaining(arg0: (param0: E) => void): void;
    hasNext(): boolean;
    remove(): void;
}