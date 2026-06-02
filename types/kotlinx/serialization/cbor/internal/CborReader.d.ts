import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../kotlin/Pair.d.ts'
import type { DeserializationStrategy } from '../../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { Cbor } from '../../../../kotlinx/serialization/cbor/Cbor.d.ts'
import type { CborDecoder } from '../../../../kotlinx/serialization/cbor/CborDecoder.d.ts'
import type { CborParser } from '../../../../kotlinx/serialization/cbor/internal/CborParser.d.ts'
import type { SerialDescriptor } from '../../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { AbstractDecoder } from '../../../../kotlinx/serialization/encoding/AbstractDecoder.d.ts'
import type { CompositeDecoder } from '../../../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { CompositeDecoder$Companion } from '../../../../kotlinx/serialization/encoding/CompositeDecoder$Companion.d.ts'
import type { SerializersModule } from '../../../../kotlinx/serialization/modules/SerializersModule.d.ts'
export class CborReader extends AbstractDecoder implements CborDecoder {
    static Companion: CompositeDecoder$Companion;
    static DECODE_DONE: number;
    static UNKNOWN_NAME: number;
    constructor(cbor: Cbor, parser: CborParser)
    readonly cbor: Cbor;
    // private decodeByteArrayAsByteString: boolean;
    // private /*not mapped: */ getDecodeByteArrayAsByteString(): boolean;
    // private finiteMode: boolean;
    // private /*not mapped: */ getFiniteMode(): boolean;
    // private parser: CborParser;
    // private /*not mapped: */ getParser(): CborParser;
    // private readProperties: number;
    readonly serializersModule: SerializersModule;
    // private size: number;
    // private /*not mapped: */ getSize(): number;
    // private tags: (Object | null)[] | null;
//     // private /*not mapped: */ getTags-2g2roS4(): (Object | null)[] | null;
 // ; invalid because of -    beginStructure(descriptor: SerialDescriptor): CompositeDecoder;
    decodeBoolean(): boolean;
    decodeByte(): number;
    decodeChar(): string;
    decodeDouble(): number;
    decodeElementIndex(descriptor: SerialDescriptor): number;
    // private decodeElementNameWithTags(descriptor: SerialDescriptor): Pair<string, (Object | null)[]>;
    // private decodeElementNameWithTagsLenient(descriptor: SerialDescriptor): Pair<string, (Object | null)[]>;
    decodeEnum(enumDescriptor: SerialDescriptor): number;
    decodeFloat(): number;
    decodeInt(): number;
    decodeLong(): number;
    decodeNotNullMark(): boolean;
    decodeNull(): void | null;
    decodeSerializableValue<T extends Object | number | string | boolean>(deserializer: DeserializationStrategy<T>): T;
    decodeShort(): number;
    decodeString(): string;
    endStructure(descriptor: SerialDescriptor): void;
    // private isDone(): boolean;
    protected setSize(size: number): void;
    protected skipBeginToken(objectTags: (Object | null)[] | null): void;
    // private verifyKeyTags(descriptor: SerialDescriptor, index: number, tags: (Object | null)[] | null): void;
}