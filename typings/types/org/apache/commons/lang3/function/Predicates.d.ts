import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Predicates extends Object {
    static falsePredicate<T extends unknown>(): (param0: T) => boolean;
    static truePredicate<T extends unknown>(): (param0: T) => boolean;
    private constructor()
}