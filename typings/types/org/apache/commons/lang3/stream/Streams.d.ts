import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enumeration } from '../../../../../java/util/Enumeration.d.ts'
import type { Collector } from '../../../../../java/util/stream/Collector.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { Streams$FailableStream } from '../../../../../org/apache/commons/lang3/stream/Streams$FailableStream.d.ts'
export class Streams extends Object {
    static failableStream<T extends unknown>(paramarg0: T): Streams$FailableStream<T>;
    static failableStream<T extends unknown>(...paramarg0: T[]): Streams$FailableStream<T>;
    static failableStream<T extends unknown>(paramarg0: T[]): Streams$FailableStream<T>;
    static failableStream<T extends unknown>(paramarg0: Stream<T>): Streams$FailableStream<T>;
    static instancesOf<E extends unknown>(paramarg0: Class<Object>, paramarg1: Object[]): Stream<E>;
    static nonNull<E extends unknown>(paramarg0: E): Stream<E>;
    static nonNull<E extends unknown>(...paramarg0: E[]): Stream<E>;
    static nonNull<E extends unknown>(paramarg0: E[]): Stream<E>;
    static nonNull<E extends unknown>(paramarg0: Stream<E>): Stream<E>;
    static of<E extends unknown>(paramarg0: E[]): Stream<E>;
    static of<E extends unknown>(paramarg0: Enumeration<E>): Stream<E>;
    static of<E extends unknown>(paramarg0: Iterator<E>): Stream<E>;
    static of<T extends unknown>(...paramarg0: T[]): Stream<T>;
    static stream<E extends unknown>(paramarg0: E[]): Streams$FailableStream<E>;
    static stream<T extends unknown>(paramarg0: Stream<T>): Streams$FailableStream<T>;
    static toArray<T extends unknown>(paramarg0: Class<T>): Collector<T, T[], T[]>;
    constructor()
}