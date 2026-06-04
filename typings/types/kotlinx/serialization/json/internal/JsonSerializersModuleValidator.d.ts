import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
import type { DeserializationStrategy } from '../../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { KSerializer } from '../../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerializationStrategy } from '../../../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { SerialDescriptor } from '../../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { JsonConfiguration } from '../../../../kotlinx/serialization/json/JsonConfiguration.d.ts'
import type { SerializersModuleCollector } from '../../../../kotlinx/serialization/modules/SerializersModuleCollector.d.ts'
export class JsonSerializersModuleValidator extends Object implements SerializersModuleCollector {
    constructor(configuration: JsonConfiguration)
    // private isDiscriminatorRequired: boolean;
    // private useArrayPolymorphism: boolean;
    // private checkKind(descriptor: SerialDescriptor, actualClass: KClass<Object>): void;
    contextual(kClass: KClass<T>, provider: (param0: KSerializer<Object>[]) => KSerializer<Object>): void;
    contextual(kClass: KClass<T>, serializer: KSerializer<T>): void;
    polymorphic(baseClass: KClass<Base>, actualClass: KClass<Sub>, actualSerializer: KSerializer<Sub>): void;
    polymorphicDefault(baseClass: KClass<Base>, defaultDeserializerProvider: (param0: string | null) => DeserializationStrategy<Base> | null): void;
    polymorphicDefaultDeserializer(baseClass: KClass<Base>, defaultDeserializerProvider: (param0: string | null) => DeserializationStrategy<Base> | null): void;
    polymorphicDefaultSerializer(baseClass: KClass<Base>, defaultSerializerProvider: (param0: Base) => SerializationStrategy<Base> | null): void;
}