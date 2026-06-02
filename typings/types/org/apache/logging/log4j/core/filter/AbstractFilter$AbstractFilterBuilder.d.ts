import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Filter$Result } from '../../../../../../org/apache/logging/log4j/core/Filter$Result.d.ts'
export abstract class AbstractFilter$AbstractFilterBuilder<B extends AbstractFilter$AbstractFilterBuilder<B>> extends Object {
    static ATTR_ON_MATCH: string;
    static ATTR_ON_MISMATCH: string;
    constructor()
    readonly onMatch: Filter$Result;
    readonly onMismatch: Filter$Result;
    asBuilder(): B;
    getOnMatch(): Filter$Result;
    getOnMismatch(): Filter$Result;
    setOnMatch(onMatch: Filter$Result): B;
    setOnMismatch(onMismatch: Filter$Result): B;
}