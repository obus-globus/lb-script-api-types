import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { KType } from '../../../kotlin/reflect/KType.d.ts'
import type { KTypeProjection } from '../../../kotlin/reflect/KTypeProjection.d.ts'
import type { DeserializationStrategy } from '../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerializationStrategy } from '../../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
export class Platform_commonKt extends Object {
    static cachedSerialNames(self: SerialDescriptor): string[];
    static cast<T extends unknown>(self: DeserializationStrategy<Object>): DeserializationStrategy<T>;
    static cast<T extends unknown>(self: KSerializer<Object>): KSerializer<T>;
    static cast<T extends unknown>(self: SerializationStrategy<Object>): SerializationStrategy<T>;
    static compactArray(self: SerialDescriptor[] | null): SerialDescriptor[];
    static elementsHashCodeBy<T extends unknown, K extends unknown>(self: T[], selector: (param0: T) => K): number;
    static kclass(self: KType): KClass<Object>;
    static notRegisteredMessage(className: string): string;
    static notRegisteredMessage(self: KClass<Object>): string;
    static serializerNotRegistered(self: KClass<Object>): void;
    static typeOrThrow(self: KTypeProjection): KType;
}