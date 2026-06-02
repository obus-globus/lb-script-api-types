import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
export interface Grouping<T extends Object | number | string | boolean, K extends Object | number | string | boolean> extends Object{
    keyOf(element: T): K;
    sourceIterator(): Iterator<T>;
}