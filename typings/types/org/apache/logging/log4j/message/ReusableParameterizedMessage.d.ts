import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Clearable } from '../../../../../org/apache/logging/log4j/message/Clearable.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
import type { ParameterConsumer } from '../../../../../org/apache/logging/log4j/message/ParameterConsumer.d.ts'
import type { ParameterFormatter$MessagePatternAnalysis } from '../../../../../org/apache/logging/log4j/message/ParameterFormatter$MessagePatternAnalysis.d.ts'
import type { ParameterVisitable } from '../../../../../org/apache/logging/log4j/message/ParameterVisitable.d.ts'
import type { ReusableMessage } from '../../../../../org/apache/logging/log4j/message/ReusableMessage.d.ts'
export class ReusableParameterizedMessage extends Object implements Clearable, ParameterVisitable, ReusableMessage {
    constructor()
    // private argCount: number;
    // private formatBuffer: StringBuilder;
    // private messagePattern: string;
    // private params: Object[];
    // private patternAnalysis: ParameterFormatter$MessagePatternAnalysis;
    // private reserved: boolean;
    readonly throwable: Throwable;
    // private varargs: Object[];
    clear(): void;
    forEachParameter<S extends unknown>(action: ParameterConsumer<S>, state: S): void;
    formatTo(builder: StringBuilder): void;
    getFormat(): string;
    getFormattedMessage(): string;
    getParameterCount(): number;
    getParameters(): Object[];
    // private getParams(): Object[];
    getThrowable(): Throwable;
    // private getTrimmedParams(): Object[];
    // private init(messagePattern: string, argCount: number, args: Object[]): void;
    memento(): Message;
    reserve(): ReusableParameterizedMessage;
    set(messagePattern: string, p0: Object): ReusableParameterizedMessage;
    set(messagePattern: string, p0: Object, p1: Object): ReusableParameterizedMessage;
    set(messagePattern: string, p0: Object, p1: Object, p2: Object): ReusableParameterizedMessage;
    set(messagePattern: string, p0: Object, p1: Object, p2: Object, p3: Object): ReusableParameterizedMessage;
    set(messagePattern: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object): ReusableParameterizedMessage;
    set(messagePattern: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object): ReusableParameterizedMessage;
    set(messagePattern: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object): ReusableParameterizedMessage;
    set(messagePattern: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object): ReusableParameterizedMessage;
    set(messagePattern: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object, p8: Object): ReusableParameterizedMessage;
    set(messagePattern: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object, p8: Object, p9: Object): ReusableParameterizedMessage;
    set(messagePattern: string, ...arguments: Object[]): ReusableParameterizedMessage;
    swapParameters(emptyReplacement: Object[]): Object[];
    toString(): string;
    // private writeReplace(): Object;
}