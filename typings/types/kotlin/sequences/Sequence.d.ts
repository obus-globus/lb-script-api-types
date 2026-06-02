import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
export interface Sequence<T extends Object | number | string | boolean> extends Object{
    iterator(): Iterator<T>;
}