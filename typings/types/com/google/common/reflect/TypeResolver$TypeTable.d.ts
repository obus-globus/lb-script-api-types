import type { TypeResolver$TypeVariableKey } from '../../../../com/google/common/reflect/TypeResolver$TypeVariableKey.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { TypeVariable } from '../../../../java/lang/reflect/TypeVariable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TypeResolver$TypeTable extends Object {
    constructor()
    // private map: Map<TypeResolver$TypeVariableKey, Type>;
    resolve(var_: TypeVariable<any>): Type;
    resolveInternal(var_: TypeVariable<any>, forDependants: TypeResolver$TypeTable): Type;
    where(mappings: Map<TypeResolver$TypeVariableKey, Type>): TypeResolver$TypeTable;
}