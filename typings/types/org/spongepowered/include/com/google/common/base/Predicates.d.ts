import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Predicate } from '../../../../../../../org/spongepowered/include/com/google/common/base/Predicate.d.ts'
export class Predicates extends Object {
    static equalTo(paramarg0: Object | null): (param0: Object | null) => boolean;
    static in(paramarg0: (Object | null)[]): (param0: Object | null) => boolean;
    static isNull(): (param0: Object | null) => boolean;
}