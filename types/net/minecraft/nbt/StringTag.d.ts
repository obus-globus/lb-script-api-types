import type { DataInput } from '../../../java/io/DataInput.d.ts'
import type { DataOutput } from '../../../java/io/DataOutput.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { StringBuilder } from '../../../java/lang/StringBuilder.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PrimitiveTag } from '../../../net/minecraft/nbt/PrimitiveTag.d.ts'
import type { StreamTagVisitor } from '../../../net/minecraft/nbt/StreamTagVisitor.d.ts'
import type { StreamTagVisitor$ValueResult } from '../../../net/minecraft/nbt/StreamTagVisitor$ValueResult.d.ts'
import type { Tag } from '../../../net/minecraft/nbt/Tag.d.ts'
import type { TagType } from '../../../net/minecraft/nbt/TagType.d.ts'
import type { TagVisitor } from '../../../net/minecraft/nbt/TagVisitor.d.ts'
export class StringTag extends Record implements PrimitiveTag {
    static ARRAY_HEADER: number;
    static MAX_DEPTH: number;
    static OBJECT_HEADER: number;
    static OBJECT_REFERENCE: number;
    static STRING_SIZE: number;
    static TAG_BYTE: number;
    static TAG_BYTE_ARRAY: number;
    static TAG_COMPOUND: number;
    static TAG_DOUBLE: number;
    static TAG_END: number;
    static TAG_FLOAT: number;
    static TAG_INT: number;
    static TAG_INT_ARRAY: number;
    static TAG_LIST: number;
    static TAG_LONG: number;
    static TAG_LONG_ARRAY: number;
    static TAG_SHORT: number;
    static TAG_STRING: number;
    static TYPE: TagType<StringTag>;
    static escapeWithoutQuotes(paraminput: string): string;
    static escapeWithoutQuotes(paraminput: string, paramresult: StringBuilder): void;
    static quoteAndEscape(paraminput: string): string;
    static quoteAndEscape(paraminput: string, paramresult: StringBuilder): void;
    static skipString(paraminput: DataInput): void;
    static valueOf(paramdata: string): StringTag;
    constructor(value: string)
    // private value: string;
    accept(visitor: StreamTagVisitor): StreamTagVisitor$ValueResult;
    accept(visitor: TagVisitor): void;
    asString(): Optional<string>;
    copy(): Tag;
    copy(): StringTag;
    equals(o: Object | null): boolean;
    getId(): number;
    getType(): TagType<StringTag>;
    hashCode(): number;
    sizeInBytes(): number;
    toString(): string;
    value(): string;
    write(output: DataOutput): void;
}