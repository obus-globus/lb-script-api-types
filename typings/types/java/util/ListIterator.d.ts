import type { Consumer } from '../../java/util/function/Consumer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
export interface ListIterator<T extends Object | number | string | boolean> extends Object, Iterator<T>{
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): T;
    nextIndex(): number;
    previous(): T;
    previousIndex(): number;
}