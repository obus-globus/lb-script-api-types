import type { Object } from '../../../../java/lang/Object.d.ts'
export class EmptyPriorityQueue<T extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static instance<V extends unknown>(): V[];
}