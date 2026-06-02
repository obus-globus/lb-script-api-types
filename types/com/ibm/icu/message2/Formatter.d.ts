import type { FormattedPlaceholder } from '../../../../com/ibm/icu/message2/FormattedPlaceholder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Formatter extends Object{
    format(arg0: Object, arg1: { [key: string]: Object }): FormattedPlaceholder;
    formatToString(arg0: Object, arg1: { [key: string]: Object }): string;
}