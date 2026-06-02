import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { DateTimeUnit$DateBased } from '../../../kotlinx/datetime/DateTimeUnit$DateBased.d.ts'
import type { DeserializationStrategy } from '../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { SealedClassSerializer } from '../../../kotlinx/serialization/SealedClassSerializer.d.ts'
import type { SerializationStrategy } from '../../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { CompositeDecoder } from '../../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
import type { AbstractPolymorphicSerializer } from '../../../kotlinx/serialization/internal/AbstractPolymorphicSerializer.d.ts'
export class DateBasedDateTimeUnitSerializer extends AbstractPolymorphicSerializer<DateTimeUnit$DateBased> {
    static INSTANCE: DateBasedDateTimeUnitSerializer;
    readonly baseClass: KClass<DateTimeUnit$DateBased>;
    readonly descriptor: SerialDescriptor;
    // private impl: SealedClassSerializer<DateTimeUnit$DateBased>;
    // private /*not mapped: */ getImpl(): SealedClassSerializer<DateTimeUnit$DateBased>;
    findPolymorphicSerializerOrNull(decoder: CompositeDecoder, klassName: string | null): DeserializationStrategy<DateTimeUnit$DateBased> | null;
    findPolymorphicSerializerOrNull(encoder: Encoder, value: DateTimeUnit$DateBased): SerializationStrategy<DateTimeUnit$DateBased> | null;
}