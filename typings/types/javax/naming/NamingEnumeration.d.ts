import type { Enumeration } from '../../java/util/Enumeration.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
export interface NamingEnumeration<T extends unknown> extends Enumeration<T>, Object{
    asIterator(): Iterator<T>;
    close(): void;
    hasMore(): boolean;
    next(): T;
}