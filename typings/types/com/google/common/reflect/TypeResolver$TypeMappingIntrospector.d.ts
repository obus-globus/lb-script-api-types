import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { TypeResolver$TypeVariableKey } from '../../../../com/google/common/reflect/TypeResolver$TypeVariableKey.d.ts'
import type { TypeVisitor } from '../../../../com/google/common/reflect/TypeVisitor.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ParameterizedType } from '../../../../java/lang/reflect/ParameterizedType.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { TypeVariable } from '../../../../java/lang/reflect/TypeVariable.d.ts'
import type { WildcardType } from '../../../../java/lang/reflect/WildcardType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TypeResolver$TypeMappingIntrospector extends TypeVisitor {
    private constructor()
    // private mappings: JavaMap<TypeResolver$TypeVariableKey, Type>;
    // private map(var_: TypeResolver$TypeVariableKey, arg: Type): void;
    visitClass(clazz: Class<Object>): void;
    visitParameterizedType(parameterizedType: ParameterizedType): void;
    visitTypeVariable(t: TypeVariable<any>): void;
    visitWildcardType(t: WildcardType): void;
}