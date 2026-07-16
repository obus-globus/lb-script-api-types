import type { Object } from '../../../../java/lang/Object.d.ts'
export class ArrayUtil extends Object {
    static add<T extends unknown>(paramarg0: T[], paramarg1: T): T[];
    static add<T extends unknown>(paramarg0: T[], ...paramarg1: T[]): T[];
    static boxedArray(paramarg0: boolean[]): boolean[];
    static boxedArray(paramarg0: number[]): number[];
    static remove<T extends unknown>(paramarg0: T[], paramarg1: number): T[];
    static toString(paramarg0: Object): string;
    constructor()
}