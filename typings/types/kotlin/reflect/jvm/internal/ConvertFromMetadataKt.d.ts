import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../../kotlin/jvm/functions/Function0.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
import type { TypeParameterTable } from '../../../../kotlin/reflect/jvm/internal/TypeParameterTable.d.ts'
import type { KmType } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmType.d.ts'
import type { ClassId } from '../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
export class ConvertFromMetadataKt extends Object {
    static convertTypeArgumentToJavaType(paramarg0: Function0<Object>, paramarg1: number): Function0<Type>;
    static loadKClass(paramarg0: ClassLoader, paramarg1: string): KClass<Object>;
    static toClassId(paramarg0: string): ClassId;
    static toKType(paramarg0: KmType, paramarg1: ClassLoader, paramarg2: TypeParameterTable, paramarg3: Function0<Object>): KType;
    static toNonLocalSimpleName(paramarg0: string): string;
}