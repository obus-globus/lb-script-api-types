import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeAttribute } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttribute.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export abstract class UnwrappedType extends KotlinType {
    private constructor()
    makeNullableAsSpecified(arg0: boolean): UnwrappedType;
    refine(arg0: KotlinTypeRefiner): UnwrappedType;
    replaceAttributes(arg0: TypeAttribute<any>[]): UnwrappedType;
    unwrap(): UnwrappedType;
}