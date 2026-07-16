import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
export class PlatformKt extends Object {
    static compiledSerializerImpl<T extends unknown>(self: KClass<T>): KSerializer<T> | null;
    static constructSerializerForGivenTypeArgs<T extends unknown>(self: Class<T>, ...args: KSerializer<Object>[]): KSerializer<T> | null;
    static constructSerializerForGivenTypeArgs<T extends unknown>(self: KClass<T>, ...args: KSerializer<Object>[]): KSerializer<T> | null;
    static getChecked<T extends unknown>(self: T[], index: number): T;
    static getChecked(self: boolean[], index: number): boolean;
    static initBuiltins(): Map<KClass<Object>, KSerializer<Object>>;
    static isInterface<T extends unknown>(self: KClass<T>): boolean;
    static isReferenceArray(rootClass: KClass<Object>): boolean;
    static platformSpecificSerializerNotRegistered(self: KClass<Object>): void;
    static serializerNotRegistered(self: Class<Object>): void;
    static toNativeArrayImpl<E extends T, T extends unknown>(self: E[], eClass: KClass<T>): E[];
}