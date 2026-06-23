import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { DeserializationStrategy } from '../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerializationStrategy } from '../../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { ContextualProvider } from '../../../kotlinx/serialization/modules/ContextualProvider.d.ts'
import type { SerializersModule } from '../../../kotlinx/serialization/modules/SerializersModule.d.ts'
import type { SerializersModuleCollector } from '../../../kotlinx/serialization/modules/SerializersModuleCollector.d.ts'
export class SerializersModuleBuilder extends Object implements SerializersModuleCollector {
    constructor()
    // private class2ContextualProvider: Map<KClass<Object>, ContextualProvider>;
    // private hasInterfaceContextualSerializers: boolean;
    // private polyBase2DefaultDeserializerProvider: Map<KClass<Object>, (param0: string | null) => DeserializationStrategy<Object> | null>;
    // private polyBase2DefaultSerializerProvider: Map<KClass<Object>, (param0: Object | null) => SerializationStrategy<Object> | null>;
    // private polyBase2NamedSerializers: Map<KClass<Object>, { [key: string]: KSerializer<Object> }>;
    // private polyBase2Serializers: Map<KClass<Object>, Map<KClass<Object>, KSerializer<Object>>>;
    build(): SerializersModule;
    contextual<T extends unknown>(kClass: KClass<T>, provider: (param0: KSerializer<Object>[]) => KSerializer<Object>): void;
    contextual<T extends unknown>(kClass: KClass<T>, serializer: KSerializer<T>): void;
    include(module: SerializersModule): void;
    polymorphic<Base extends unknown, Sub extends Base>(baseClass: KClass<Base>, actualClass: KClass<Sub>, actualSerializer: KSerializer<Sub>): void;
    polymorphicDefault<Base extends unknown>(baseClass: KClass<Base>, defaultDeserializerProvider: (param0: string | null) => DeserializationStrategy<Base> | null): void;
    polymorphicDefaultDeserializer<Base extends unknown>(baseClass: KClass<Base>, defaultDeserializerProvider: (param0: string | null) => DeserializationStrategy<Base> | null): void;
    polymorphicDefaultSerializer<Base extends unknown>(baseClass: KClass<Base>, defaultSerializerProvider: (param0: Base) => SerializationStrategy<Base> | null): void;
    registerDefaultPolymorphicDeserializer<Base extends unknown>(baseClass: KClass<Base>, defaultDeserializerProvider: (param0: string | null) => DeserializationStrategy<Base> | null, allowOverwrite: boolean): void;
    registerDefaultPolymorphicSerializer<Base extends unknown>(baseClass: KClass<Base>, defaultSerializerProvider: (param0: Base) => SerializationStrategy<Base> | null, allowOverwrite: boolean): void;
    registerPolymorphicSerializer<Base extends unknown, Sub extends Base>(baseClass: KClass<Base>, concreteClass: KClass<Sub>, concreteSerializer: KSerializer<Sub>, allowOverwrite: boolean): void;
    registerSerializer<T extends unknown>(forClass: KClass<T>, provider: ContextualProvider, allowOverwrite: boolean): void;
}