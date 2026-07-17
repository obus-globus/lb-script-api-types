import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { TypeConstructorSubstitution$Companion } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructorSubstitution$Companion.d.ts'
import type { TypeProjection } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
import type { TypeSubstitution } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitution.d.ts'
export abstract class TypeConstructorSubstitution extends TypeSubstitution {
    static Companion: TypeConstructorSubstitution$Companion;
    static EMPTY: TypeSubstitution;
    static create(paramarg0: TypeConstructor, paramarg1: TypeProjection[]): TypeSubstitution;
    static createByConstructorsMap(paramarg0: JavaMap<TypeConstructor, TypeProjection>): TypeConstructorSubstitution;
    constructor()
    get(arg0: KotlinType): TypeProjection;
    get(arg0: TypeConstructor): TypeProjection;
}