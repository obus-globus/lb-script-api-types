import type { Object } from '../../../java/lang/Object.d.ts'
import type { SerializationStrategy } from '../../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { CompositeEncoder } from '../../../kotlinx/serialization/encoding/CompositeEncoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
import type { SerializersModule } from '../../../kotlinx/serialization/modules/SerializersModule.d.ts'
export abstract class TaggedEncoder<Tag extends Object | number | string | boolean> extends Object implements CompositeEncoder, Encoder {
    constructor()
    // private /*not mapped: */ getCurrentTag(): Tag;
    // private /*not mapped: */ getCurrentTagOrNull(): Tag | null;
    readonly serializersModule: SerializersModule;
    // private tagStack: Tag[];
    beginCollection(descriptor: SerialDescriptor, collectionSize: number): CompositeEncoder;
    beginStructure(descriptor: SerialDescriptor): CompositeEncoder;
    encodeBoolean(value: boolean): void;
    encodeBooleanElement(descriptor: SerialDescriptor, index: number, value: boolean): void;
    encodeByte(value: number): void;
    encodeByteElement(descriptor: SerialDescriptor, index: number, value: number): void;
    encodeChar(value: string): void;
    encodeCharElement(descriptor: SerialDescriptor, index: number, value: string): void;
    encodeDouble(value: number): void;
    encodeDoubleElement(descriptor: SerialDescriptor, index: number, value: number): void;
    // private encodeElement(desc: SerialDescriptor, index: number): boolean;
    encodeEnum(enumDescriptor: SerialDescriptor, index: number): void;
    encodeFloat(value: number): void;
    encodeFloatElement(descriptor: SerialDescriptor, index: number, value: number): void;
    encodeInline(descriptor: SerialDescriptor): Encoder;
    encodeInlineElement(descriptor: SerialDescriptor, index: number): Encoder;
    encodeInt(value: number): void;
    encodeIntElement(descriptor: SerialDescriptor, index: number, value: number): void;
    encodeLong(value: number): void;
    encodeLongElement(descriptor: SerialDescriptor, index: number, value: number): void;
    encodeNotNullMark(): void;
    encodeNotNullMark(): void;
    encodeNull(): void;
    encodeNullableSerializableElement<T extends Object | number | string | boolean>(descriptor: SerialDescriptor, index: number, serializer: SerializationStrategy<T>, value: T | null): void;
    encodeNullableSerializableValue<T extends Object | number | string | boolean>(serializer: SerializationStrategy<T>, value: T | null): void;
    encodeSerializableElement<T extends Object | number | string | boolean>(descriptor: SerialDescriptor, index: number, serializer: SerializationStrategy<T>, value: T): void;
    encodeSerializableValue<T extends Object | number | string | boolean>(serializer: SerializationStrategy<T>, value: T): void;
    encodeShort(value: number): void;
    encodeShortElement(descriptor: SerialDescriptor, index: number, value: number): void;
    encodeString(value: string): void;
    encodeStringElement(descriptor: SerialDescriptor, index: number, value: string): void;
    protected encodeTaggedBoolean(tag: Tag, value: boolean): void;
    protected encodeTaggedByte(tag: Tag, value: number): void;
    protected encodeTaggedChar(tag: Tag, value: string): void;
    protected encodeTaggedDouble(tag: Tag, value: number): void;
    protected encodeTaggedEnum(tag: Tag, enumDescriptor: SerialDescriptor, ordinal: number): void;
    protected encodeTaggedFloat(tag: Tag, value: number): void;
    protected encodeTaggedInline(tag: Tag, inlineDescriptor: SerialDescriptor): Encoder;
    protected encodeTaggedInt(tag: Tag, value: number): void;
    protected encodeTaggedLong(tag: Tag, value: number): void;
    protected encodeTaggedNonNullMark(tag: Tag): void;
    protected encodeTaggedNull(tag: Tag): void;
    protected encodeTaggedShort(tag: Tag, value: number): void;
    protected encodeTaggedString(tag: Tag, value: string): void;
    protected encodeTaggedValue(tag: Tag, value: Object): void;
    protected endEncode(descriptor: SerialDescriptor): void;
    endStructure(descriptor: SerialDescriptor): void;
    protected popTag(): Tag;
    protected pushTag(name: Tag): void;
    shouldEncodeElementDefault(descriptor: SerialDescriptor, index: number): boolean;
}