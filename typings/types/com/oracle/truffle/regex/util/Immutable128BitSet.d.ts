import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Immutable128BitSet {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static create(...paramvalues: number[]): (Object | null)[];
    static createDirect(paramlo: number, paramhi: number): (Object | null)[];
    static getEmpty(): (Object | null)[];
    static getFull(): (Object | null)[];
}