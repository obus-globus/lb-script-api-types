import type { Class } from '../../../../java/lang/Class.d.ts'
import type { GenericArrayType } from '../../../../java/lang/reflect/GenericArrayType.d.ts'
import type { ParameterizedType } from '../../../../java/lang/reflect/ParameterizedType.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { TypeVariable } from '../../../../java/lang/reflect/TypeVariable.d.ts'
import type { WildcardType } from '../../../../java/lang/reflect/WildcardType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class TypeVisitor extends Object {
    constructor()
    // private visited: Type[];
    visit(...types: Type[]): void;
    visitClass(t: Class<Object>): void;
    visitGenericArrayType(t: GenericArrayType): void;
    visitParameterizedType(t: ParameterizedType): void;
    visitTypeVariable(t: TypeVariable<any>): void;
    visitWildcardType(t: WildcardType): void;
}