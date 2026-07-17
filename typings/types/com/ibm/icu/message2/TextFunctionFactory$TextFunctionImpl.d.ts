import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Directionality } from '../../../../com/ibm/icu/message2/Directionality.d.ts'
import type { FormattedPlaceholder } from '../../../../com/ibm/icu/message2/FormattedPlaceholder.d.ts'
import type { Function } from '../../../../com/ibm/icu/message2/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TextFunctionFactory$TextFunctionImpl extends Object implements Function {
    constructor(arg0: Directionality)
    // private directionality: Directionality;
    format(arg0: Object, arg1: JavaMap<string, Object>): FormattedPlaceholder;
    formatToString(arg0: Object, arg1: JavaMap<string, Object>): string;
    matches(arg0: Object, arg1: string[], arg2: JavaMap<string, Object>): string[];
    // private matches(arg0: Object, arg1: string): boolean;
}