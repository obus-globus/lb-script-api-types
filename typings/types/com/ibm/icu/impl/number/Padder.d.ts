import type { FormattedStringBuilder } from '../../../../../com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { DecimalFormatProperties } from '../../../../../com/ibm/icu/impl/number/DecimalFormatProperties.d.ts'
import type { Modifier } from '../../../../../com/ibm/icu/impl/number/Modifier.d.ts'
import type { Padder$PadPosition } from '../../../../../com/ibm/icu/impl/number/Padder$PadPosition.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Padder extends Object {
    static FALLBACK_PADDING_STRING: string;
    static NONE: Padder;
    static codePoints(paramarg0: number, paramarg1: number, paramarg2: Padder$PadPosition): Padder;
    static forProperties(paramarg0: DecimalFormatProperties): Padder;
    static none(): Padder;
    constructor(arg0: string, arg1: number, arg2: Padder$PadPosition)
    // private paddingString: string;
    // private position: Padder$PadPosition;
    // private targetWidth: number;
    isValid(): boolean;
    padAndApply(arg0: Modifier, arg1: Modifier, arg2: FormattedStringBuilder, arg3: number, arg4: number): number;
}