import type { Object } from '../../java/lang/Object.d.ts'
import type { Function1 } from '../../kotlin/jvm/functions/Function1.d.ts'
import type { AbstractIterator } from '../../kotlin/collections/AbstractIterator.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
export class DistinctIterator<T extends Object | number | string | boolean, K extends Object | number | string | boolean> extends AbstractIterator<T> {
    constructor(source: Iterator<T>, keySelector: Function1<T, K>)
    // private keySelector: (param0: T) => K;
    // private observed: K[];
    // private source: Iterator<T>;
    protected computeNext(): void;
}