import type { Runnable } from '../../java/lang/Runnable.d.ts'
import type { DoubleConsumer } from '../../java/util/function/DoubleConsumer.d.ts'
import type { DoubleSupplier } from '../../java/util/function/DoubleSupplier.d.ts'
import type { Supplier } from '../../java/util/function/Supplier.d.ts'
import type { DoubleStream } from '../../java/util/stream/DoubleStream.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class OptionalDouble extends Object {
    static empty(): OptionalDouble;
    static of(paramarg0: number): OptionalDouble;
    private constructor()
    private constructor(arg0: number)
    // private isPresent: boolean;
    // private value: number;
    equals(arg0: Object | null): boolean;
    getAsDouble(): number;
    hashCode(): number;
    ifPresent(arg0: (param0: number) => void): void;
    ifPresentOrElse(arg0: (param0: number) => void, arg1: () => void): void;
    isEmpty(): boolean;
    isPresent(): boolean;
    orElse(arg0: number): number;
    orElseGet(arg0: () => kotlin.Double): number;
    orElseThrow(): number;
    orElseThrow(arg0: () => X): number;
    stream(): DoubleStream;
    toString(): string;
}