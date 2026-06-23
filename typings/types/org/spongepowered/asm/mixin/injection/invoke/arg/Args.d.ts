import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class Args extends Object {
    constructor(arg0: Object[])
    // private values: Object[];
    get<T extends unknown>(arg0: number): T;
    set<T extends unknown>(arg0: number, arg1: T): void;
    setAll(arg0: Object[]): void;
    size(): number;
}