import type { Config } from '../../../../com/typesafe/config/Config.d.ts'
import type { SerialDescriptor } from '../../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { AbstractDecoder } from '../../../../kotlinx/serialization/encoding/AbstractDecoder.d.ts'
import type { CompositeDecoder } from '../../../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { CompositeDecoder$Companion } from '../../../../kotlinx/serialization/encoding/CompositeDecoder$Companion.d.ts'
import type { SerializersModule } from '../../../../kotlinx/serialization/modules/SerializersModule.d.ts'
export class HoconDecoder extends AbstractDecoder {
    static Companion: CompositeDecoder$Companion;
    static DECODE_DONE: number;
    static UNKNOWN_NAME: number;
    constructor(config: Config, path: string, serializersModule: SerializersModule)
    // private config: Config;
    // private currentPath: string;
    // private /*not mapped: */ getCurrentPath(): string;
    // private elementIndex: number;
    // private /*not mapped: */ getElementIndex(): number;
    // private path: string;
    readonly serializersModule: SerializersModule;
    beginStructure(descriptor: SerialDescriptor): CompositeDecoder;
    decodeBoolean(): boolean;
    decodeByte(): number;
    decodeChar(): string;
    decodeDouble(): number;
    decodeElementIndex(descriptor: SerialDescriptor): number;
    decodeEnum(enumDescriptor: SerialDescriptor): number;
    decodeFloat(): number;
    decodeInt(): number;
    decodeLong(): number;
    decodeNotNullMark(): boolean;
    decodeShort(): number;
    decodeString(): string;
}