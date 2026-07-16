import type { Object } from '../../../../java/lang/Object.d.ts'
export class HashMultiset<E extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static create<E extends unknown>(): E[];
    static create<E extends unknown>(paramdistinctElements: number): E[];
    static create<E extends unknown>(paramelements: E[]): E[];
}