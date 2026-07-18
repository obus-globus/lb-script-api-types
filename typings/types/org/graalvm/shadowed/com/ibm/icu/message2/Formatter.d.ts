import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FormattedPlaceholder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/FormattedPlaceholder.d.ts'
export interface Formatter extends Object{
    format(toFormat: Object, variableOptions: JavaMap<string, Object>): FormattedPlaceholder;
    formatToString(toFormat: Object, variableOptions: JavaMap<string, Object>): string;
}