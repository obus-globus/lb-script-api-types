import type { Object } from '../../java/lang/Object.d.ts'
import type { DeserializationStrategy } from '../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { SerializationStrategy } from '../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { SerialDescriptor } from '../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
export interface KSerializer<T extends Object | number | string | boolean> extends Object, DeserializationStrategy<T>, SerializationStrategy<T>{
    readonly descriptor: SerialDescriptor;
}