import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Directionality } from '../../../../com/ibm/icu/message2/Directionality.d.ts'
import type { FormattedPlaceholder } from '../../../../com/ibm/icu/message2/FormattedPlaceholder.d.ts'
import type { FunctionFactory } from '../../../../com/ibm/icu/message2/FunctionFactory.d.ts'
import type { MFDataModel$Declaration } from '../../../../com/ibm/icu/message2/MFDataModel$Declaration.d.ts'
import type { MFDataModel$Expression } from '../../../../com/ibm/icu/message2/MFDataModel$Expression.d.ts'
import type { MFDataModel$Message } from '../../../../com/ibm/icu/message2/MFDataModel$Message.d.ts'
import type { MFDataModel$Pattern } from '../../../../com/ibm/icu/message2/MFDataModel$Pattern.d.ts'
import type { MFDataModel$SelectMessage } from '../../../../com/ibm/icu/message2/MFDataModel$SelectMessage.d.ts'
import type { MFDataModelFormatter$MapWithNfcKeys } from '../../../../com/ibm/icu/message2/MFDataModelFormatter$MapWithNfcKeys.d.ts'
import type { MFDataModelFormatter$ResolvedSelector } from '../../../../com/ibm/icu/message2/MFDataModelFormatter$ResolvedSelector.d.ts'
import type { MFFunctionRegistry } from '../../../../com/ibm/icu/message2/MFFunctionRegistry.d.ts'
import type { MessageFormatter$BidiIsolation } from '../../../../com/ibm/icu/message2/MessageFormatter$BidiIsolation.d.ts'
import type { MessageFormatter$ErrorHandlingBehavior } from '../../../../com/ibm/icu/message2/MessageFormatter$ErrorHandlingBehavior.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MFDataModelFormatter extends Object {
    constructor(arg0: MFDataModel$Message, arg1: Locale, arg2: MessageFormatter$ErrorHandlingBehavior, arg3: MessageFormatter$BidiIsolation, arg4: MFFunctionRegistry)
    // private bidiIsolation: MessageFormatter$BidiIsolation;
    // private customFunctions: MFFunctionRegistry;
    // private dm: MFDataModel$Message;
    // private errorHandlingBehavior: MessageFormatter$ErrorHandlingBehavior;
    // private locale: Locale;
    // private standardFunctions: MFFunctionRegistry;
    // private findBestMatchingPattern(arg0: MFDataModel$SelectMessage, arg1: MFDataModelFormatter$MapWithNfcKeys, arg2: MFDataModelFormatter$MapWithNfcKeys): MFDataModel$Pattern;
    format(arg0: JavaMap<string, Object>): string;
    // private formatExpression(arg0: MFDataModel$Expression, arg1: MFDataModelFormatter$MapWithNfcKeys, arg2: MFDataModelFormatter$MapWithNfcKeys): FormattedPlaceholder;
    // private getFormattingFunctionFactoryByName(arg0: Object, arg1: string): FunctionFactory;
    // private implementBiDiDefault(arg0: StringBuilder, arg1: Directionality, arg2: FormattedPlaceholder): void;
    // private matchSelectorKeys(arg0: MFDataModelFormatter$ResolvedSelector, arg1: string[]): string[];
    // private resolveDeclarations(arg0: MFDataModel$Declaration[], arg1: MFDataModelFormatter$MapWithNfcKeys): MFDataModelFormatter$MapWithNfcKeys;
}