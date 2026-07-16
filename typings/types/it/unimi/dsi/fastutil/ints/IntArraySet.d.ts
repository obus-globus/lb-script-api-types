import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IntArraySet {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static of(): (Object | null)[];
    static of(paramarg0: number): (Object | null)[];
    static of(...paramarg0: number[]): (Object | null)[];
    static ofUnchecked(): (Object | null)[];
    static ofUnchecked(...paramarg0: number[]): (Object | null)[];
}