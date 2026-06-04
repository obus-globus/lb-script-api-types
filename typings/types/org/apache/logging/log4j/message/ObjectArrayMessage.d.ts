import type { ObjectInputStream } from '../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
export class ObjectArrayMessage extends Object implements Message {
    constructor(obj: Object[])
    // private array: Object[];
    // private arrayString: string;
    // private equalObjectsOrStrings(left: Object[], right: Object[]): boolean;
    equals(o: Object | null): boolean;
    getFormat(): string;
    getFormattedMessage(): string;
    getParameters(): Object[];
    getThrowable(): Throwable;
    hashCode(): number;
    // private readObject(in_: ObjectInputStream): void;
    toString(): string;
    // private writeObject(out: ObjectOutputStream): void;
}