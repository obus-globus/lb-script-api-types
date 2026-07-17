import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDFormat } from '../../../../ai/djl/ndarray/internal/NDFormat.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class NDFormat$StringFormat extends NDFormat {
    static format(paramarg0: NDArray, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): string;
    static format(paramarg0: NDArray, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: boolean): string;
    private constructor()
    dump(arg0: StringBuilder, arg1: NDArray, arg2: number, arg3: number, arg4: number, arg5: number): string;
    format(arg0: Number): CharSequence;
}