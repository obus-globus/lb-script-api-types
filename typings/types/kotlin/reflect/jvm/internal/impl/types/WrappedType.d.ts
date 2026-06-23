import type { MemberScope } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeAttribute } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttribute.d.ts'
import type { TypeConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { TypeProjection } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
import type { UnwrappedType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/UnwrappedType.d.ts'
export abstract class WrappedType extends KotlinType {
    constructor()
    getArguments(): TypeProjection[];
    getAttributes(): TypeAttribute<any>[];
    getConstructor(): TypeConstructor;
    getDelegate(): KotlinType;
    getMemberScope(): MemberScope;
    isComputed(): boolean;
    isMarkedNullable(): boolean;
    toString(): string;
    unwrap(): UnwrappedType;
}