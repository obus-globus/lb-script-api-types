import type { ObjectInputStream } from '../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { Locale } from '../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
export class FormattedMessage extends Object implements Message {
    constructor(locale: Locale, messagePattern: string, arg: Object)
    constructor(locale: Locale, messagePattern: string, arg1: Object, arg2: Object)
    constructor(locale: Locale, messagePattern: string, arguments: Object[])
    constructor(locale: Locale, messagePattern: string, arguments: Object[], throwable: Throwable)
    constructor(messagePattern: string, arg: Object)
    constructor(messagePattern: string, arg1: Object, arg2: Object)
    constructor(messagePattern: string, arguments: Object[])
    constructor(messagePattern: string, arguments: Object[], throwable: Throwable)
    // private argArray: Object[];
    readonly formattedMessage: string;
    // private locale: Locale;
    // private message: Message;
    // private messagePattern: string;
    // private stringArgs: string[];
    readonly throwable: Throwable;
    equals(o: Object | null): boolean;
    getFormat(): string;
    getFormat(): string;
    getFormattedMessage(): string;
    getMessage(msgPattern: string, args: Object[], aThrowable: Throwable): Message;
    getParameters(): Object[];
    getThrowable(): Throwable;
    hashCode(): number;
    // private readObject(in_: ObjectInputStream): void;
    toString(): string;
    // private writeObject(out: ObjectOutputStream): void;
}