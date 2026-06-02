import type { ObjectInputStream } from '../../../../../../../java/io/ObjectInputStream.d.ts'
import type { StringBuffer } from '../../../../../../../java/lang/StringBuffer.d.ts'
import type { FieldPosition } from '../../../../../../../java/text/FieldPosition.d.ts'
import type { Format } from '../../../../../../../java/text/Format.d.ts'
import type { ParsePosition } from '../../../../../../../java/text/ParsePosition.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MessagePattern } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/MessagePattern.d.ts'
export class SelectFormat extends Format {
    constructor(pattern: string)
    // private msgPattern: MessagePattern;
    // private pattern: string;
    applyPattern(pattern: string): void;
    equals(obj: Object | null): boolean;
    format(keyword: Object, toAppendTo: StringBuffer, pos: FieldPosition): StringBuffer;
    format(keyword: string): string;
    hashCode(): number;
    parseObject(source: string, pos: ParsePosition): Object;
    // private readObject(in_: ObjectInputStream): void;
    // private reset(): void;
    toPattern(): string;
    toString(): string;
}