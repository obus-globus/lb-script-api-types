import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FormattedMessage } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/FormattedMessage.d.ts'
import type { MFDataModel$Message } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Message.d.ts'
import type { MFDataModelFormatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModelFormatter.d.ts'
import type { MFFunctionRegistry } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFFunctionRegistry.d.ts'
import type { MessageFormatter$Builder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MessageFormatter$Builder.d.ts'
import type { MessageFormatter$ErrorHandlingBehavior } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MessageFormatter$ErrorHandlingBehavior.d.ts'
export class MessageFormatter extends Object {
    static builder(): MessageFormatter$Builder;
    private constructor(builder: MessageFormatter$Builder)
    readonly dataModel: MFDataModel$Message;
    readonly errorHandlingBehavior: MessageFormatter$ErrorHandlingBehavior;
    // private functionRegistry: MFFunctionRegistry;
    readonly locale: Locale;
    // private modelFormatter: MFDataModelFormatter;
    readonly pattern: string;
    format(arguments: JavaMap<string, Object>): FormattedMessage;
    formatToString(arguments: JavaMap<string, Object>): string;
    getDataModel(): MFDataModel$Message;
    getErrorHandlingBehavior(): MessageFormatter$ErrorHandlingBehavior;
    getLocale(): Locale;
    getPattern(): string;
}