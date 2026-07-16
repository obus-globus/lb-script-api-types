import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ReferenceSet<K extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static of<K extends unknown>(): K[];
    static of<K extends unknown>(paramarg0: K): K[];
    static of<K extends unknown>(paramarg0: K, paramarg1: K): K[];
    static of<K extends unknown>(paramarg0: K, paramarg1: K, paramarg2: K): K[];
    static of<K extends unknown>(...paramarg0: K[]): K[];
}