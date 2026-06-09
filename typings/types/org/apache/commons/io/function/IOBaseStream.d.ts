import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { BaseStream } from '../../../../../java/util/stream/BaseStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IOIterator } from '../../../../../org/apache/commons/io/function/IOIterator.d.ts'
import type { IORunnable } from '../../../../../org/apache/commons/io/function/IORunnable.d.ts'
import type { IOSpliterator } from '../../../../../org/apache/commons/io/function/IOSpliterator.d.ts'
export interface IOBaseStream<T extends Object | number | string | boolean, S extends IOBaseStream<T, S, B>, B extends BaseStream<T, B>> extends Closeable, Object {
    asBaseStream(): BaseStream<T, B>;
    close(): void;
    isParallel(): boolean;
    iterator(): IOIterator<T>;
    onClose(arg0: () => void): S;
    parallel(): S;
    sequential(): S;
    spliterator(): IOSpliterator<T>;
    unordered(): S;
    unwrap(): B;
    wrap(arg0: B): S;
}