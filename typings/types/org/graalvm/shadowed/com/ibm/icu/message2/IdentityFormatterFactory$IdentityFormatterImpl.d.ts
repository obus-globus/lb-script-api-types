import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FormattedPlaceholder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/FormattedPlaceholder.d.ts'
import type { Formatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/Formatter.d.ts'
export class IdentityFormatterFactory$IdentityFormatterImpl extends Object implements Formatter {
    private constructor()
    format(toFormat: Object, variableOptions: JavaMap<string, Object>): FormattedPlaceholder;
    formatToString(toFormat: Object, variableOptions: JavaMap<string, Object>): string;
}