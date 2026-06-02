import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RangeValueIterator$Element } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/RangeValueIterator$Element.d.ts'
export interface RangeValueIterator extends Object{
    next(element: RangeValueIterator$Element): boolean;
    reset(): void;
}