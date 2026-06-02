import type { ParsedNumber } from '../../../../../../com/ibm/icu/impl/number/parse/ParsedNumber.d.ts'
import type { ValidationMatcher } from '../../../../../../com/ibm/icu/impl/number/parse/ValidationMatcher.d.ts'
import type { Scale } from '../../../../../../com/ibm/icu/number/Scale.d.ts'
export class MultiplierParseHandler extends ValidationMatcher {
    constructor(arg0: Scale)
    // private multiplier: Scale;
    postProcess(arg0: ParsedNumber): void;
    toString(): string;
}