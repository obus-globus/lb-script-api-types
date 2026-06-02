import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class SearchIterator$ElementComparisonType extends Enum<SearchIterator$ElementComparisonType> {
    static ANY_BASE_WEIGHT_IS_WILDCARD: SearchIterator$ElementComparisonType;
    static PATTERN_BASE_WEIGHT_IS_WILDCARD: SearchIterator$ElementComparisonType;
    static STANDARD_ELEMENT_COMPARISON: SearchIterator$ElementComparisonType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): SearchIterator$ElementComparisonType;
    static values(): (Object | null)[];
    private constructor()
    name(): "STANDARD_ELEMENT_COMPARISON" | "PATTERN_BASE_WEIGHT_IS_WILDCARD" | "ANY_BASE_WEIGHT_IS_WILDCARD";
}