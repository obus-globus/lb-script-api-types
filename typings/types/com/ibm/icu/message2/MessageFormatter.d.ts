import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { FormattedMessage } from '../../../../com/ibm/icu/message2/FormattedMessage.d.ts'
import type { MFDataModel$Message } from '../../../../com/ibm/icu/message2/MFDataModel$Message.d.ts'
import type { MFDataModelFormatter } from '../../../../com/ibm/icu/message2/MFDataModelFormatter.d.ts'
import type { MFFunctionRegistry } from '../../../../com/ibm/icu/message2/MFFunctionRegistry.d.ts'
import type { MessageFormatter$BidiIsolation } from '../../../../com/ibm/icu/message2/MessageFormatter$BidiIsolation.d.ts'
import type { MessageFormatter$Builder } from '../../../../com/ibm/icu/message2/MessageFormatter$Builder.d.ts'
import type { MessageFormatter$ErrorHandlingBehavior } from '../../../../com/ibm/icu/message2/MessageFormatter$ErrorHandlingBehavior.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MessageFormatter extends Object {
    static builder(): MessageFormatter$Builder;
    private constructor(arg0: MessageFormatter$Builder)
    readonly bidiIsolation: MessageFormatter$BidiIsolation;
    readonly dataModel: MFDataModel$Message;
    readonly errorHandlingBehavior: MessageFormatter$ErrorHandlingBehavior;
    // private functionRegistry: MFFunctionRegistry;
    readonly locale: Locale;
    // private modelFormatter: MFDataModelFormatter;
    readonly pattern: string;
    format(arg0: JavaMap<string, Object>): FormattedMessage;
    formatToString(arg0: JavaMap<string, Object>): string;
    getBidiIsolation(): MessageFormatter$BidiIsolation;
    getDataModel(): MFDataModel$Message;
    getErrorHandlingBehavior(): MessageFormatter$ErrorHandlingBehavior;
    getLocale(): Locale;
    getPattern(): string;
}