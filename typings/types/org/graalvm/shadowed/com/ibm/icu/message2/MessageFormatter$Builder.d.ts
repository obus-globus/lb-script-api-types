import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MFDataModel$Message } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFDataModel$Message.d.ts'
import type { MFFunctionRegistry } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFFunctionRegistry.d.ts'
import type { MessageFormatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MessageFormatter.d.ts'
import type { MessageFormatter$ErrorHandlingBehavior } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MessageFormatter$ErrorHandlingBehavior.d.ts'
export class MessageFormatter$Builder extends Object {
    private constructor()
    // private dataModel: MFDataModel$Message;
    // private errorHandlingBehavior: MessageFormatter$ErrorHandlingBehavior;
    // private functionRegistry: MFFunctionRegistry;
    // private locale: Locale;
    // private pattern: string;
    build(): MessageFormatter;
    setDataModel(dataModel: MFDataModel$Message): MessageFormatter$Builder;
    setErrorHandlingBehavior(errorHandlingBehavior: MessageFormatter$ErrorHandlingBehavior): MessageFormatter$Builder;
    setFunctionRegistry(functionRegistry: MFFunctionRegistry): MessageFormatter$Builder;
    setLocale(locale: Locale): MessageFormatter$Builder;
    setPattern(pattern: string): MessageFormatter$Builder;
}