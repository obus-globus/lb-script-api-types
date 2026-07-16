import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ObjectArrays extends Object {
    static concat<T extends unknown>(paramarg0: T, paramarg1: T[]): T[];
    static concat<T extends unknown>(paramarg0: T[], paramarg1: T): T[];
    static concat<T extends unknown>(paramarg0: T[], paramarg1: T[], paramarg2: Class<T>): T[];
    static newArray<T extends unknown>(paramarg0: T[], paramarg1: number): T[];
    static newArray<T extends unknown>(paramarg0: Class<T>, paramarg1: number): T[];
}