import type { FormattedStringBuilder } from '../../../../../com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { StandardPlural } from '../../../../../com/ibm/icu/impl/StandardPlural.d.ts'
import type { AffixPatternProvider } from '../../../../../com/ibm/icu/impl/number/AffixPatternProvider.d.ts'
import type { AffixUtils$SymbolProvider } from '../../../../../com/ibm/icu/impl/number/AffixUtils$SymbolProvider.d.ts'
import type { ConstantMultiFieldModifier } from '../../../../../com/ibm/icu/impl/number/ConstantMultiFieldModifier.d.ts'
import type { DecimalQuantity } from '../../../../../com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { MicroProps } from '../../../../../com/ibm/icu/impl/number/MicroProps.d.ts'
import type { MicroPropsGenerator } from '../../../../../com/ibm/icu/impl/number/MicroPropsGenerator.d.ts'
import type { Modifier } from '../../../../../com/ibm/icu/impl/number/Modifier.d.ts'
import type { Modifier$Parameters } from '../../../../../com/ibm/icu/impl/number/Modifier$Parameters.d.ts'
import type { Modifier$Signum } from '../../../../../com/ibm/icu/impl/number/Modifier$Signum.d.ts'
import type { MutablePatternModifier$ImmutablePatternModifier } from '../../../../../com/ibm/icu/impl/number/MutablePatternModifier$ImmutablePatternModifier.d.ts'
import type { NumberFormatter$SignDisplay } from '../../../../../com/ibm/icu/number/NumberFormatter$SignDisplay.d.ts'
import type { NumberFormatter$UnitWidth } from '../../../../../com/ibm/icu/number/NumberFormatter$UnitWidth.d.ts'
import type { DecimalFormatSymbols } from '../../../../../com/ibm/icu/text/DecimalFormatSymbols.d.ts'
import type { NumberFormat$Field } from '../../../../../com/ibm/icu/text/NumberFormat$Field.d.ts'
import type { PluralRules } from '../../../../../com/ibm/icu/text/PluralRules.d.ts'
import type { Currency } from '../../../../../com/ibm/icu/util/Currency.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Format$Field } from '../../../../../java/text/Format$Field.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class MutablePatternModifier extends Object implements AffixUtils$SymbolProvider, MicroPropsGenerator, Modifier {
    constructor(arg0: boolean)
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
    addToChain(arg0: MicroPropsGenerator): MicroPropsGenerator;
    apply(arg0: FormattedStringBuilder, arg1: number, arg2: number): number;
    containsField(arg0: Format$Field): boolean;
    // private createConstantModifier(arg0: FormattedStringBuilder, arg1: FormattedStringBuilder): ConstantMultiFieldModifier;
    createImmutable(): MutablePatternModifier$ImmutablePatternModifier;
    getCodePointCount(): number;
    getCurrencySymbolForUnitWidth(): string;
    getParameters(): Modifier$Parameters;
    getPrefixLength(): number;
    getSymbol(arg0: number): CharSequence;
    // private insertPrefix(arg0: FormattedStringBuilder, arg1: number): number;
    // private insertSuffix(arg0: FormattedStringBuilder, arg1: number): number;
    isStrong(): boolean;
    needsPlurals(): boolean;
    // private prepareAffix(arg0: boolean): void;
    processQuantity(arg0: DecimalQuantity): MicroProps;
    semanticallyEquivalent(arg0: Modifier): boolean;
    setNumberProperties(arg0: Modifier$Signum, arg1: StandardPlural): void;
    setPatternAttributes(arg0: NumberFormatter$SignDisplay, arg1: boolean, arg2: boolean): void;
    setPatternInfo(arg0: AffixPatternProvider, arg1: NumberFormat$Field): void;
    setSymbols(arg0: DecimalFormatSymbols, arg1: Currency, arg2: NumberFormatter$UnitWidth, arg3: PluralRules): void;
    strictEquals(arg0: Modifier): boolean;
}