import type { Format$Field } from '../../../../../../../java/text/Format$Field.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FormattedStringBuilder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { DecimalQuantity } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { MicroProps } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MicroProps.d.ts'
import type { MicroPropsGenerator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MicroPropsGenerator.d.ts'
import type { Modifier } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Modifier.d.ts'
import type { Modifier$Parameters } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Modifier$Parameters.d.ts'
import type { MultiplierProducer } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MultiplierProducer.d.ts'
import type { ScientificNotation } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/ScientificNotation.d.ts'
import type { ScientificNotation$ScientificModifier } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/ScientificNotation$ScientificModifier.d.ts'
import type { DecimalFormatSymbols } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DecimalFormatSymbols.d.ts'
export class ScientificNotation$ScientificHandler extends Object implements MicroPropsGenerator, Modifier, MultiplierProducer {
    private constructor(notation: ScientificNotation, symbols: DecimalFormatSymbols, safe: boolean, parent: MicroPropsGenerator)
    // private exponent: number;
    // private notation: ScientificNotation;
    // private parent: MicroPropsGenerator;
    // private precomputedMods: ScientificNotation$ScientificModifier[];
    // private symbols: DecimalFormatSymbols;
    apply(output: FormattedStringBuilder, leftIndex: number, rightIndex: number): number;
    containsField(field: Format$Field): boolean;
    // private doApply(exponent: number, output: FormattedStringBuilder, rightIndex: number): number;
    getCodePointCount(): number;
    getMultiplier(magnitude: number): number;
    getParameters(): Modifier$Parameters;
    getPrefixLength(): number;
    isStrong(): boolean;
    processQuantity(quantity: DecimalQuantity): MicroProps;
    semanticallyEquivalent(other: Modifier): boolean;
    strictEquals(other: Modifier): boolean;
}