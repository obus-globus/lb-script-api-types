import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IOConsumer } from '../../../../../org/apache/commons/io/function/IOConsumer.d.ts'
import type { IOIterator } from '../../../../../org/apache/commons/io/function/IOIterator.d.ts'
import type { IOSpliterator } from '../../../../../org/apache/commons/io/function/IOSpliterator.d.ts'
export interface IOIterable<T extends Object | number | string | boolean> extends Object {
    forEach(arg0: (param0: T) => void): void;
    iterator(): IOIterator<T>;
    spliterator(): IOSpliterator<T>;
    unwrap(): T[];
}