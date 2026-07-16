import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { FailableIntFunction } from '../../../../org/apache/commons/lang3/function/FailableIntFunction.d.ts'
export class ArrayFill extends Object {
    static fill<T extends unknown, E extends Throwable>(paramarg0: T[], paramarg1: (param0: number) => T): T[];
    static fill<T extends unknown>(paramarg0: T[], paramarg1: T): T[];
    static fill(paramarg0: boolean[], paramarg1: boolean): boolean[];
    static fill(paramarg0: number[], paramarg1: number): number[];
    static fill(paramarg0: string[], paramarg1: string): string[];
    private constructor()
}