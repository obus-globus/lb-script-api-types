import type { TypeVariable } from '../../../../java/lang/reflect/TypeVariable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GenericsFactory } from '../../../../sun/reflect/generics/factory/GenericsFactory.d.ts'
import type { AbstractRepository } from '../../../../sun/reflect/generics/repository/AbstractRepository.d.ts'
import type { Signature } from '../../../../sun/reflect/generics/tree/Signature.d.ts'
export abstract class GenericDeclRepository<S extends Signature> extends AbstractRepository<S> {
    static EMPTY_TYPE_VARS: Object | null;
    constructor(arg0: string, arg1: GenericsFactory)
    readonly typeParameters: TypeVariable<Object>[];
    // private computeTypeParameters(): TypeVariable<Object>[];
    getTypeParameters(): TypeVariable<Object>[];
}