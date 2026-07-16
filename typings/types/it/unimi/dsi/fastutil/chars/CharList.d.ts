import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharList {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static of(): (Object | null)[];
    static of(paramarg0: string): (Object | null)[];
    static of(paramarg0: string, paramarg1: string): (Object | null)[];
    static of(paramarg0: string, paramarg1: string, paramarg2: string): (Object | null)[];
    static of(...paramarg0: string[]): (Object | null)[];
}