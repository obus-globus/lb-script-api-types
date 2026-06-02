import type { Runnable } from '../../java/lang/Runnable.d.ts'
import type { IntConsumer } from '../../java/util/function/IntConsumer.d.ts'
import type { IntSupplier } from '../../java/util/function/IntSupplier.d.ts'
import type { Supplier } from '../../java/util/function/Supplier.d.ts'
import type { IntStream } from '../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class OptionalInt extends Object {
    static empty(): OptionalInt;
    static of(paramarg0: number): OptionalInt;
    private constructor()
    private constructor(arg0: number)
    // private isPresent: boolean;
    // private value: number;
    equals(arg0: Object | null): boolean;
    getAsInt(): number;
    hashCode(): number;
    ifPresent(arg0: (param0: number) => void): void;
    ifPresentOrElse(arg0: (param0: number) => void, arg1: () => void): void;
    isEmpty(): boolean;
    isPresent(): boolean;
    orElse(arg0: number): number;
    orElseGet(arg0: () => kotlin.Int): number;
    orElseThrow(): number;
    orElseThrow(arg0: () => X): number;
    stream(): IntStream;
    toString(): string;
}