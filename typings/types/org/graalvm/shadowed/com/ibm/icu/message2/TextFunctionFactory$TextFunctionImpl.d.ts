import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Directionality } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/Directionality.d.ts'
import type { FormattedPlaceholder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/FormattedPlaceholder.d.ts'
import type { Function } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/Function.d.ts'
export class TextFunctionFactory$TextFunctionImpl extends Object implements Function {
    constructor(directionality: Directionality)
    // private directionality: Directionality;
    format(toFormat: Object, variableOptions: { [key: string]: Object }): FormattedPlaceholder;
    formatToString(toFormat: Object, variableOptions: { [key: string]: Object }): string;
    matches(value: Object, keys: string[], variableOptions: { [key: string]: Object }): string[];
    // private matches(value: Object, key: string): boolean;
}