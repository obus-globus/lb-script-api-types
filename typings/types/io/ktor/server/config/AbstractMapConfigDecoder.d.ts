import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { SerialDescriptor } from '../../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { AbstractDecoder } from '../../../../kotlinx/serialization/encoding/AbstractDecoder.d.ts'
import type { CompositeDecoder } from '../../../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { CompositeDecoder$Companion } from '../../../../kotlinx/serialization/encoding/CompositeDecoder$Companion.d.ts'
import type { SerializersModule } from '../../../../kotlinx/serialization/modules/SerializersModule.d.ts'
export abstract class AbstractMapConfigDecoder extends AbstractDecoder {
    static Companion: CompositeDecoder$Companion;
    static DECODE_DONE: number;
    static UNKNOWN_NAME: number;
    constructor(map: JavaMap<string, string>, path: string, serializersModule: SerializersModule)
    // private map: JavaMap<string, string>;
    // private /*not mapped: */ getMap(): JavaMap<string, string>;
    // private path: string;
    // private /*not mapped: */ getPath(): string;
    readonly serializersModule: SerializersModule;
    beginStructure(descriptor: SerialDescriptor): CompositeDecoder;
    decodeBoolean(): boolean;
    decodeByte(): number;
    decodeChar(): string;
    decodeDouble(): number;
    decodeEnum(enumDescriptor: SerialDescriptor): number;
    decodeFloat(): number;
    decodeInt(): number;
    decodeLong(): number;
    decodeShort(): number;
}