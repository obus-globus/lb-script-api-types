import type { FormattedStringBuilder } from '../../../../com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { DecimalQuantity } from '../../../../com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { MicroProps } from '../../../../com/ibm/icu/impl/number/MicroProps.d.ts'
import type { MicroPropsGenerator } from '../../../../com/ibm/icu/impl/number/MicroPropsGenerator.d.ts'
import type { Modifier } from '../../../../com/ibm/icu/impl/number/Modifier.d.ts'
import type { Modifier$Parameters } from '../../../../com/ibm/icu/impl/number/Modifier$Parameters.d.ts'
import type { MultiplierProducer } from '../../../../com/ibm/icu/impl/number/MultiplierProducer.d.ts'
import type { ScientificNotation } from '../../../../com/ibm/icu/number/ScientificNotation.d.ts'
import type { ScientificNotation$ScientificModifier } from '../../../../com/ibm/icu/number/ScientificNotation$ScientificModifier.d.ts'
import type { DecimalFormatSymbols } from '../../../../com/ibm/icu/text/DecimalFormatSymbols.d.ts'
import type { Format$Field } from '../../../../java/text/Format$Field.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ScientificNotation$ScientificHandler extends Object implements MicroPropsGenerator, Modifier, MultiplierProducer {
    private constructor(arg0: ScientificNotation, arg1: DecimalFormatSymbols, arg2: boolean, arg3: MicroPropsGenerator)
    // private exponent: number;
    // private notation: ScientificNotation;
    // private parent: MicroPropsGenerator;
    // private precomputedMods: ScientificNotation$ScientificModifier[];
    // private symbols: DecimalFormatSymbols;
    apply(arg0: FormattedStringBuilder, arg1: number, arg2: number): number;
    containsField(arg0: Format$Field): boolean;
    // private doApply(arg0: number, arg1: FormattedStringBuilder, arg2: number): number;
    getCodePointCount(): number;
    getMultiplier(arg0: number): number;
    getParameters(): Modifier$Parameters;
    getPrefixLength(): number;
    isStrong(): boolean;
    processQuantity(arg0: DecimalQuantity): MicroProps;
    semanticallyEquivalent(arg0: Modifier): boolean;
    strictEquals(arg0: Modifier): boolean;
}