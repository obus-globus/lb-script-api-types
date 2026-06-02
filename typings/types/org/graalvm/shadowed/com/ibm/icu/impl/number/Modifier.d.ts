import type { Format$Field } from '../../../../../../../../java/text/Format$Field.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { FormattedStringBuilder } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { Modifier$Parameters } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Modifier$Parameters.d.ts'
export interface Modifier extends Object{
    apply(output: FormattedStringBuilder, leftIndex: number, rightIndex: number): number;
    containsField(currency: Format$Field): boolean;
    getCodePointCount(): number;
    getParameters(): Modifier$Parameters;
    getPrefixLength(): number;
    isStrong(): boolean;
    semanticallyEquivalent(other: Modifier): boolean;
    strictEquals(other: Modifier): boolean;
}