import type { SerializableString } from '../../../../../../../com/azure/json/implementation/jackson/core/SerializableString.d.ts'
import type { ObjectInputStream } from '../../../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class SerializedString extends Object implements SerializableString, Serializable {
    constructor(arg0: string)
    // private _jdkSerializeValue: string;
    // private _quotedChars: string[];
    // private _quotedUTF8Ref: number[];
    // private _unquotedUTF8Ref: number[];
    // private _value: string;
    appendQuoted(arg0: string[], arg1: number): number;
    appendQuotedUTF8(arg0: number[], arg1: number): number;
    appendUnquoted(arg0: string[], arg1: number): number;
    appendUnquotedUTF8(arg0: number[], arg1: number): number;
    asQuotedChars(): string[];
    asQuotedUTF8(): number[];
    asUnquotedUTF8(): number[];
    equals(arg0: Object | null): boolean;
    getValue(): string;
    hashCode(): number;
    // private readObject(arg0: ObjectInputStream): void;
    readResolve(): Object;
    toString(): string;
    // private writeObject(arg0: ObjectOutputStream): void;
}