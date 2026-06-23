import type { Object } from '../../../java/lang/Object.d.ts'
import type { BinaryFormat } from '../../../kotlinx/serialization/BinaryFormat.d.ts'
import type { DeserializationStrategy } from '../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { SerializationStrategy } from '../../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { Cbor$Default } from '../../../kotlinx/serialization/cbor/Cbor$Default.d.ts'
import type { CborConfiguration } from '../../../kotlinx/serialization/cbor/CborConfiguration.d.ts'
import type { SerializersModule } from '../../../kotlinx/serialization/modules/SerializersModule.d.ts'
export class Cbor extends Object implements BinaryFormat {
    static Default: Cbor$Default;
    protected constructor(configuration: CborConfiguration, serializersModule: SerializersModule)
    readonly configuration: CborConfiguration;
    readonly serializersModule: SerializersModule;
    decodeFromByteArray<T extends unknown>(deserializer: DeserializationStrategy<T>, bytes: number[]): T;
    encodeToByteArray<T extends unknown>(serializer: SerializationStrategy<T>, value: T): number[];
}