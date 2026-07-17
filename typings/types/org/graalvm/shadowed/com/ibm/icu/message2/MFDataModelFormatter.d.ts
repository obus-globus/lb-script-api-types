import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Directionality } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/Directionality.d.ts'
import type { FormattedPlaceholder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/FormattedPlaceholder.d.ts'
import type { FunctionFactory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/FunctionFactory.d.ts'
import type { MFDataModel$Declaration } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Declaration.d.ts'
import type { MFDataModel$Expression } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Expression.d.ts'
import type { MFDataModel$Message } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Message.d.ts'
import type { MFDataModel$Pattern } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Pattern.d.ts'
import type { MFDataModel$SelectMessage } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$SelectMessage.d.ts'
import type { MFDataModelFormatter$MapWithNfcKeys } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModelFormatter$MapWithNfcKeys.d.ts'
import type { MFDataModelFormatter$ResolvedSelector } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModelFormatter$ResolvedSelector.d.ts'
import type { MFFunctionRegistry } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFFunctionRegistry.d.ts'
import type { MessageFormatter$BidiIsolation } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MessageFormatter$BidiIsolation.d.ts'
import type { MessageFormatter$ErrorHandlingBehavior } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MessageFormatter$ErrorHandlingBehavior.d.ts'
export class MFDataModelFormatter extends Object {
    constructor(dm: MFDataModel$Message, locale: Locale, errorHandlingBehavior: MessageFormatter$ErrorHandlingBehavior, bidiIsolation: MessageFormatter$BidiIsolation, customFunctionRegistry: MFFunctionRegistry)
    // private bidiIsolation: MessageFormatter$BidiIsolation;
    // private customFunctions: MFFunctionRegistry;
    // private dm: MFDataModel$Message;
    // private errorHandlingBehavior: MessageFormatter$ErrorHandlingBehavior;
    // private locale: Locale;
    // private standardFunctions: MFFunctionRegistry;
    // private findBestMatchingPattern(sm: MFDataModel$SelectMessage, variables: MFDataModelFormatter$MapWithNfcKeys, arguments: MFDataModelFormatter$MapWithNfcKeys): MFDataModel$Pattern;
    format(arguments: { [key: string]: Object }): string;
    // private formatExpression(expression: MFDataModel$Expression, variables: MFDataModelFormatter$MapWithNfcKeys, arguments: MFDataModelFormatter$MapWithNfcKeys): FormattedPlaceholder;
    // private getFormattingFunctionFactoryByName(toFormat: Object, functionName: string): FunctionFactory;
    // private implementBiDiDefault(result: StringBuilder, msgdir: Directionality, formattedExpression: FormattedPlaceholder): void;
    // private matchSelectorKeys(rv: MFDataModelFormatter$ResolvedSelector, keys: string[]): string[];
    // private resolveDeclarations(declarations: MFDataModel$Declaration[], arguments: MFDataModelFormatter$MapWithNfcKeys): MFDataModelFormatter$MapWithNfcKeys;
}