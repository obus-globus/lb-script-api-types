import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Predicate } from '../../../../../../../org/spongepowered/include/com/google/common/base/Predicate.d.ts'
export class Predicates extends Object {
    static equalTo<T extends unknown>(paramarg0: T): (param0: T) => boolean;
    static in<T extends unknown>(paramarg0: T[]): (param0: T) => boolean;
    static isNull<T extends unknown>(): (param0: T) => boolean;
}