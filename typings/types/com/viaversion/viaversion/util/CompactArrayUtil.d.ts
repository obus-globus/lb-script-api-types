import type { BiIntConsumer } from '../../../../com/viaversion/viaversion/util/BiIntConsumer.d.ts'
import type { IntToLongFunction } from '../../../../java/util/function/IntToLongFunction.d.ts'
import type { IntUnaryOperator } from '../../../../java/util/function/IntUnaryOperator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CompactArrayUtil extends Object {
    static createCompactArray(paramarg0: number, paramarg1: number, paramarg2: (param0: number) => number): number[];
    static createCompactArrayWithPadding(paramarg0: number, paramarg1: number, paramarg2: (param0: number) => number): number[];
    static iterateCompactArray(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: (param0: number, param1: number) => void): void;
    static iterateCompactArrayWithPadding(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: (param0: number, param1: number) => void): void;
    static packWithPadding(paramarg0: number[], paramarg1: number[], paramarg2: number): void;
    static unpackWithPadding(paramarg0: number[], paramarg1: number[], paramarg2: number): void;
    private constructor()
}