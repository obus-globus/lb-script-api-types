import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class EntityPushablePredicate<S extends Object | number | string | boolean> extends Object implements Predicate<S> {
    static and(paramarg0: (param0: Object) => boolean, paramarg1: (param0: Object) => boolean): (param0: Object | null) => boolean;
    static isEqual(paramarg0: Object): (param0: Object | null) => boolean;
    static not(paramarg0: (param0: Object) => boolean): (param0: Object | null) => boolean;
    constructor()
    and(arg0: (param0: S) => boolean): (param0: S) => boolean;
    negate(): (param0: S) => boolean;
    or(arg0: (param0: S) => boolean): (param0: S) => boolean;
}