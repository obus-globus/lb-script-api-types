import type { DataOutput } from '../../../java/io/DataOutput.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Number } from '../../../java/lang/Number.d.ts'
import type { NumericTag } from '../../../net/minecraft/nbt/NumericTag.d.ts'
import type { StreamTagVisitor } from '../../../net/minecraft/nbt/StreamTagVisitor.d.ts'
import type { StreamTagVisitor$ValueResult } from '../../../net/minecraft/nbt/StreamTagVisitor$ValueResult.d.ts'
import type { TagType } from '../../../net/minecraft/nbt/TagType.d.ts'
import type { TagVisitor } from '../../../net/minecraft/nbt/TagVisitor.d.ts'
export class ByteTag extends Record implements NumericTag {
    static ARRAY_HEADER: number;
    static MAX_DEPTH: number;
    static OBJECT_HEADER: number;
    static OBJECT_REFERENCE: number;
    static ONE: ByteTag;
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
    static TYPE: TagType<ByteTag>;
    static ZERO: ByteTag;
    static valueOf(paramdata: boolean): ByteTag;
    static valueOf(paramdata: number): ByteTag;
    constructor(value: number)
    // private value: number;
    accept(visitor: StreamTagVisitor): StreamTagVisitor$ValueResult;
    accept(visitor: TagVisitor): void;
    asBoolean(): Optional<boolean>;
    asByte(): Optional<number>;
    asDouble(): Optional<number>;
    asFloat(): Optional<number>;
    asInt(): Optional<number>;
    asLong(): Optional<number>;
    asNumber(): Optional<Number>;
    asShort(): Optional<number>;
    box(): Number;
    byteValue(): number;
    copy(): ByteTag;
    doubleValue(): number;
    equals(o: Object | null): boolean;
    floatValue(): number;
    getId(): number;
    getType(): TagType<ByteTag>;
    hashCode(): number;
    intValue(): number;
    longValue(): number;
    shortValue(): number;
    sizeInBytes(): number;
    toString(): string;
    value(): number;
    write(output: DataOutput): void;
}