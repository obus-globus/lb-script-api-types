import type { Runnable } from '../../java/lang/Runnable.d.ts'
import type { LongConsumer } from '../../java/util/function/LongConsumer.d.ts'
import type { LongSupplier } from '../../java/util/function/LongSupplier.d.ts'
import type { Supplier } from '../../java/util/function/Supplier.d.ts'
import type { LongStream } from '../../java/util/stream/LongStream.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export class OptionalLong extends Object {
    static empty(): OptionalLong;
    static of(paramarg0: number): OptionalLong;
    private constructor()
    private constructor(arg0: number)
    // private isPresent: boolean;
    // private value: number;
    equals(arg0: Object | null): boolean;
    getAsLong(): number;
    hashCode(): number;
    ifPresent(arg0: (param0: number) => void): void;
    ifPresentOrElse(arg0: (param0: number) => void, arg1: () => void): void;
    isEmpty(): boolean;
    isPresent(): boolean;
    orElse(arg0: number): number;
    orElseGet(arg0: () => number): number;
    orElseThrow(): number;
    orElseThrow<X extends Throwable>(arg0: () => X): number;
    stream(): LongStream;
    toString(): string;
}