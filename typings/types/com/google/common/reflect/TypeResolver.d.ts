import type { TypeResolver$TypeTable } from '../../../../com/google/common/reflect/TypeResolver$TypeTable.d.ts'
import type { TypeResolver$TypeVariableKey } from '../../../../com/google/common/reflect/TypeResolver$TypeVariableKey.d.ts'
import type { GenericArrayType } from '../../../../java/lang/reflect/GenericArrayType.d.ts'
import type { ParameterizedType } from '../../../../java/lang/reflect/ParameterizedType.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { WildcardType } from '../../../../java/lang/reflect/WildcardType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TypeResolver extends Object {
    constructor()
    // private typeTable: TypeResolver$TypeTable;
    // private resolveGenericArrayType(type: GenericArrayType): Type;
    // private resolveParameterizedType(type: ParameterizedType): ParameterizedType;
    resolveType(type: Type): Type;
    // private resolveTypes(types: Type[]): Type[];
    resolveTypesInPlace(types: Type[]): Type[];
    // private resolveWildcardType(type: WildcardType): WildcardType;
    where(mappings: Map<TypeResolver$TypeVariableKey, Type>): TypeResolver;
    where(formal: Type, actual: Type): TypeResolver;
}