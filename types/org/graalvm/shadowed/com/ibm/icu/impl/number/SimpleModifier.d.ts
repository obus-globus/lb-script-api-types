import type { Format$Field } from '../../../../../../../../java/text/Format$Field.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { FormattedStringBuilder } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { Modifier } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Modifier.d.ts'
import type { Modifier$Parameters } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Modifier$Parameters.d.ts'
import type { PrefixInfixSuffixLengthHelper } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/range/PrefixInfixSuffixLengthHelper.d.ts'
export class SimpleModifier extends Object implements Modifier {
    static formatTwoArgPattern(paramcompiledPattern: string, paramresult: FormattedStringBuilder, paramindex: number, paramh: PrefixInfixSuffixLengthHelper, paramfield: Format$Field): void;
    constructor(compiledPattern: string, field: Format$Field, strong: boolean)
    constructor(compiledPattern: string, field: Format$Field, strong: boolean, parameters: Modifier$Parameters)
    // private compiledPattern: string;
    // private field: Format$Field;
    readonly parameters: Modifier$Parameters;
    readonly strong: boolean;
    apply(output: FormattedStringBuilder, leftIndex: number, rightIndex: number): number;
    containsField(field: Format$Field): boolean;
    getCodePointCount(): number;
    getParameters(): Modifier$Parameters;
    getPrefixLength(): number;
    isStrong(): boolean;
    semanticallyEquivalent(other: Modifier): boolean;
    strictEquals(other: Modifier): boolean;
}