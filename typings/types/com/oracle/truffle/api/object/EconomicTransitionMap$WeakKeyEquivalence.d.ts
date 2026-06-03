import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Equivalence } from '../../../../../org/graalvm/collections/Equivalence.d.ts'
export class EconomicTransitionMap$WeakKeyEquivalence extends Equivalence {
    static DEFAULT: Equivalence;
    static IDENTITY: Equivalence;
    static IDENTITY_WITH_SYSTEM_HASHCODE: Equivalence;
    private constructor()
    equals(a: Object, b: Object): boolean;
    equals(other: Object | null): boolean;
    hashCode(): number;
    hashCode(o: Object): number;
}