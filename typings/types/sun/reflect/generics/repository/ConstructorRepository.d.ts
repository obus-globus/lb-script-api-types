import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { TypeVariable } from '../../../../java/lang/reflect/TypeVariable.d.ts'
import type { GenericsFactory } from '../../../../sun/reflect/generics/factory/GenericsFactory.d.ts'
import type { GenericDeclRepository } from '../../../../sun/reflect/generics/repository/GenericDeclRepository.d.ts'
import type { MethodTypeSignature } from '../../../../sun/reflect/generics/tree/MethodTypeSignature.d.ts'
export class ConstructorRepository extends GenericDeclRepository<MethodTypeSignature> {
    static EMPTY_TYPE_VARS: TypeVariable<any>[];
    static make(paramarg0: string, paramarg1: GenericsFactory): ConstructorRepository;
    constructor(arg0: string, arg1: GenericsFactory)
    readonly exceptionTypes: Type[];
    readonly parameterTypes: Type[];
    // private computeExceptionTypes(): Type[];
    // private computeParameterTypes(): Type[];
    getExceptionTypes(): Type[];
    getParameterTypes(): Type[];
    parse(arg0: string): MethodTypeSignature;
}