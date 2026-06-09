import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface IOComparator<T extends Object | number | string | boolean> extends Object {
    asComparator(): (param0: T) => kotlin.Boolean;
    compare(arg0: T, arg1: T): number;
}