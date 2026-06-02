import type { ParsedNumber } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/ParsedNumber.d.ts'
import type { ValidationMatcher } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/ValidationMatcher.d.ts'
export class RequireAffixValidator extends ValidationMatcher {
    constructor()
    postProcess(result: ParsedNumber): void;
    toString(): string;
}