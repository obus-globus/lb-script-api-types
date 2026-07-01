import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { TypeConstructorSubstitution } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructorSubstitution.d.ts'
import type { TypeProjection } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
import type { TypeSubstitution } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitution.d.ts'
export class TypeConstructorSubstitution$Companion extends Object {
    constructor(arg0: DefaultConstructorMarker)
    create(arg0: KotlinType): TypeSubstitution;
    create(arg0: TypeConstructor, arg1: TypeProjection[]): TypeSubstitution;
    createByConstructorsMap(arg0: Map<TypeConstructor, TypeProjection>): TypeConstructorSubstitution;
    createByConstructorsMap(arg0: Map<TypeConstructor, TypeProjection>, arg1: boolean): TypeConstructorSubstitution;
}