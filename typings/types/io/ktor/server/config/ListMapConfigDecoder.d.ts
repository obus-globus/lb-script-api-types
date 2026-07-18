import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { AbstractMapConfigDecoder } from '../../../../io/ktor/server/config/AbstractMapConfigDecoder.d.ts'
import type { SerialDescriptor } from '../../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { CompositeDecoder } from '../../../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { CompositeDecoder$Companion } from '../../../../kotlinx/serialization/encoding/CompositeDecoder$Companion.d.ts'
import type { SerializersModule } from '../../../../kotlinx/serialization/modules/SerializersModule.d.ts'
export class ListMapConfigDecoder extends AbstractMapConfigDecoder {
    static Companion: CompositeDecoder$Companion;
    static DECODE_DONE: number;
    static UNKNOWN_NAME: number;
    constructor(map: JavaMap<string, string>, path: string, size: number, serializersModule: SerializersModule)
    // private index: number;
    readonly serializersModule: SerializersModule;
    // private size: number;
    beginStructure(descriptor: SerialDescriptor): CompositeDecoder;
    decodeElementIndex(descriptor: SerialDescriptor): number;
    decodeString(): string;
}