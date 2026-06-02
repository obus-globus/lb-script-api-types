import type { IOException } from '../../../../../java/io/IOException.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { BiFunction } from '../../../../../java/util/function/BiFunction.d.ts'
import type { IntFunction } from '../../../../../java/util/function/IntFunction.d.ts'
import type { ToDoubleFunction } from '../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../java/util/function/ToLongFunction.d.ts'
import type { Collector } from '../../../../../java/util/stream/Collector.d.ts'
import type { DoubleStream } from '../../../../../java/util/stream/DoubleStream.d.ts'
import type { IntStream } from '../../../../../java/util/stream/IntStream.d.ts'
import type { LongStream } from '../../../../../java/util/stream/LongStream.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IOBaseStreamAdapter } from '../../../../../org/apache/commons/io/function/IOBaseStreamAdapter.d.ts'
import type { IOBiConsumer } from '../../../../../org/apache/commons/io/function/IOBiConsumer.d.ts'
import type { IOBiFunction } from '../../../../../org/apache/commons/io/function/IOBiFunction.d.ts'
import type { IOBinaryOperator } from '../../../../../org/apache/commons/io/function/IOBinaryOperator.d.ts'
import type { IOComparator } from '../../../../../org/apache/commons/io/function/IOComparator.d.ts'
import type { IOConsumer } from '../../../../../org/apache/commons/io/function/IOConsumer.d.ts'
import type { IOFunction } from '../../../../../org/apache/commons/io/function/IOFunction.d.ts'
import type { IOPredicate } from '../../../../../org/apache/commons/io/function/IOPredicate.d.ts'
import type { IOStream } from '../../../../../org/apache/commons/io/function/IOStream.d.ts'
import type { IOSupplier } from '../../../../../org/apache/commons/io/function/IOSupplier.d.ts'
import type { IOUnaryOperator } from '../../../../../org/apache/commons/io/function/IOUnaryOperator.d.ts'
export class IOStreamAdapter<T extends Object | number | string | boolean> extends IOBaseStreamAdapter<T, IOStream<T>, Stream<T>> implements IOStream<T> {
    static adapt(paramarg0: Stream<Object>): IOStream<Object>;
    static empty(): IOStream<Object>;
    static iterate(paramarg0: Object | null, paramarg1: (param0: Object | null) => unknown): IOStream<Object>;
    static of(paramarg0: Object | null): IOStream<Object>;
    static of(paramarg0: Object | null): IOStream<Object>;
    static of(paramarg0: (Object | null)[]): IOStream<Object>;
    private constructor(arg0: Stream<T>)
    allMatch(arg0: (param0: T) => kotlin.Boolean): boolean;
    anyMatch(arg0: (param0: T) => kotlin.Boolean): boolean;
    collect<R extends Object | number | string | boolean>(arg0: Collector<T, A, R>): R;
    collect<R extends Object | number | string | boolean>(arg0: () => R, arg1: (param0: R, param1: T) => void, arg2: (param0: R, param1: R) => void): R;
    count(): number;
    distinct(): IOStream<T>;
    filter(arg0: (param0: T) => kotlin.Boolean): IOStream<T>;
    findAny(): Optional<T>;
    findFirst(): Optional<T>;
    flatMap(arg0: (param0: T) => IOStream<R>): IOStream<R>;
    flatMapToDouble(arg0: (param0: T) => DoubleStream): DoubleStream;
    flatMapToInt(arg0: (param0: T) => IntStream): IntStream;
    flatMapToLong(arg0: (param0: T) => LongStream): LongStream;
    forAll(arg0: (param0: T) => void): void;
    forAll(arg0: (param0: T) => void, arg1: (param0: number, param1: IOException) => IOException): void;
    forEach(arg0: (param0: T) => void): void;
    forEachOrdered(arg0: (param0: T) => void): void;
    limit(arg0: number): IOStream<T>;
    map(arg0: (param0: T) => R): IOStream<R>;
    mapToDouble(arg0: (param0: T) => kotlin.Double): DoubleStream;
    mapToInt(arg0: (param0: T) => kotlin.Int): IntStream;
    mapToLong(arg0: (param0: T) => kotlin.Long): LongStream;
    max(arg0: (param0: T, param1: Object | null) => kotlin.Int): Optional<T>;
    min(arg0: (param0: T, param1: Object | null) => kotlin.Int): Optional<T>;
    noneMatch(arg0: (param0: T) => kotlin.Boolean): boolean;
    peek(arg0: (param0: T) => void): IOStream<T>;
    reduce(arg0: T, arg1: (param0: T, param1: Object | null) => unknown): T;
    reduce<U extends Object | number | string | boolean>(arg0: U, arg1: (param0: U, param1: T) => U, arg2: (param0: U, param1: Object | null) => unknown): U;
    reduce(arg0: (param0: T, param1: Object | null) => unknown): Optional<T>;
    skip(arg0: number): IOStream<T>;
    sorted(): IOStream<T>;
    sorted(arg0: (param0: T, param1: Object | null) => kotlin.Int): IOStream<T>;
    toArray(): Object[];
    toArray(arg0: (param0: A[]) => unknown): A[];
    wrap(arg0: Stream<T>): IOStream<T>;
}