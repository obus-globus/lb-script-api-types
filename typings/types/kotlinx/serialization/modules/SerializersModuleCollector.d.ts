import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { DeserializationStrategy } from '../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerializationStrategy } from '../../../kotlinx/serialization/SerializationStrategy.d.ts'
export interface SerializersModuleCollector extends Object {
    contextual<T extends Object | number | string | boolean>(kClass: KClass<T>, provider: (param0: KSerializer<Object>[]) => KSerializer<Object>): void;
    contextual<T extends Object | number | string | boolean>(kClass: KClass<T>, serializer: KSerializer<T>): void;
    polymorphic<Base extends Object | number | string | boolean, Sub extends Base>(baseClass: KClass<Base>, actualClass: KClass<Sub>, actualSerializer: KSerializer<Sub>): void;
    polymorphicDefault<Base extends Object | number | string | boolean>(baseClass: KClass<Base>, defaultDeserializerProvider: (param0: string | null) => DeserializationStrategy<Base> | null): void;
    polymorphicDefaultDeserializer<Base extends Object | number | string | boolean>(baseClass: KClass<Base>, defaultDeserializerProvider: (param0: string | null) => DeserializationStrategy<Base> | null): void;
    polymorphicDefaultSerializer<Base extends Object | number | string | boolean>(baseClass: KClass<Base>, defaultSerializerProvider: (param0: Base) => SerializationStrategy<Base> | null): void;
}