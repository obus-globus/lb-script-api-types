import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface SourceSectionFilter$SourcePredicate extends Predicate<Source>, Object {
    and(arg0: (param0: Source) => boolean): (param0: Source) => boolean;
    negate(): (param0: Source) => boolean;
    or(arg0: (param0: Source) => boolean): (param0: Source) => boolean;
    test(source: Source): boolean;
}