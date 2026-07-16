import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { UnaryOperator } from '../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DataFixUtils extends Object {
    static ceillog2(paramarg0: number): number;
    static consumerToFunction<T extends unknown>(paramarg0: (param0: T) => void): (param0: T) => T;
    static getSubVersion(paramarg0: number): number;
    static getVersion(paramarg0: number): number;
    static make<T extends unknown>(paramarg0: T, paramarg1: (param0: T) => void): T;
    static make<T extends unknown>(paramarg0: () => T): T;
    static makeKey(paramarg0: number): number;
    static makeKey(paramarg0: number, paramarg1: number): number;
    static or<U extends unknown>(paramarg0: Optional<U>, paramarg1: () => Optional<U>): Optional<U>;
    static orElse<U extends unknown>(paramarg0: Optional<U>, paramarg1: U): U;
    static orElseGet<U extends unknown>(paramarg0: Optional<U>, paramarg1: () => U): U;
    static smallestEncompassingPowerOfTwo(paramarg0: number): number;
    static toArray(paramarg0: ByteBuffer): number[];
    private constructor()
}