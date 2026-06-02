import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { GenericsFactory } from '../../../../sun/reflect/generics/factory/GenericsFactory.d.ts'
import type { AbstractRepository } from '../../../../sun/reflect/generics/repository/AbstractRepository.d.ts'
import type { TypeSignature } from '../../../../sun/reflect/generics/tree/TypeSignature.d.ts'
export class FieldRepository extends AbstractRepository<TypeSignature> {
    static make(paramarg0: string, paramarg1: GenericsFactory): FieldRepository;
    constructor(arg0: string, arg1: GenericsFactory)
    readonly genericType: Type;
    // private computeGenericType(): Type;
    getGenericType(): Type;
    parse(arg0: string): TypeSignature;
}