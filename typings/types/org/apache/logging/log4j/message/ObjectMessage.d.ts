import type { ObjectInputStream } from '../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
import type { StringBuilderFormattable } from '../../../../../org/apache/logging/log4j/util/StringBuilderFormattable.d.ts'
export class ObjectMessage extends Object implements Message, StringBuilderFormattable {
    constructor(obj: Object)
    // private obj: Object;
    // private objectString: string;
    // private equalObjectsOrStrings(left: Object, right: Object): boolean;
    equals(o: Object | null): boolean;
    formatTo(buffer: StringBuilder): void;
    getFormat(): string;
    getFormattedMessage(): string;
    getParameter(): Object;
    getParameters(): Object[];
    getThrowable(): Throwable;
    hashCode(): number;
    // private readObject(in_: ObjectInputStream): void;
    toString(): string;
    // private writeObject(out: ObjectOutputStream): void;
}