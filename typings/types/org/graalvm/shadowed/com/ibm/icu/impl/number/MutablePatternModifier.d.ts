import type { StringBuilder } from '../../../../../../../../java/lang/StringBuilder.d.ts'
import type { Format$Field } from '../../../../../../../../java/text/Format$Field.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../../java/lang/CharSequence.d.ts'
import type { FormattedStringBuilder } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { StandardPlural } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/StandardPlural.d.ts'
import type { AffixPatternProvider } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/AffixPatternProvider.d.ts'
import type { AffixUtils$SymbolProvider } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/AffixUtils$SymbolProvider.d.ts'
import type { ConstantMultiFieldModifier } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/ConstantMultiFieldModifier.d.ts'
import type { DecimalQuantity } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { MicroProps } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MicroProps.d.ts'
import type { MicroPropsGenerator } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MicroPropsGenerator.d.ts'
import type { Modifier } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Modifier.d.ts'
import type { Modifier$Parameters } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Modifier$Parameters.d.ts'
import type { Modifier$Signum } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Modifier$Signum.d.ts'
import type { MutablePatternModifier$ImmutablePatternModifier } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MutablePatternModifier$ImmutablePatternModifier.d.ts'
import type { NumberFormatter$SignDisplay } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/NumberFormatter$SignDisplay.d.ts'
import type { NumberFormatter$UnitWidth } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/NumberFormatter$UnitWidth.d.ts'
import type { DecimalFormatSymbols } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DecimalFormatSymbols.d.ts'
import type { NumberFormat$Field } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NumberFormat$Field.d.ts'
import type { PluralRules } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules.d.ts'
import type { Currency } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Currency.d.ts'
export class MutablePatternModifier extends Object implements AffixUtils$SymbolProvider, MicroPropsGenerator, Modifier {
    constructor(isStrong: boolean)
    // private approximately: boolean;
    // private currency: Currency;
    // private currentAffix: StringBuilder;
    // private field: NumberFormat$Field;
    // private isStrong: boolean;
    // private parent: MicroPropsGenerator;
    // private patternInfo: AffixPatternProvider;
    // private perMilleReplacesPercent: boolean;
    // private plural: StandardPlural;
    // private rules: PluralRules;
    // private signDisplay: NumberFormatter$SignDisplay;
    // private signum: Modifier$Signum;
    // private symbols: DecimalFormatSymbols;
    // private unitWidth: NumberFormatter$UnitWidth;
    addToChain(parent: MicroPropsGenerator): MicroPropsGenerator;
    apply(output: FormattedStringBuilder, leftIndex: number, rightIndex: number): number;
    containsField(field: Format$Field): boolean;
    // private createConstantModifier(a: FormattedStringBuilder, b: FormattedStringBuilder): ConstantMultiFieldModifier;
    createImmutable(): MutablePatternModifier$ImmutablePatternModifier;
    getCodePointCount(): number;
    getCurrencySymbolForUnitWidth(): string;
    getParameters(): Modifier$Parameters;
    getPrefixLength(): number;
    getSymbol(type: number): CharSequence;
    // private insertPrefix(sb: FormattedStringBuilder, position: number): number;
    // private insertSuffix(sb: FormattedStringBuilder, position: number): number;
    isStrong(): boolean;
    needsPlurals(): boolean;
    // private prepareAffix(isPrefix: boolean): void;
    processQuantity(fq: DecimalQuantity): MicroProps;
    semanticallyEquivalent(other: Modifier): boolean;
    setNumberProperties(signum: Modifier$Signum, plural: StandardPlural): void;
    setPatternAttributes(signDisplay: NumberFormatter$SignDisplay, perMille: boolean, approximately: boolean): void;
    setPatternInfo(patternInfo: AffixPatternProvider, field: NumberFormat$Field): void;
    setSymbols(symbols: DecimalFormatSymbols, currency: Currency, unitWidth: NumberFormatter$UnitWidth, rules: PluralRules): void;
    strictEquals(other: Modifier): boolean;
}