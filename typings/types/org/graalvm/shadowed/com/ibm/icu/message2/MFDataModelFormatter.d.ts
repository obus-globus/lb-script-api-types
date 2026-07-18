import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FormattedPlaceholder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/FormattedPlaceholder.d.ts'
import type { FormatterFactory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/FormatterFactory.d.ts'
import type { MFDataModel$Declaration } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Declaration.d.ts'
import type { MFDataModel$Expression } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Expression.d.ts'
import type { MFDataModel$Message } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Message.d.ts'
import type { MFDataModel$Pattern } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Pattern.d.ts'
import type { MFDataModel$SelectMessage } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$SelectMessage.d.ts'
import type { MFDataModelFormatter$ResolvedSelector } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModelFormatter$ResolvedSelector.d.ts'
import type { MFFunctionRegistry } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFFunctionRegistry.d.ts'
import type { MessageFormatter$ErrorHandlingBehavior } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MessageFormatter$ErrorHandlingBehavior.d.ts'
export class MFDataModelFormatter extends Object {
    constructor(dm: MFDataModel$Message, locale: Locale, errorHandlingBehavior: MessageFormatter$ErrorHandlingBehavior, customFunctionRegistry: MFFunctionRegistry)
    // private customFunctions: MFFunctionRegistry;
    // private dm: MFDataModel$Message;
    // private errorHandlingBehavior: MessageFormatter$ErrorHandlingBehavior;
    // private locale: Locale;
    // private standardFunctions: MFFunctionRegistry;
    // private findBestMatchingPattern(sm: MFDataModel$SelectMessage, variables: JavaMap<string, Object>, arguments: JavaMap<string, Object>): MFDataModel$Pattern;
    format(arguments: JavaMap<string, Object>): string;
    // private formatExpression(expression: MFDataModel$Expression, variables: JavaMap<string, Object>, arguments: JavaMap<string, Object>): FormattedPlaceholder;
    // private getFormattingFunctionFactoryByName(toFormat: Object, functionName: string): FormatterFactory;
    // private matchSelectorKeys(rv: MFDataModelFormatter$ResolvedSelector, keys: string[]): string[];
    // private resolveDeclarations(declarations: MFDataModel$Declaration[], arguments: JavaMap<string, Object>): JavaMap<string, Object>;
}