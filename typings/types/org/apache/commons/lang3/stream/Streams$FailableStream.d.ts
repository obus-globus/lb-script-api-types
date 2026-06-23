import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { BinaryOperator } from '../../../../../java/util/function/BinaryOperator.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Collector } from '../../../../../java/util/stream/Collector.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FailableConsumer } from '../../../../../org/apache/commons/lang3/function/FailableConsumer.d.ts'
import type { FailableFunction } from '../../../../../org/apache/commons/lang3/function/FailableFunction.d.ts'
import type { FailablePredicate } from '../../../../../org/apache/commons/lang3/function/FailablePredicate.d.ts'
export class Streams$FailableStream<T extends unknown> extends Object {
    constructor(arg0: Stream<T>)
    // private stream: Stream<T>;
    // private terminated: boolean;
    allMatch(arg0: (param0: T) => boolean): boolean;
    anyMatch(arg0: (param0: T) => boolean): boolean;
    assertNotTerminated(): void;
    collect<R extends unknown>(arg0: () => R, arg1: (param0: R, param1: T) => void, arg2: (param0: R, param1: R) => void): R;
    collect<R extends unknown, A extends unknown>(arg0: Collector<T, A, R>): R;
    filter(arg0: (param0: T) => boolean): Streams$FailableStream<T>;
    forEach(arg0: (param0: T) => void): void;
    makeTerminated(): void;
    map<R extends unknown>(arg0: (param0: T) => R): Streams$FailableStream<R>;
    reduce(arg0: T, arg1: (param0: T, param1: Object | null) => Object | null): T;
    stream(): Stream<T>;
}