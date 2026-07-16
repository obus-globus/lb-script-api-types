import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class SearchIterator$ElementComparisonType extends Enum<SearchIterator$ElementComparisonType> {
    static ANY_BASE_WEIGHT_IS_WILDCARD: SearchIterator$ElementComparisonType;
    static PATTERN_BASE_WEIGHT_IS_WILDCARD: SearchIterator$ElementComparisonType;
    static STANDARD_ELEMENT_COMPARISON: SearchIterator$ElementComparisonType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SearchIterator$ElementComparisonType;
    static values(): SearchIterator$ElementComparisonType[];
    private constructor()
    name(): "STANDARD_ELEMENT_COMPARISON" | "PATTERN_BASE_WEIGHT_IS_WILDCARD" | "ANY_BASE_WEIGHT_IS_WILDCARD";
}