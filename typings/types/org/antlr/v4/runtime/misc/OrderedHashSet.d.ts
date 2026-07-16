import type { Object } from '../../../../../java/lang/Object.d.ts'
export class OrderedHashSet<T extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static newHashSet<T extends unknown>(paramarg0: number): T[];
    static newLinkedHashSet<T extends unknown>(paramarg0: number): T[];
}