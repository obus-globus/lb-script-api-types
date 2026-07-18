import type { ConfigValue } from '../../../../com/typesafe/config/ConfigValue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SerialDescriptor } from '../../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { AbstractDecoder } from '../../../../kotlinx/serialization/encoding/AbstractDecoder.d.ts'
import type { CompositeDecoder } from '../../../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { CompositeDecoder$Companion } from '../../../../kotlinx/serialization/encoding/CompositeDecoder$Companion.d.ts'
import type { SerializersModule } from '../../../../kotlinx/serialization/modules/SerializersModule.d.ts'
export class HoconListDecoder extends AbstractDecoder {
    static Companion: CompositeDecoder$Companion;
    static DECODE_DONE: number;
    static UNKNOWN_NAME: number;
    constructor(list: (Object | null)[], serializersModule: SerializersModule)
    // private /*not mapped: */ getCurrentElement(): ConfigValue;
    // private elementIndex: number;
    // private list: (Object | null)[];
    readonly serializersModule: SerializersModule;
    beginStructure(descriptor: SerialDescriptor): CompositeDecoder;
    decodeDouble(): number;
    decodeElementIndex(descriptor: SerialDescriptor): number;
    decodeEnum(enumDescriptor: SerialDescriptor): number;
    decodeLong(): number;
    decodeString(): string;
    decodeValue(): Object;
}