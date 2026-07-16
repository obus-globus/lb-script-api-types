import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LithiumDoubleStackList {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static create<E extends unknown>(): E[];
    static createWithCapacity<E extends unknown>(paramcapacity: number): E[];
    static getOrCreate(paramarg0: (Object | null)[], paramarg1: (Object | null)[], paramarg2: (Object | null)[], paramarg3: (Object | null)[]): (Object | null)[];
    static of<E extends unknown>(paramdefaultValue: E, ...paramvalues: E[]): E[];
    static withSize<E extends unknown>(paramsize: number, paramdefaultValue: E): E[];
}