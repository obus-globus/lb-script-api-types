import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Predicate } from '../../../../../../../org/spongepowered/include/com/google/common/base/Predicate.d.ts'
export class Predicates$ObjectPredicate extends Enum<Predicates$ObjectPredicate> implements Predicate<Object> {
    static ALWAYS_FALSE: Predicates$ObjectPredicate;
    static ALWAYS_TRUE: Predicates$ObjectPredicate;
    static IS_NULL: Predicates$ObjectPredicate;
    static NOT_NULL: Predicates$ObjectPredicate;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Predicates$ObjectPredicate;
    static values(): Predicates$ObjectPredicate[];
    constructor(arg2: any)
    test(arg0: Object): boolean;
    withNarrowedType<T extends unknown>(): (param0: T) => boolean;
    name(): "ALWAYS_TRUE" | "ALWAYS_FALSE" | "IS_NULL" | "NOT_NULL";
}