import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Spliterator } from '../../../java/util/Spliterator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
export interface BaseStream<T extends Object | number | string | boolean, S extends BaseStream<T, S>> extends AutoCloseable, Object{
    close(): void;
    isParallel(): boolean;
    iterator(): Iterator<T>;
    onClose(arg0: () => void): S;
    parallel(): S;
    sequential(): S;
    spliterator(): Spliterator<T>;
    unordered(): S;
}