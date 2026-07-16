import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleList {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static of(): (Object | null)[];
    static of(paramarg0: number): (Object | null)[];
    static of(paramarg0: number, paramarg1: number): (Object | null)[];
    static of(paramarg0: number, paramarg1: number, paramarg2: number): (Object | null)[];
    static of(...paramarg0: number[]): (Object | null)[];
}