import type { Directionality } from '../../../../com/ibm/icu/message2/Directionality.d.ts'
import type { FormattedPlaceholder } from '../../../../com/ibm/icu/message2/FormattedPlaceholder.d.ts'
import type { Formatter } from '../../../../com/ibm/icu/message2/Formatter.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class IdentityFormatterFactory$IdentityFormatterImpl extends Object implements Formatter {
    constructor(arg0: Directionality)
    // private directionality: Directionality;
    format(arg0: Object, arg1: { [key: string]: Object }): FormattedPlaceholder;
    formatToString(arg0: Object, arg1: { [key: string]: Object }): string;
}