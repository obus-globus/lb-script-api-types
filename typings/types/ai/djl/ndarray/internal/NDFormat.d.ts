import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export abstract class NDFormat extends Object {
    static format(paramarg0: NDArray, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): string;
    static format(paramarg0: NDArray, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: boolean): string;
    constructor()
    // private append(arg0: StringBuilder, arg1: Number[], arg2: number): void;
    // private dump(arg0: StringBuilder, arg1: NDArray, arg2: number, arg3: boolean, arg4: number, arg5: number): void;
    dump(arg0: StringBuilder, arg1: NDArray, arg2: number, arg3: number, arg4: number, arg5: number): string;
    // private dumpFlat(arg0: StringBuilder, arg1: NDArray, arg2: number): void;
    format(arg0: Number): CharSequence;
    init(arg0: NDArray): void;
}