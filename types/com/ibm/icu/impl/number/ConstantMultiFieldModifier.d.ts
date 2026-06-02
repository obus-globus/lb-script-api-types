import type { FormattedStringBuilder } from '../../../../../com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { Modifier } from '../../../../../com/ibm/icu/impl/number/Modifier.d.ts'
import type { Modifier$Parameters } from '../../../../../com/ibm/icu/impl/number/Modifier$Parameters.d.ts'
import type { Format$Field } from '../../../../../java/text/Format$Field.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ConstantMultiFieldModifier extends Object implements Modifier {
    constructor(arg0: FormattedStringBuilder, arg1: FormattedStringBuilder, arg2: boolean, arg3: boolean)
    constructor(arg0: FormattedStringBuilder, arg1: FormattedStringBuilder, arg2: boolean, arg3: boolean, arg4: Modifier$Parameters)
    // private overwrite: boolean;
    readonly parameters: Modifier$Parameters;
    // private prefixChars: string[];
    // private prefixFields: Object[];
    readonly strong: boolean;
    // private suffixChars: string[];
    // private suffixFields: Object[];
    apply(arg0: FormattedStringBuilder, arg1: number, arg2: number): number;
    containsField(arg0: Format$Field): boolean;
    getCodePointCount(): number;
    getParameters(): Modifier$Parameters;
    getPrefixLength(): number;
    isStrong(): boolean;
    semanticallyEquivalent(arg0: Modifier): boolean;
    strictEquals(arg0: Modifier): boolean;
    toString(): string;
}