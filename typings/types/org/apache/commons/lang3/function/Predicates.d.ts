import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Predicates extends Object {
    static falsePredicate(): (param0: Object | null) => kotlin.Boolean;
    static truePredicate(): (param0: Object | null) => kotlin.Boolean;
    private constructor()
}