import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { IntStream } from '../../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Clearable } from '../../../../../org/apache/logging/log4j/message/Clearable.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
import type { ParameterConsumer } from '../../../../../org/apache/logging/log4j/message/ParameterConsumer.d.ts'
import type { ParameterVisitable } from '../../../../../org/apache/logging/log4j/message/ParameterVisitable.d.ts'
import type { ReusableMessage } from '../../../../../org/apache/logging/log4j/message/ReusableMessage.d.ts'
export class ReusableSimpleMessage extends Object implements CharSequence, Clearable, ParameterVisitable, ReusableMessage {
    static compare(paramarg0: CharSequence, paramarg1: CharSequence): number;
    constructor()
    // private charSequence: CharSequence;
    /*not mapped: */ length(): number;
    chars(): IntStream;
    clear(): void;
    codePoints(): IntStream;
    forEachParameter<S extends unknown>(action: ParameterConsumer<S>, state: S): void;
    formatTo(buffer: StringBuilder): void;
    get(index: number): string;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    getFormat(): string;
    getFormattedMessage(): string;
    getParameterCount(): number;
    getParameters(): Object[];
    getThrowable(): Throwable;
    isEmpty(): boolean;
    memento(): Message;
    set(charSequence: CharSequence): void;
    set(message: string): void;
    subSequence(start: number, end: number): CharSequence;
    swapParameters(emptyReplacement: Object[]): Object[];
    // private writeReplace(): Object;
}