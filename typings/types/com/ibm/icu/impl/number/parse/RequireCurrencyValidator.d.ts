import type { ParsedNumber } from '../../../../../../com/ibm/icu/impl/number/parse/ParsedNumber.d.ts'
import type { ValidationMatcher } from '../../../../../../com/ibm/icu/impl/number/parse/ValidationMatcher.d.ts'
export class RequireCurrencyValidator extends ValidationMatcher {
    constructor()
    postProcess(arg0: ParsedNumber): void;
    toString(): string;
}