import type { Object } from '../../java/lang/Object.d.ts'
import type { Grouping } from '../../kotlin/collections/Grouping.d.ts'
import type { GroupingKt__GroupingKt } from '../../kotlin/collections/GroupingKt__GroupingKt.d.ts'
export class GroupingKt extends GroupingKt__GroupingKt {
    static aggregate(paramarg0: Grouping<Object, Object>, paramarg1: (param0: Object | null, param1: Object | null, param2: Object | null, param3: Object | null) => Object | null): Map<Object | null, Object | null>;
    static aggregateTo(paramarg0: Grouping<Object, Object>, paramarg1: Object | null, paramarg2: (param0: Object | null, param1: Object | null, param2: Object | null, param3: Object | null) => Object | null): Object | null;
    static eachCount(paramarg0: Grouping<Object, Object>): Map<Object | null, number>;
    static eachCountTo(paramarg0: Grouping<Object, Object>, paramarg1: Object | null): Object | null;
    static fold(paramarg0: Grouping<Object, Object>, paramarg1: Object | null, paramarg2: (param0: Object | null, param1: Object | null) => Object | null): Map<Object | null, Object | null>;
    static fold(paramarg0: Grouping<Object, Object>, paramarg1: (param0: Object | null, param1: Object | null) => Object | null, paramarg2: (param0: Object | null, param1: Object | null, param2: Object | null) => Object | null): Map<Object | null, Object | null>;
    static foldTo(paramarg0: Grouping<Object, Object>, paramarg1: Object | null, paramarg2: Object | null, paramarg3: (param0: Object | null, param1: Object | null) => Object | null): Object | null;
    static foldTo(paramarg0: Grouping<Object, Object>, paramarg1: Object | null, paramarg2: (param0: Object | null, param1: Object | null) => Object | null, paramarg3: (param0: Object | null, param1: Object | null, param2: Object | null) => Object | null): Object | null;
    static reduce(paramarg0: Grouping<Object, Object>, paramarg1: (param0: Object | null, param1: Object | null, param2: Object | null) => Object | null): Map<Object | null, Object | null>;
    static reduceTo(paramarg0: Grouping<Object, Object>, paramarg1: Object | null, paramarg2: (param0: Object | null, param1: Object | null, param2: Object | null) => Object | null): Object | null;
}