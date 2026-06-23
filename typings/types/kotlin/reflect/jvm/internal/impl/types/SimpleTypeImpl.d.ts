import type { MemberScope } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeAttribute } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttribute.d.ts'
import type { TypeConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { TypeProjection } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export class SimpleTypeImpl extends SimpleType {
    constructor(arg0: TypeConstructor, arg1: TypeProjection[], arg2: boolean, arg3: MemberScope, arg4: (param0: KotlinTypeRefiner) => SimpleType)
    readonly arguments: TypeProjection[];
    // inaccessible (TS-reserved member name): readonly constructor: TypeConstructor;
    // private isMarkedNullable: boolean;
    readonly memberScope: MemberScope;
    // private refinedTypeFactory: (param0: KotlinTypeRefiner) => SimpleType;
    getArguments(): TypeProjection[];
    getAttributes(): TypeAttribute<any>[];
    getConstructor(): TypeConstructor;
    getMemberScope(): MemberScope;
    isMarkedNullable(): boolean;
    makeNullableAsSpecified(arg0: boolean): SimpleType;
    refine(arg0: KotlinTypeRefiner): SimpleType;
    replaceAttributes(arg0: TypeAttribute<any>[]): SimpleType;
}