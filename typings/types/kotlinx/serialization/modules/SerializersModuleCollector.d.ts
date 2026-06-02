import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { DeserializationStrategy } from '../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerializationStrategy } from '../../../kotlinx/serialization/SerializationStrategy.d.ts'
export interface SerializersModuleCollector extends Object{
    contextual(kClass: KClass<T>, provider: Function1<KSerializer<Object>[], KSerializer<Object>>): void;
    contextual(kClass: KClass<T>, serializer: KSerializer<T>): void;
    polymorphic(baseClass: KClass<Base>, actualClass: KClass<Sub>, actualSerializer: KSerializer<Sub>): void;
    polymorphicDefault(baseClass: KClass<Base>, defaultDeserializerProvider: Function1<string, DeserializationStrategy<Base>>): void;
    polymorphicDefaultDeserializer(baseClass: KClass<Base>, defaultDeserializerProvider: Function1<string, DeserializationStrategy<Base>>): void;
    polymorphicDefaultSerializer(baseClass: KClass<Base>, defaultSerializerProvider: Function1<Base, SerializationStrategy<Base>>): void;
}