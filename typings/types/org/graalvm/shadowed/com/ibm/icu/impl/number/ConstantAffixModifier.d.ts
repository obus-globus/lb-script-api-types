import type { Format$Field } from '../../../../../../../../java/text/Format$Field.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { FormattedStringBuilder } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { Modifier } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Modifier.d.ts'
import type { Modifier$Parameters } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Modifier$Parameters.d.ts'
export class ConstantAffixModifier extends Object implements Modifier {
    static EMPTY: ConstantAffixModifier;
    constructor()
    constructor(prefix: string, suffix: string, field: Format$Field, strong: boolean)
    // private field: Format$Field;
    // private prefix: string;
    readonly strong: boolean;
    // private suffix: string;
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