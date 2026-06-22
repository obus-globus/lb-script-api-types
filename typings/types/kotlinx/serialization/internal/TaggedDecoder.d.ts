import type { Object } from '../../../java/lang/Object.d.ts'
import type { DeserializationStrategy } from '../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { CompositeDecoder } from '../../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { CompositeDecoder$Companion } from '../../../kotlinx/serialization/encoding/CompositeDecoder$Companion.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { SerializersModule } from '../../../kotlinx/serialization/modules/SerializersModule.d.ts'
export abstract class TaggedDecoder<Tag extends Object | number | string | boolean> extends Object implements CompositeDecoder, Decoder {
    static Companion: CompositeDecoder$Companion;
    static DECODE_DONE: number;
    static UNKNOWN_NAME: number;
    constructor()
    // private /*not mapped: */ getCurrentTag(): Tag;
    // private /*not mapped: */ getCurrentTagOrNull(): Tag | null;
    // private flag: boolean;
    readonly serializersModule: SerializersModule;
    // private tagStack: Tag[];
    /*not mapped: */ getTagStack$kotlinx_serialization_core(): Tag[];
    beginStructure(descriptor: SerialDescriptor): CompositeDecoder;
    protected copyTagsTo(other: TaggedDecoder<Tag>): void;
    decodeBoolean(): boolean;
    decodeBooleanElement(descriptor: SerialDescriptor, index: number): boolean;
    decodeByte(): number;
    decodeByteElement(descriptor: SerialDescriptor, index: number): number;
    decodeChar(): string;
    decodeCharElement(descriptor: SerialDescriptor, index: number): string;
    decodeCollectionSize(descriptor: SerialDescriptor): number;
    decodeDouble(): number;
    decodeDoubleElement(descriptor: SerialDescriptor, index: number): number;
    decodeElementIndex(descriptor: SerialDescriptor): number;
    decodeEnum(enumDescriptor: SerialDescriptor): number;
    decodeFloat(): number;
    decodeFloatElement(descriptor: SerialDescriptor, index: number): number;
    decodeInline(descriptor: SerialDescriptor): Decoder;
    decodeInlineElement(descriptor: SerialDescriptor, index: number): Decoder;
    decodeInt(): number;
    decodeIntElement(descriptor: SerialDescriptor, index: number): number;
    decodeLong(): number;
    decodeLongElement(descriptor: SerialDescriptor, index: number): number;
    decodeNotNullMark(): boolean;
    decodeNull(): void | null;
    decodeNullableSerializableElement<T extends Object | number | string | boolean>(descriptor: SerialDescriptor, index: number, deserializer: DeserializationStrategy<T>, previousValue: T | null): T | null;
    decodeNullableSerializableValue<T extends Object | number | string | boolean>(deserializer: DeserializationStrategy<T>): T | null;
    decodeSequentially(): boolean;
    decodeSerializableElement<T extends Object | number | string | boolean>(descriptor: SerialDescriptor, index: number, deserializer: DeserializationStrategy<T>, previousValue: T | null): T;
    decodeSerializableValue<T extends Object | number | string | boolean>(deserializer: DeserializationStrategy<T>): T;
    protected decodeSerializableValue<T extends Object | number | string | boolean>(deserializer: DeserializationStrategy<T>, previousValue: T | null): T;
    decodeShort(): number;
    decodeShortElement(descriptor: SerialDescriptor, index: number): number;
    decodeString(): string;
    decodeStringElement(descriptor: SerialDescriptor, index: number): string;
    protected decodeTaggedBoolean(tag: Tag): boolean;
    protected decodeTaggedByte(tag: Tag): number;
    protected decodeTaggedChar(tag: Tag): string;
    protected decodeTaggedDouble(tag: Tag): number;
    protected decodeTaggedEnum(tag: Tag, enumDescriptor: SerialDescriptor): number;
    protected decodeTaggedFloat(tag: Tag): number;
    protected decodeTaggedInline(tag: Tag, inlineDescriptor: SerialDescriptor): Decoder;
    protected decodeTaggedInt(tag: Tag): number;
    protected decodeTaggedLong(tag: Tag): number;
    protected decodeTaggedNotNullMark(tag: Tag): boolean;
    protected decodeTaggedNull(tag: Tag): void | null;
    protected decodeTaggedShort(tag: Tag): number;
    protected decodeTaggedString(tag: Tag): string;
    protected decodeTaggedValue(tag: Tag): Object;
    endStructure(descriptor: SerialDescriptor): void;
    protected popTag(): Tag;
    protected pushTag(name: Tag): void;
    // private tagBlock<E extends Object | number | string | boolean>(tag: Tag, block: () => E): E;
}