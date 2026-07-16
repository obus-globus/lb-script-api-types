import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ReferenceArraySet<K extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static of<K extends unknown>(): K[];
    static of<K extends unknown>(paramarg0: K): K[];
    static of<K extends unknown>(...paramarg0: K[]): K[];
    static ofUnchecked<K extends unknown>(): K[];
    static ofUnchecked<K extends unknown>(...paramarg0: K[]): K[];
}