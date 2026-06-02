import type { ParsedNumber } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/ParsedNumber.d.ts'
import type { ValidationMatcher } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/ValidationMatcher.d.ts'
import type { Scale } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/Scale.d.ts'
export class MultiplierParseHandler extends ValidationMatcher {
    constructor(multiplier: Scale)
    // private multiplier: Scale;
    postProcess(result: ParsedNumber): void;
    toString(): string;
}