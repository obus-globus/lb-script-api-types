import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MemberScope } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { AbstractStubType$Companion } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/AbstractStubType$Companion.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeAttribute } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttribute.d.ts'
import type { TypeProjection } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
import type { NewTypeVariableConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/NewTypeVariableConstructor.d.ts'
export abstract class AbstractStubType extends SimpleType {
    static Companion: AbstractStubType$Companion;
    constructor(arg0: NewTypeVariableConstructor, arg1: boolean)
    // private isMarkedNullable: boolean;
    readonly memberScope: MemberScope;
    readonly originalTypeVariable: NewTypeVariableConstructor;
    getArguments(): TypeProjection[];
    getAttributes(): TypeAttribute<Object>[];
    getMemberScope(): MemberScope;
    getOriginalTypeVariable(): NewTypeVariableConstructor;
    isMarkedNullable(): boolean;
    makeNullableAsSpecified(arg0: boolean): SimpleType;
    materialize(arg0: boolean): AbstractStubType;
    refine(arg0: KotlinTypeRefiner): AbstractStubType;
    replaceAttributes(arg0: TypeAttribute<Object>[]): SimpleType;
}