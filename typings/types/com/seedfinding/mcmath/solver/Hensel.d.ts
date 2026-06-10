import type { LongUnaryOperator } from '../../../../java/util/function/LongUnaryOperator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Hensel extends Object {
    static lift(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: (param0: number) => number, paramarg6: Object | null): Object | null;
    static lift(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: (param0: number) => number): number[];
    static simpleLift(paramarg0: number, paramarg1: number, paramarg2: (param0: number) => number, paramarg3: Object | null): Object | null;
    static simpleLift(paramarg0: number, paramarg1: number, paramarg2: (param0: number) => number): number[];
    constructor()
}