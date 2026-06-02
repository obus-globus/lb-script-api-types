import type { ParsedNumber } from '../../../../../../com/ibm/icu/impl/number/parse/ParsedNumber.d.ts'
import type { ValidationMatcher } from '../../../../../../com/ibm/icu/impl/number/parse/ValidationMatcher.d.ts'
export class RequireDecimalSeparatorValidator extends ValidationMatcher {
    static getInstance(paramarg0: boolean): RequireDecimalSeparatorValidator;
    private constructor(arg0: boolean)
    // private patternHasDecimalSeparator: boolean;
    postProcess(arg0: ParsedNumber): void;
    toString(): string;
}