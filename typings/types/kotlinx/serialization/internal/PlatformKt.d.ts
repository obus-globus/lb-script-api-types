import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
export class PlatformKt extends Object {
    static compiledSerializerImpl(paramarg0: KClass<Object>): KSerializer<Object>;
    static constructSerializerForGivenTypeArgs(paramarg0: Class<Object>, ...paramarg1: KSerializer<Object>[]): KSerializer<Object>;
    static constructSerializerForGivenTypeArgs(paramarg0: KClass<Object>, ...paramarg1: KSerializer<Object>[]): KSerializer<Object>;
    static getChecked(paramarg0: (Object | null)[], paramarg1: number): Object | null;
    static getChecked(paramarg0: boolean[], paramarg1: number): boolean;
    static initBuiltins(): Map<KClass<Object>, KSerializer<Object>>;
    static isInterface(paramarg0: KClass<Object>): boolean;
    static isReferenceArray(paramarg0: KClass<Object>): boolean;
    static platformSpecificSerializerNotRegistered(paramarg0: KClass<Object>): void;
    static serializerNotRegistered(paramarg0: Class<Object>): void;
    static toNativeArrayImpl(paramarg0: (Object | null)[], paramarg1: KClass<Object>): (Object | null)[];
}