import type { Object } from '../../../java/lang/Object.d.ts'
export class NonNullList<E extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static create<E extends unknown>(): E[];
    static createWithCapacity<E extends unknown>(paramcapacity: number): E[];
    static of<E extends unknown>(paramdefaultValue: E, ...paramvalues: E[]): E[];
    static withSize<E extends unknown>(paramsize: number, paramdefaultValue: E): E[];
}