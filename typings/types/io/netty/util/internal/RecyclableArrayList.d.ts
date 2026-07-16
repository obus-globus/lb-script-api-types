import type { Object } from '../../../../java/lang/Object.d.ts'
export class RecyclableArrayList {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static newInstance(): (Object | null)[];
    static newInstance(paramarg0: number): (Object | null)[];
}