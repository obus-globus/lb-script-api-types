import type { DefaultConstructorMarker } from '../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { CustomTypeParameter } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/CustomTypeParameter.d.ts'
import type { DefinitelyNotNullType$Companion } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/DefinitelyNotNullType$Companion.d.ts'
import type { DelegatingSimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/DelegatingSimpleType.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeAttribute } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttribute.d.ts'
import type { DefinitelyNotNullTypeMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/DefinitelyNotNullTypeMarker.d.ts'
export class DefinitelyNotNullType extends DelegatingSimpleType implements CustomTypeParameter, DefinitelyNotNullTypeMarker {
    static Companion: DefinitelyNotNullType$Companion;
    private constructor(arg0: SimpleType, arg1: boolean)
    constructor(arg0: SimpleType, arg1: boolean, arg2: DefaultConstructorMarker)
    readonly original: SimpleType;
    // private useCorrectedNullabilityForTypeParameters: boolean;
    getDelegate(): SimpleType;
    getOriginal(): SimpleType;
    isMarkedNullable(): boolean;
    isTypeParameter(): boolean;
    makeNullableAsSpecified(arg0: boolean): SimpleType;
    replaceAttributes(arg0: TypeAttribute<any>[]): SimpleType;
    replaceDelegate(arg0: SimpleType): DefinitelyNotNullType;
    substitutionResult(arg0: KotlinType): KotlinType;
    toString(): string;
}