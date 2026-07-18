import type { Config } from '../../../../com/typesafe/config/Config.d.ts'
import type { HoconDecoder } from '../../../../io/ktor/server/config/HoconDecoder.d.ts'
import type { SerialDescriptor } from '../../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { CompositeDecoder$Companion } from '../../../../kotlinx/serialization/encoding/CompositeDecoder$Companion.d.ts'
import type { SerializersModule } from '../../../../kotlinx/serialization/modules/SerializersModule.d.ts'
export class HoconMapDecoder extends HoconDecoder {
    static Companion: CompositeDecoder$Companion;
    static DECODE_DONE: number;
    static UNKNOWN_NAME: number;
    constructor(config: Config, serializersModule: SerializersModule)
    // private config: Config;
    // private keys: string[];
    readonly serializersModule: SerializersModule;
    decodeElementIndex(descriptor: SerialDescriptor): number;
    decodeString(): string;
}