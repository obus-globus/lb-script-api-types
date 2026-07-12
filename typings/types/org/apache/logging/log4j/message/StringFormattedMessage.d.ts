import type { ObjectInputStream } from '../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { Locale } from '../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
export class StringFormattedMessage extends Object implements Message {
    constructor(locale: Locale, messagePattern: string, ...arguments: Object[])
    constructor(messagePattern: string, ...arguments: Object[])
    // private argArray: Object[];
    readonly formattedMessage: string;
    // private locale: Locale;
    // private messagePattern: string;
    // private stringArgs: string[];
    readonly throwable: Throwable;
    equals(o: Object | null): boolean;
    formatMessage(msgPattern: string, ...args: Object[]): string;
    getFormat(): string;
    getFormattedMessage(): string;
    getParameters(): Object[];
    getThrowable(): Throwable;
    hashCode(): number;
    // private readObject(in_: ObjectInputStream): void;
    toString(): string;
    // private writeObject(out: ObjectOutputStream): void;
}