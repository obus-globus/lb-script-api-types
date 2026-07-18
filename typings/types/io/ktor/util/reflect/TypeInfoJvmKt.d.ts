import type { TypeInfo } from '../../../../io/ktor/util/reflect/TypeInfo.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
export class TypeInfoJvmKt extends Object {
    static getPlatformType(paramarg0: KType): Type;
    static getReifiedType(paramarg0: TypeInfo): Type;
    static instanceOf(self: Object, type: KClass<Object>): boolean;
    static typeInfoImpl(reifiedType: Type, kClass: KClass<Object>, kType: KType | null): TypeInfo;
}