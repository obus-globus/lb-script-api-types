import type { ParsedNumber } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/ParsedNumber.d.ts'
import type { ValidationMatcher } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/ValidationMatcher.d.ts'
export class RequireDecimalSeparatorValidator extends ValidationMatcher {
    static getInstance(parampatternHasDecimalSeparator: boolean): RequireDecimalSeparatorValidator;
    private constructor(patternHasDecimalSeparator: boolean)
    // private patternHasDecimalSeparator: boolean;
    postProcess(result: ParsedNumber): void;
    toString(): string;
}