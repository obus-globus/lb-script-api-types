import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface JsonEventLogReader<T extends unknown> extends Closeable, Object{
    close(): void;
    next(): T;
}