import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
export interface Enumeration<E extends unknown> extends Object{
    asIterator(): Iterator<E>;
    hasMoreElements(): boolean;
    nextElement(): E;
}