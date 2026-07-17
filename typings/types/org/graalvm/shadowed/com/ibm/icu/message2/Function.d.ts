import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FormattedPlaceholder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/FormattedPlaceholder.d.ts'
export interface Function extends Object{
    format(toFormat: Object, variableOptions: { [key: string]: Object }): FormattedPlaceholder;
    formatToString(toFormat: Object, variableOptions: { [key: string]: Object }): string;
    matches(value: Object, keys: string[], variableOptions: { [key: string]: Object }): string[];
}