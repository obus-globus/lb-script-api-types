import type { Object } from '../../java/lang/Object.d.ts'
import type { Function2 } from '../../kotlin/jvm/functions/Function2.d.ts'
import type { Function3 } from '../../kotlin/jvm/functions/Function3.d.ts'
import type { Function4 } from '../../kotlin/jvm/functions/Function4.d.ts'
import type { Grouping } from '../../kotlin/collections/Grouping.d.ts'
import type { GroupingKt__GroupingJVMKt } from '../../kotlin/collections/GroupingKt__GroupingJVMKt.d.ts'
export class GroupingKt__GroupingKt extends GroupingKt__GroupingJVMKt {
    static aggregate(paramarg0: Grouping<Object, Object>, paramarg1: Function4<Object, Object, Object, Object, Object>): Map<Object | null, Object | null>;
    static aggregateTo(paramarg0: Grouping<Object, Object>, paramarg1: Object | null, paramarg2: Function4<Object, Object, Object, Object, Object>): Object | null;
    static eachCount(paramarg0: Grouping<Object, Object>): Map<Object | null, number>;
    static eachCountTo(paramarg0: Grouping<Object, Object>, paramarg1: Object | null): Object | null;
    static fold(paramarg0: Grouping<Object, Object>, paramarg1: Object | null, paramarg2: Function2<Object, Object, Object>): Map<Object | null, Object | null>;
    static fold(paramarg0: Grouping<Object, Object>, paramarg1: Function2<Object, Object, Object>, paramarg2: Function3<Object, Object, Object, Object>): Map<Object | null, Object | null>;
    static foldTo(paramarg0: Grouping<Object, Object>, paramarg1: Object | null, paramarg2: Object | null, paramarg3: Function2<Object, Object, Object>): Object | null;
    static foldTo(paramarg0: Grouping<Object, Object>, paramarg1: Object | null, paramarg2: Function2<Object, Object, Object>, paramarg3: Function3<Object, Object, Object, Object>): Object | null;
    static reduce(paramarg0: Grouping<Object, Object>, paramarg1: Function3<Object, Object, Object, Object>): Map<Object | null, Object | null>;
    static reduceTo(paramarg0: Grouping<Object, Object>, paramarg1: Object | null, paramarg2: Function3<Object, Object, Object, Object>): Object | null;
}