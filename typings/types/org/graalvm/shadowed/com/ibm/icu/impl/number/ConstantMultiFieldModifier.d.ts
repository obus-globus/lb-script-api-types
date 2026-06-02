import type { Format$Field } from '../../../../../../../../java/text/Format$Field.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { FormattedStringBuilder } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { Modifier } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Modifier.d.ts'
import type { Modifier$Parameters } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Modifier$Parameters.d.ts'
export class ConstantMultiFieldModifier extends Object implements Modifier {
    constructor(prefix: FormattedStringBuilder, suffix: FormattedStringBuilder, overwrite: boolean, strong: boolean)
    constructor(prefix: FormattedStringBuilder, suffix: FormattedStringBuilder, overwrite: boolean, strong: boolean, parameters: Modifier$Parameters)
    // private overwrite: boolean;
    readonly parameters: Modifier$Parameters;
    // private prefixChars: string[];
    // private prefixFields: Object[];
    readonly strong: boolean;
    // private suffixChars: string[];
    // private suffixFields: Object[];
    apply(output: FormattedStringBuilder, leftIndex: number, rightIndex: number): number;
    containsField(field: Format$Field): boolean;
    getCodePointCount(): number;
    getParameters(): Modifier$Parameters;
    getPrefixLength(): number;
    isStrong(): boolean;
    semanticallyEquivalent(other: Modifier): boolean;
    strictEquals(other: Modifier): boolean;
    toString(): string;
}