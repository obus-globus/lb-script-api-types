import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanList {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static of(): (Object | null)[];
    static of(paramarg0: boolean): (Object | null)[];
    static of(paramarg0: boolean, paramarg1: boolean): (Object | null)[];
    static of(paramarg0: boolean, paramarg1: boolean, paramarg2: boolean): (Object | null)[];
    static of(...paramarg0: boolean[]): (Object | null)[];
}