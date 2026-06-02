import type { Format$Field } from '../../../../../../../java/text/Format$Field.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FormattedStringBuilder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { Modifier } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Modifier.d.ts'
import type { Modifier$Parameters } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Modifier$Parameters.d.ts'
import type { ScientificNotation$ScientificHandler } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/ScientificNotation$ScientificHandler.d.ts'
export class ScientificNotation$ScientificModifier extends Object implements Modifier {
    constructor(exponent: number, handler: ScientificNotation$ScientificHandler)
    // private exponent: number;
    // private handler: ScientificNotation$ScientificHandler;
    apply(output: FormattedStringBuilder, leftIndex: number, rightIndex: number): number;
    containsField(field: Format$Field): boolean;
    getCodePointCount(): number;
    getParameters(): Modifier$Parameters;
    getPrefixLength(): number;
    isStrong(): boolean;
    semanticallyEquivalent(other: Modifier): boolean;
    strictEquals(other: Modifier): boolean;
}