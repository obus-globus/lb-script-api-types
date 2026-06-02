import type { FormattedStringBuilder } from '../../../../../com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { Modifier$Parameters } from '../../../../../com/ibm/icu/impl/number/Modifier$Parameters.d.ts'
import type { Format$Field } from '../../../../../java/text/Format$Field.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Modifier extends Object{
    apply(arg0: FormattedStringBuilder, arg1: number, arg2: number): number;
    containsField(arg0: Format$Field): boolean;
    getCodePointCount(): number;
    getParameters(): Modifier$Parameters;
    getPrefixLength(): number;
    isStrong(): boolean;
    semanticallyEquivalent(arg0: Modifier): boolean;
    strictEquals(arg0: Modifier): boolean;
}