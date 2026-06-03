import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class Equivalence extends Object {
    static DEFAULT: Equivalence;
    static IDENTITY: Equivalence;
    static IDENTITY_WITH_SYSTEM_HASHCODE: Equivalence;
    constructor()
    equals(a: Object, b: Object): boolean;
    equals(other: Object | null): boolean;
    hashCode(): number;
    hashCode(o: Object): number;
}