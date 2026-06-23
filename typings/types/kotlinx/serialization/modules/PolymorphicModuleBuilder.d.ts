import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pair } from '../../../kotlin/Pair.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { DeserializationStrategy } from '../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerializationStrategy } from '../../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { SerializersModuleBuilder } from '../../../kotlinx/serialization/modules/SerializersModuleBuilder.d.ts'
export class PolymorphicModuleBuilder<Base extends unknown> extends Object {
    constructor(baseClass: KClass<Base>, baseSerializer: KSerializer<Base> | null)
    // private baseClass: KClass<Base>;
    // private baseSerializer: KSerializer<Base> | null;
    // private defaultDeserializerProvider: ((param0: string | null) => DeserializationStrategy<Base> | null) | null;
    // private defaultSerializerProvider: ((param0: Base) => SerializationStrategy<Base> | null) | null;
    // private subclasses: Pair<KClass<Base>, KSerializer<Base>>[];
    buildTo(builder: SerializersModuleBuilder): void;
    default(defaultSerializerProvider: (param0: string | null) => DeserializationStrategy<Base> | null): void;
    defaultDeserializer(defaultDeserializerProvider: (param0: string | null) => DeserializationStrategy<Base> | null): void;
    subclass<T extends Base>(subclass: KClass<T>, serializer: KSerializer<T>): void;
    subclassesOfSealed(): void;
    subclassesOfSealed<T extends Base>(serializer: KSerializer<T>): void;
}