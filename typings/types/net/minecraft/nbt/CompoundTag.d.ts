import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { MapCodec } from '../../../com/mojang/serialization/MapCodec.d.ts'
import type { DataOutput } from '../../../java/io/DataOutput.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { BiConsumer } from '../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Number } from '../../../java/lang/Number.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
import type { StreamTagVisitor } from '../../../net/minecraft/nbt/StreamTagVisitor.d.ts'
import type { StreamTagVisitor$ValueResult } from '../../../net/minecraft/nbt/StreamTagVisitor$ValueResult.d.ts'
import type { Tag } from '../../../net/minecraft/nbt/Tag.d.ts'
import type { TagType } from '../../../net/minecraft/nbt/TagType.d.ts'
import type { TagVisitor } from '../../../net/minecraft/nbt/TagVisitor.d.ts'
export class CompoundTag extends Object implements Tag {
    static ARRAY_HEADER: number;
    static CODEC: Codec<CompoundTag>;
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
    static TYPE: TagType<CompoundTag>;
    constructor()
    constructor(tags: { [key: string]: Tag })
    // private tags: { [key: string]: Tag };
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
    contains(name: string): boolean;
    copy(): CompoundTag;
    entrySet(): Map$Entry<string, Tag>[];
    equals(obj: Object | null): boolean;
    forEach(consumer: (param0: string, param1: Tag) => void): void;
    get(name: string): Tag;
    getBoolean(name: string): Optional<boolean>;
    getBooleanOr(string: string, defaultValue: boolean): boolean;
    getByte(name: string): Optional<number>;
    getByteArray(name: string): Optional<number[]>;
    getByteOr(name: string, defaultValue: number): number;
    getCompound(name: string): Optional<CompoundTag>;
    getCompoundOrEmpty(name: string): CompoundTag;
    getDouble(name: string): Optional<number>;
    getDoubleOr(name: string, defaultValue: number): number;
    getFloat(name: string): Optional<number>;
    getFloatOr(name: string, defaultValue: number): number;
    getId(): number;
    getInt(name: string): Optional<number>;
    getIntArray(name: string): Optional<number[]>;
    getIntOr(name: string, defaultValue: number): number;
    getList(name: string): Optional<(Object | null)[]>;
    getListOrEmpty(name: string): (Object | null)[];
    getLong(name: string): Optional<number>;
    getLongArray(name: string): Optional<number[]>;
    getLongOr(name: string, defaultValue: number): number;
    // private getOptional(name: string): Optional<Tag>;
    getShort(name: string): Optional<number>;
    getShortOr(name: string, defaultValue: number): number;
    getString(name: string): Optional<string>;
    getStringOr(name: string, defaultValue: string): string;
    getType(): TagType<CompoundTag>;
    hashCode(): number;
    isEmpty(): boolean;
    keySet(): string[];
    merge(other: CompoundTag): CompoundTag;
    put(name: string, tag: Tag): Tag;
    putBoolean(name: string, value: boolean): void;
    putByte(name: string, value: number): void;
    putByteArray(name: string, value: number[]): void;
    putDouble(name: string, value: number): void;
    putFloat(name: string, value: number): void;
    putInt(name: string, value: number): void;
    putIntArray(name: string, value: number[]): void;
    putLong(name: string, value: number): void;
    putLongArray(name: string, value: number[]): void;
    putShort(name: string, value: number): void;
    putString(name: string, value: string): void;
    read(codec: MapCodec<T>): Optional<T>;
    read(codec: MapCodec<T>, ops: DynamicOps<Tag>): Optional<T>;
    read(name: string, codec: Codec<T>): Optional<T>;
    read(name: string, codec: Codec<T>, ops: DynamicOps<Tag>): Optional<T>;
    remove(name: string): Tag;
    shallowCopy(): CompoundTag;
    size(): number;
    sizeInBytes(): number;
    store<T extends Object | number | string | boolean>(codec: MapCodec<T>, value: T): void;
    store<T extends Object | number | string | boolean>(codec: MapCodec<T>, ops: DynamicOps<Tag>, value: T): void;
    store<T extends Object | number | string | boolean>(name: string, codec: Codec<T>, value: T): void;
    store<T extends Object | number | string | boolean>(name: string, codec: Codec<T>, ops: DynamicOps<Tag>, value: T): void;
    storeNullable<T extends Object | number | string | boolean>(name: string, codec: Codec<T>, value: T): void;
    storeNullable<T extends Object | number | string | boolean>(name: string, codec: Codec<T>, ops: DynamicOps<Tag>, value: T): void;
    toString(): string;
    values(): E[];
    write(output: DataOutput): void;
}