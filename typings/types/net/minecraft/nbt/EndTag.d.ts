import type { DataOutput } from '../../../java/io/DataOutput.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Number } from '../../../java/lang/Number.d.ts'
import type { CompoundTag } from '../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { StreamTagVisitor } from '../../../net/minecraft/nbt/StreamTagVisitor.d.ts'
import type { StreamTagVisitor$ValueResult } from '../../../net/minecraft/nbt/StreamTagVisitor$ValueResult.d.ts'
import type { Tag } from '../../../net/minecraft/nbt/Tag.d.ts'
import type { TagType } from '../../../net/minecraft/nbt/TagType.d.ts'
import type { TagVisitor } from '../../../net/minecraft/nbt/TagVisitor.d.ts'
export class EndTag extends Object implements Tag {
    static ARRAY_HEADER: number;
    static INSTANCE: EndTag;
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
    static TYPE: TagType<EndTag>;
    private constructor()
    accept(visitor: StreamTagVisitor): StreamTagVisitor$ValueResult;
    accept(visitor: TagVisitor): void;
    acceptAsRoot(output: StreamTagVisitor): void;
    asBoolean(): Optional<boolean>;
    asByte(): Optional<number>;
    asByteArray(): Optional<number[]>;
    asCompound(): Optional<CompoundTag>;
    asDouble(): Optional<number>;
    asFloat(): Optional<number>;
    asInt(): Optional<number>;
    asIntArray(): Optional<number[]>;
    asList(): Optional<(Object | null)[]>;
    asLong(): Optional<number>;
    asLongArray(): Optional<number[]>;
    asNumber(): Optional<Number>;
    asShort(): Optional<number>;
    asString(): Optional<string>;
    copy(): EndTag;
    getId(): number;
    getType(): TagType<EndTag>;
    sizeInBytes(): number;
    toString(): string;
    write(output: DataOutput): void;
}