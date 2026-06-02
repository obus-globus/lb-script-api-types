import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class SortedSetRelation extends Object {
    static A: number;
    static ADDALL: number;
    static ANY: number;
    static A_AND_B: number;
    static A_NOT_B: number;
    static B: number;
    static B_NOT_A: number;
    static B_REMOVEALL: number;
    static COMPLEMENTALL: number;
    static CONTAINS: number;
    static DISJOINT: number;
    static EQUALS: number;
    static ISCONTAINED: number;
    static NONE: number;
    static NO_A: number;
    static NO_B: number;
    static REMOVEALL: number;
    static RETAINALL: number;
    static doOperation(parama: (Object | null)[], paramrelation: number, paramb: (Object | null)[]): (Object | null)[];
    static hasRelation(parama: (Object | null)[], paramallow: number, paramb: (Object | null)[]): boolean;
    constructor()
}