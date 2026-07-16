import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanArraySet {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static of(): (Object | null)[];
    static of(paramarg0: boolean): (Object | null)[];
    static of(...paramarg0: boolean[]): (Object | null)[];
    static ofUnchecked(): (Object | null)[];
    static ofUnchecked(...paramarg0: boolean[]): (Object | null)[];
}