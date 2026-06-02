import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KTypeParameterOwnerImpl } from '../../../../kotlin/reflect/jvm/internal/KTypeParameterOwnerImpl.d.ts'
import type { TypeParameterTable } from '../../../../kotlin/reflect/jvm/internal/TypeParameterTable.d.ts'
import type { KmTypeParameter } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmTypeParameter.d.ts'
export class TypeParameterTable$Companion extends Object {
    EMPTY: TypeParameterTable;
    create(kmTypeParameters: KmTypeParameter[], parent: TypeParameterTable | null, container: KTypeParameterOwnerImpl, classLoader: ClassLoader): TypeParameterTable;
}