import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GenericsFactory } from '../../../../sun/reflect/generics/factory/GenericsFactory.d.ts'
import type { GenericDeclRepository } from '../../../../sun/reflect/generics/repository/GenericDeclRepository.d.ts'
import type { ClassSignature } from '../../../../sun/reflect/generics/tree/ClassSignature.d.ts'
export class ClassRepository extends GenericDeclRepository<ClassSignature> {
    static EMPTY_TYPE_VARS: Object | null;
    static NONE: ClassRepository;
    static make(paramarg0: string, paramarg1: GenericsFactory): ClassRepository;
    private constructor(arg0: string, arg1: GenericsFactory)
    readonly superInterfaces: Type[];
    readonly superclass: Type;
    // private computeSuperInterfaces(): Type[];
    // private computeSuperclass(): Type;
    getSuperInterfaces(): Type[];
    getSuperclass(): Type;
    parse(arg0: string): ClassSignature;
}