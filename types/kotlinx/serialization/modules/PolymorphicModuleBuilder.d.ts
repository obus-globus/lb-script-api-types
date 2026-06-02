import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { Pair } from '../../../kotlin/Pair.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { DeserializationStrategy } from '../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerializationStrategy } from '../../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { SerializersModuleBuilder } from '../../../kotlinx/serialization/modules/SerializersModuleBuilder.d.ts'
export class PolymorphicModuleBuilder<Base extends Object | number | string | boolean> extends Object {
    constructor(baseClass: KClass<Base>, baseSerializer: KSerializer<Base> | null)
    // private baseClass: KClass<Base>;
    // private baseSerializer: KSerializer<Base> | null;
    // private defaultDeserializerProvider: (param0: string | null) => DeserializationStrategy<Base> | null;
    // private defaultSerializerProvider: (param0: Base) => SerializationStrategy<Base> | null;
    // private subclasses: Pair<KClass<Base>, KSerializer<Base>>[];
    buildTo(builder: SerializersModuleBuilder): void;
    default(defaultSerializerProvider: Function1<string, DeserializationStrategy<Base>>): void;
    defaultDeserializer(defaultDeserializerProvider: Function1<string, DeserializationStrategy<Base>>): void;
    subclass(subclass: KClass<T>, serializer: KSerializer<T>): void;
    subclassesOfSealed(): void;
    subclassesOfSealed(serializer: KSerializer<T>): void;
}