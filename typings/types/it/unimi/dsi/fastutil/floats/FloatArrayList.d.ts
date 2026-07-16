import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FloatArrayList {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static DEFAULT_INITIAL_CAPACITY: number;
    static of(): (Object | null)[];
    static of(...paramarg0: number[]): (Object | null)[];
    static wrap(paramarg0: number[]): (Object | null)[];
    static wrap(paramarg0: number[], paramarg1: number): (Object | null)[];
}