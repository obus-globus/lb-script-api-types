import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FormattedPlaceholder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/FormattedPlaceholder.d.ts'
export interface Formatter extends Object{
    format(toFormat: Object, variableOptions: { [key: string]: Object }): FormattedPlaceholder;
    formatToString(toFormat: Object, variableOptions: { [key: string]: Object }): string;
}