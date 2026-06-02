import type { MFDataModel$Message } from '../../../../com/ibm/icu/message2/MFDataModel$Message.d.ts'
import type { MFFunctionRegistry } from '../../../../com/ibm/icu/message2/MFFunctionRegistry.d.ts'
import type { MessageFormatter } from '../../../../com/ibm/icu/message2/MessageFormatter.d.ts'
import type { MessageFormatter$BidiIsolation } from '../../../../com/ibm/icu/message2/MessageFormatter$BidiIsolation.d.ts'
import type { MessageFormatter$ErrorHandlingBehavior } from '../../../../com/ibm/icu/message2/MessageFormatter$ErrorHandlingBehavior.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MessageFormatter$Builder extends Object {
    private constructor()
    // private bidiIsolation: MessageFormatter$BidiIsolation;
    // private dataModel: MFDataModel$Message;
    // private errorHandlingBehavior: MessageFormatter$ErrorHandlingBehavior;
    // private functionRegistry: MFFunctionRegistry;
    // private locale: Locale;
    // private pattern: string;
    build(): MessageFormatter;
    setBidiIsolation(arg0: MessageFormatter$BidiIsolation): MessageFormatter$Builder;
    setDataModel(arg0: MFDataModel$Message): MessageFormatter$Builder;
    setErrorHandlingBehavior(arg0: MessageFormatter$ErrorHandlingBehavior): MessageFormatter$Builder;
    setFunctionRegistry(arg0: MFFunctionRegistry): MessageFormatter$Builder;
    setLocale(arg0: Locale): MessageFormatter$Builder;
    setPattern(arg0: string): MessageFormatter$Builder;
}