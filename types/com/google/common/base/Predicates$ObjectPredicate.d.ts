import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Predicates$ObjectPredicate extends Enum<Predicates$ObjectPredicate> implements Predicate<Object> {
    static ALWAYS_FALSE: Predicates$ObjectPredicate;
    static ALWAYS_TRUE: Predicates$ObjectPredicate;
    static IS_NULL: Predicates$ObjectPredicate;
    static NOT_NULL: Predicates$ObjectPredicate;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Predicates$ObjectPredicate;
    static values(): (Object | null)[];
    private constructor()
    test<T extends Object | number | string | boolean>(input: T): boolean;
    withNarrowedType(): (param0: T) => kotlin.Boolean;
    name(): "ALWAYS_TRUE" | "ALWAYS_FALSE" | "IS_NULL" | "NOT_NULL";
}