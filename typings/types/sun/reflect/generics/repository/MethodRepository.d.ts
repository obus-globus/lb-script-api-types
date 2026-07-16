import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { TypeVariable } from '../../../../java/lang/reflect/TypeVariable.d.ts'
import type { GenericsFactory } from '../../../../sun/reflect/generics/factory/GenericsFactory.d.ts'
import type { ConstructorRepository } from '../../../../sun/reflect/generics/repository/ConstructorRepository.d.ts'
export class MethodRepository extends ConstructorRepository {
    static EMPTY_TYPE_VARS: TypeVariable<any>[];
    static make(paramarg0: string, paramarg1: GenericsFactory): ConstructorRepository;
    static make(paramarg0: string, paramarg1: GenericsFactory): MethodRepository;
    private constructor(arg0: string, arg1: GenericsFactory)
    readonly returnType: Type;
    // private computeReturnType(): Type;
    getReturnType(): Type;
}