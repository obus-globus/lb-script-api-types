import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbbreviatedType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/AbbreviatedType.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { UnwrappedType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/UnwrappedType.d.ts'
import type { NewCapturedType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/NewCapturedType.d.ts'
export class SpecialTypesKt extends Object {
    static getAbbreviatedType(paramarg0: KotlinType): AbbreviatedType;
    static getAbbreviation(paramarg0: KotlinType): SimpleType;
    static isDefinitelyNotNullType(paramarg0: KotlinType): boolean;
    static makeDefinitelyNotNullOrNotNull(paramarg0: UnwrappedType, paramarg1: boolean): UnwrappedType;
    static makeSimpleTypeDefinitelyNotNullOrNotNull(paramarg0: SimpleType, paramarg1: boolean): SimpleType;
    static withAbbreviation(paramarg0: SimpleType, paramarg1: SimpleType): SimpleType;
    static withNotNullProjection(paramarg0: NewCapturedType): NewCapturedType;
}