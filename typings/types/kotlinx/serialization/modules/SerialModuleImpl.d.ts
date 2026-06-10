import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { DeserializationStrategy } from '../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerializationStrategy } from '../../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { ContextualProvider } from '../../../kotlinx/serialization/modules/ContextualProvider.d.ts'
import type { SerializersModule } from '../../../kotlinx/serialization/modules/SerializersModule.d.ts'
import type { SerializersModuleCollector } from '../../../kotlinx/serialization/modules/SerializersModuleCollector.d.ts'
export class SerialModuleImpl extends SerializersModule {
    constructor(class2ContextualFactory: Map<KClass<Object>, ContextualProvider>, polyBase2Serializers: Map<KClass<Object>, Map<KClass<Object>, KSerializer<Object>>>, polyBase2DefaultSerializerProvider: Map<KClass<Object>, (param0: Object | null) => SerializationStrategy<Object> | null>, polyBase2NamedSerializers: Map<KClass<Object>, { [key: string]: KSerializer<Object> }>, polyBase2DefaultDeserializerProvider: Map<KClass<Object>, (param0: string | null) => DeserializationStrategy<Object> | null>, hasInterfaceContextualSerializers: boolean)
    // private class2ContextualFactory: Map<KClass<Object>, ContextualProvider>;
    // private hasInterfaceContextualSerializers: boolean;
    /*not mapped: */ getHasInterfaceContextualSerializers$kotlinx_serialization_core(): boolean;
    // private polyBase2DefaultDeserializerProvider: Map<KClass<Object>, (param0: string | null) => DeserializationStrategy<Object> | null>;
    // private polyBase2DefaultSerializerProvider: Map<KClass<Object>, (param0: Object | null) => SerializationStrategy<Object> | null>;
    // private polyBase2NamedSerializers: Map<KClass<Object>, { [key: string]: KSerializer<Object> }>;
    polyBase2Serializers: Map<KClass<Object>, Map<KClass<Object>, KSerializer<Object>>>;
    dumpTo(collector: SerializersModuleCollector): void;
    getContextual<T extends Object | number | string | boolean>(kclass: KClass<T>): KSerializer<T> | null;
    getContextual<T extends Object | number | string | boolean>(kClass: KClass<T>, typeArgumentsSerializers: KSerializer<Object>[]): KSerializer<T> | null;
    getPolymorphic<T extends Object | number | string | boolean>(baseClass: KClass<T>, value: T): SerializationStrategy<T> | null;
    getPolymorphic<T extends Object | number | string | boolean>(baseClass: KClass<T>, serializedClassName: string | null): DeserializationStrategy<T> | null;
}