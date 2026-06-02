import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DelegatingSimpleType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/DelegatingSimpleType.d.ts'
import type { KotlinType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { NotNullTypeParameter } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/NotNullTypeParameter.d.ts'
import type { SimpleType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeAttribute } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttribute.d.ts'
export class NotNullTypeParameterImpl extends DelegatingSimpleType implements NotNullTypeParameter {
    constructor(arg0: SimpleType)
    // private delegate: SimpleType;
    getDelegate(): SimpleType;
    isMarkedNullable(): boolean;
    isTypeParameter(): boolean;
    makeNullableAsSpecified(arg0: boolean): SimpleType;
    // private prepareReplacement(arg0: SimpleType): SimpleType;
    replaceAttributes(arg0: TypeAttribute<Object>[]): NotNullTypeParameterImpl;
    replaceDelegate(arg0: SimpleType): NotNullTypeParameterImpl;
    substitutionResult(arg0: KotlinType): KotlinType;
}