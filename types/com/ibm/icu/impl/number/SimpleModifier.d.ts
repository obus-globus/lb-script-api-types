import type { FormattedStringBuilder } from '../../../../../com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { Modifier } from '../../../../../com/ibm/icu/impl/number/Modifier.d.ts'
import type { Modifier$Parameters } from '../../../../../com/ibm/icu/impl/number/Modifier$Parameters.d.ts'
import type { PrefixInfixSuffixLengthHelper } from '../../../../../com/ibm/icu/impl/number/range/PrefixInfixSuffixLengthHelper.d.ts'
import type { Format$Field } from '../../../../../java/text/Format$Field.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SimpleModifier extends Object implements Modifier {
    static formatTwoArgPattern(paramarg0: string, paramarg1: FormattedStringBuilder, paramarg2: number, paramarg3: PrefixInfixSuffixLengthHelper, paramarg4: Format$Field): void;
    constructor(arg0: string, arg1: Format$Field, arg2: boolean)
    constructor(arg0: string, arg1: Format$Field, arg2: boolean, arg3: Modifier$Parameters)
    // private compiledPattern: string;
    // private field: Format$Field;
    readonly parameters: Modifier$Parameters;
    readonly strong: boolean;
    apply(arg0: FormattedStringBuilder, arg1: number, arg2: number): number;
    containsField(arg0: Format$Field): boolean;
    getCodePointCount(): number;
    getParameters(): Modifier$Parameters;
    getPrefixLength(): number;
    isStrong(): boolean;
    semanticallyEquivalent(arg0: Modifier): boolean;
    strictEquals(arg0: Modifier): boolean;
}