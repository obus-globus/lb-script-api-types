import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { DeserializationStrategy } from '../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerializationStrategy } from '../../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { SerializersModuleCollector } from '../../../kotlinx/serialization/modules/SerializersModuleCollector.d.ts'
export class SerializersModule extends Object {
    protected constructor()
    /*not mapped: */ getHasInterfaceContextualSerializers$kotlinx_serialization_core(): boolean;
    dumpTo(collector: SerializersModuleCollector): void;
    getContextual<T extends Object | number | string | boolean>(kclass: KClass<T>): KSerializer<T> | null;
    getContextual<T extends Object | number | string | boolean>(kClass: KClass<T>, typeArgumentsSerializers: KSerializer<Object>[]): KSerializer<T> | null;
    getPolymorphic<T extends Object | number | string | boolean>(baseClass: KClass<T>, value: T): SerializationStrategy<T> | null;
    getPolymorphic<T extends Object | number | string | boolean>(baseClass: KClass<T>, serializedClassName: string | null): DeserializationStrategy<T> | null;
}