import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ObjectArrays extends Object {
    static concat<T extends unknown>(paramelement: T, paramarray: T[]): T[];
    static concat<T extends unknown>(paramarray: T[], paramelement: T): T[];
    static concat<T extends unknown>(paramfirst: T[], paramsecond: T[], paramtype: Class<T>): T[];
    static newArray<T extends unknown>(paramreference: T[], paramlength: number): T[];
    static newArray<T extends unknown>(paramtype: Class<T>, paramlength: number): T[];
    private constructor()
}