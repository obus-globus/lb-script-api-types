import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { UnaryOperator } from '../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DataFixUtils extends Object {
    static ceillog2(paramarg0: number): number;
    static consumerToFunction(paramarg0: (param0: Object | null) => void): (param0: Object | null) => Object | null;
    static getSubVersion(paramarg0: number): number;
    static getVersion(paramarg0: number): number;
    static make(paramarg0: Object | null, paramarg1: (param0: Object | null) => void): Object | null;
    static make(paramarg0: () => Object | null): Object | null;
    static makeKey(paramarg0: number): number;
    static makeKey(paramarg0: number, paramarg1: number): number;
    static or(paramarg0: Optional<Object>, paramarg1: () => Optional<Object>): Optional<Object>;
    static orElse(paramarg0: Optional<Object>, paramarg1: Object | null): Object | null;
    static orElseGet(paramarg0: Optional<Object>, paramarg1: () => Object | null): Object | null;
    static smallestEncompassingPowerOfTwo(paramarg0: number): number;
    static toArray(paramarg0: ByteBuffer): number[];
    private constructor()
}