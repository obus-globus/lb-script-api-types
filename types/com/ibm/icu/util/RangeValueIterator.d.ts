import type { RangeValueIterator$Element } from '../../../../com/ibm/icu/util/RangeValueIterator$Element.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface RangeValueIterator extends Object{
    next(arg0: RangeValueIterator$Element): boolean;
    reset(): void;
}