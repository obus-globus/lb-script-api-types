import type { FormattedStringBuilder } from '../../../../../com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { Modifier } from '../../../../../com/ibm/icu/impl/number/Modifier.d.ts'
import type { Modifier$Parameters } from '../../../../../com/ibm/icu/impl/number/Modifier$Parameters.d.ts'
import type { Format$Field } from '../../../../../java/text/Format$Field.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ConstantAffixModifier extends Object implements Modifier {
    static EMPTY: ConstantAffixModifier;
    constructor()
    constructor(arg0: string, arg1: string, arg2: Format$Field, arg3: boolean)
    // private field: Format$Field;
    // private prefix: string;
    readonly strong: boolean;
    // private suffix: string;
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