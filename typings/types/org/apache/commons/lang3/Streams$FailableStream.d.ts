import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { BinaryOperator } from '../../../../java/util/function/BinaryOperator.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Functions$FailableConsumer } from '../../../../org/apache/commons/lang3/Functions$FailableConsumer.d.ts'
import type { Functions$FailableFunction } from '../../../../org/apache/commons/lang3/Functions$FailableFunction.d.ts'
import type { Functions$FailablePredicate } from '../../../../org/apache/commons/lang3/Functions$FailablePredicate.d.ts'
export class Streams$FailableStream<O extends Object | number | string | boolean> extends Object {
    constructor(arg0: Stream<O>)
    // private stream: Stream<O>;
    // private terminated: boolean;
    allMatch(arg0: (param0: O) => boolean): boolean;
    anyMatch(arg0: (param0: O) => boolean): boolean;
    assertNotTerminated(): void;
    collect<R extends Object | number | string | boolean>(arg0: () => R, arg1: (param0: R, param1: O) => void, arg2: (param0: R, param1: R) => void): R;
    collect<R extends Object | number | string | boolean, A extends Object | number | string | boolean>(arg0: Collector<O, A, R>): R;
    filter(arg0: (param0: O) => boolean): Streams$FailableStream<O>;
    forEach(arg0: (param0: O) => void): void;
    makeTerminated(): void;
    map<R extends Object | number | string | boolean>(arg0: (param0: O) => R): Streams$FailableStream<R>;
    reduce(arg0: O, arg1: (param0: O, param1: Object | null) => Object | null): O;
    stream(): Stream<O>;
}