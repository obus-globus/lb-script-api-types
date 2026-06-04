import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LookupResult } from '../../../../../../org/apache/logging/log4j/core/lookup/LookupResult.d.ts'
export class PropertiesLookup$ConfigurationPropertyResult extends Object implements LookupResult {
    constructor(value: string)
    // private value: string;
    isLookupEvaluationAllowedInValue(): boolean;
    toString(): string;
    value(): string;
}