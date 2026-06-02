import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MemberScope } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeAttribute } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttribute.d.ts'
import type { TypeConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { TypeProjection } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export abstract class DelegatingSimpleType extends SimpleType {
    constructor()
    getArguments(): TypeProjection[];
    getAttributes(): TypeAttribute<Object>[];
    getConstructor(): TypeConstructor;
    getDelegate(): SimpleType;
    getMemberScope(): MemberScope;
    isMarkedNullable(): boolean;
    refine(arg0: KotlinTypeRefiner): SimpleType;
    replaceDelegate(arg0: SimpleType): DelegatingSimpleType;
}