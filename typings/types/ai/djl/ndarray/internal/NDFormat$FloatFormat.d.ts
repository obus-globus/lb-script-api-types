import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDFormat } from '../../../../ai/djl/ndarray/internal/NDFormat.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class NDFormat$FloatFormat extends NDFormat {
    static format(paramarg0: NDArray, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): string;
    static format(paramarg0: NDArray, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: boolean): string;
    constructor(arg0: any)
    // private exponential: boolean;
    // private precision: number;
    // private totalLength: number;
    format(arg0: Number): CharSequence;
    init(arg0: NDArray): void;
}