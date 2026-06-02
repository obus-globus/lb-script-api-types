import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { FormattedStringBuilder } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { DecimalFormatProperties } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalFormatProperties.d.ts'
import type { Modifier } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Modifier.d.ts'
import type { Padder$PadPosition } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Padder$PadPosition.d.ts'
export class Padder extends Object {
    static FALLBACK_PADDING_STRING: string;
    static NONE: Padder;
    static codePoints(paramcp: number, paramtargetWidth: number, paramposition: Padder$PadPosition): Padder;
    static forProperties(paramproperties: DecimalFormatProperties): Padder;
    static none(): Padder;
    constructor(paddingString: string, targetWidth: number, position: Padder$PadPosition)
    // private paddingString: string;
    // private position: Padder$PadPosition;
    // private targetWidth: number;
    isValid(): boolean;
    padAndApply(mod1: Modifier, mod2: Modifier, string: FormattedStringBuilder, leftIndex: number, rightIndex: number): number;
}