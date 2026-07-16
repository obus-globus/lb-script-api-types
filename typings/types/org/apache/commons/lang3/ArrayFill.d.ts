import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FailableIntFunction } from '../../../../org/apache/commons/lang3/function/FailableIntFunction.d.ts'
export class ArrayFill extends Object {
    static fill(paramarg0: (Object | null)[], paramarg1: (param0: number) => Object | null): (Object | null)[];
    static fill(paramarg0: (Object | null)[], paramarg1: Object | null): (Object | null)[];
    static fill(paramarg0: boolean[], paramarg1: boolean): boolean[];
    static fill(paramarg0: number[], paramarg1: number): number[];
    static fill(paramarg0: string[], paramarg1: string): string[];
    private constructor()
}