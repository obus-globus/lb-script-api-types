import type { MessagePattern } from '../../../../com/ibm/icu/text/MessagePattern.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { FieldPosition } from '../../../../java/text/FieldPosition.d.ts'
import type { Format } from '../../../../java/text/Format.d.ts'
import type { ParsePosition } from '../../../../java/text/ParsePosition.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SelectFormat extends Format {
    constructor(arg0: string)
    // private msgPattern: MessagePattern;
    // private pattern: string;
    applyPattern(arg0: string): void;
    equals(arg0: Object | null): boolean;
    format(arg0: Object, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    format(arg0: string): string;
    hashCode(): number;
    parseObject(arg0: string, arg1: ParsePosition): Object;
    // private readObject(arg0: ObjectInputStream): void;
    // private reset(): void;
    toPattern(): string;
    toString(): string;
}