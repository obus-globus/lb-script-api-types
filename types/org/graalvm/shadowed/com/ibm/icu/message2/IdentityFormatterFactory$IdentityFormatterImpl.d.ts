import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FormattedPlaceholder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/FormattedPlaceholder.d.ts'
import type { Formatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/Formatter.d.ts'
export class IdentityFormatterFactory$IdentityFormatterImpl extends Object implements Formatter {
    private constructor()
    format(toFormat: Object, variableOptions: { [key: string]: Object }): FormattedPlaceholder;
    formatToString(toFormat: Object, variableOptions: { [key: string]: Object }): string;
}