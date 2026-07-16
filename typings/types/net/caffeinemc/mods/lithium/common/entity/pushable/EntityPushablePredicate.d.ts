import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class EntityPushablePredicate<S extends unknown> extends Object implements Predicate<S> {
    static and<T extends unknown>(paramarg0: (param0: Object) => boolean, paramarg1: (param0: Object) => boolean): (param0: T) => boolean;
    static isEqual<T extends unknown>(paramarg0: Object): (param0: T) => boolean;
    static not<T extends unknown>(paramarg0: (param0: Object) => boolean): (param0: T) => boolean;
    constructor()
    and(arg0: (param0: S) => boolean): (param0: S) => boolean;
    negate(): (param0: S) => boolean;
    or(arg0: (param0: S) => boolean): (param0: S) => boolean;
}