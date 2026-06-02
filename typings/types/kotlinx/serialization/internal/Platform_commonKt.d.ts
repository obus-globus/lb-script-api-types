import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { KType } from '../../../kotlin/reflect/KType.d.ts'
import type { KTypeProjection } from '../../../kotlin/reflect/KTypeProjection.d.ts'
import type { DeserializationStrategy } from '../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerializationStrategy } from '../../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
export class Platform_commonKt extends Object {
    static cachedSerialNames(paramarg0: SerialDescriptor): string[];
    static cast(paramarg0: DeserializationStrategy<Object>): DeserializationStrategy<Object>;
    static cast(paramarg0: KSerializer<Object>): KSerializer<Object>;
    static cast(paramarg0: SerializationStrategy<Object>): SerializationStrategy<Object>;
    static compactArray(paramarg0: (Object | null)[]): (Object | null)[];
    static elementsHashCodeBy(paramarg0: (Object | null)[], paramarg1: Function1<Object, Object>): number;
    static kclass(paramarg0: KType): KClass<Object>;
    static notRegisteredMessage(paramarg0: string): string;
    static notRegisteredMessage(paramarg0: KClass<Object>): string;
    static serializerNotRegistered(paramarg0: KClass<Object>): void;
    static typeOrThrow(paramarg0: KTypeProjection): KType;
}