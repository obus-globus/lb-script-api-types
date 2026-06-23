import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Clearable } from '../../../../../org/apache/logging/log4j/message/Clearable.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
import type { ParameterConsumer } from '../../../../../org/apache/logging/log4j/message/ParameterConsumer.d.ts'
import type { ParameterVisitable } from '../../../../../org/apache/logging/log4j/message/ParameterVisitable.d.ts'
import type { ReusableMessage } from '../../../../../org/apache/logging/log4j/message/ReusableMessage.d.ts'
export class ReusableObjectMessage extends Object implements Clearable, ParameterVisitable, ReusableMessage {
    constructor()
    // private obj: Object;
    clear(): void;
    forEachParameter<S extends unknown>(action: ParameterConsumer<S>, state: S): void;
    formatTo(buffer: StringBuilder): void;
    getFormat(): string;
    getFormattedMessage(): string;
    getParameter(): Object;
    getParameterCount(): number;
    getParameters(): Object[];
    getThrowable(): Throwable;
    memento(): Message;
    set(object: Object): void;
    swapParameters(emptyReplacement: Object[]): Object[];
    toString(): string;
    // private writeReplace(): Object;
}