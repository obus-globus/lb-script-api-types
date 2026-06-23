import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class Filterable<T extends unknown> extends Object {
    constructor(arg0: T, arg1: T)
    // private raw: T;
    filtered(): T;
    get(): T;
    isFiltered(): boolean;
    raw(): T;
}