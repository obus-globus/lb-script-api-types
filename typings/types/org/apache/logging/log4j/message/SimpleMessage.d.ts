import type { ObjectInputStream } from '../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { IntStream } from '../../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
import type { StringBuilderFormattable } from '../../../../../org/apache/logging/log4j/util/StringBuilderFormattable.d.ts'
export class SimpleMessage extends Object implements CharSequence, Message, StringBuilderFormattable {
    static compare(paramarg0: CharSequence, paramarg1: CharSequence): number;
    constructor()
    constructor(charSequence: CharSequence)
    constructor(message: string)
    // private charSequence: CharSequence;
    /*not mapped: */ length(): number;
    // private message: string;
    chars(): IntStream;
    codePoints(): IntStream;
    equals(o: Object | null): boolean;
    formatTo(buffer: StringBuilder): void;
    get(index: number): string;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    getFormat(): string;
    getFormattedMessage(): string;
    getParameters(): Object[];
    getThrowable(): Throwable;
    hashCode(): number;
    isEmpty(): boolean;
    // private readObject(in_: ObjectInputStream): void;
    subSequence(start: number, end: number): CharSequence;
    toString(): string;
    // private writeObject(out: ObjectOutputStream): void;
}