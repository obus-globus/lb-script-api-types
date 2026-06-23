import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Spliterator } from '../../../../../java/util/Spliterator.d.ts'
import type { BaseStream } from '../../../../../java/util/stream/BaseStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { IOBaseStream } from '../../../../../org/apache/commons/io/function/IOBaseStream.d.ts'
export class UncheckedIOBaseStream<T extends unknown, S extends IOBaseStream<T, S, B>, B extends BaseStream<T, B>> extends Object implements BaseStream<T, B> {
    constructor(arg0: S)
    // private delegate: S;
    close(): void;
    isParallel(): boolean;
    iterator(): Iterator<T>;
    onClose(arg0: () => void): B;
    parallel(): B;
    sequential(): B;
    spliterator(): Spliterator<T>;
    unordered(): B;
}