import type { Predicates$1 } from '../../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Predicate } from '../../../../../../../org/spongepowered/include/com/google/common/base/Predicate.d.ts'
export class Predicates$ObjectPredicate extends Enum<Predicates$ObjectPredicate> implements Predicate<Object> {
    static ALWAYS_FALSE: Predicates$ObjectPredicate;
    static ALWAYS_TRUE: Predicates$ObjectPredicate;
    static IS_NULL: Predicates$ObjectPredicate;
    static NOT_NULL: Predicates$ObjectPredicate;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Predicates$ObjectPredicate;
    static values(): (Object | null)[];
    private constructor()
    constructor(arg2: Predicates$1)
    test(arg0: Object): boolean;
    withNarrowedType<T extends unknown>(): (param0: T) => boolean;
    name(): "ALWAYS_TRUE" | "ALWAYS_FALSE" | "IS_NULL" | "NOT_NULL";
}