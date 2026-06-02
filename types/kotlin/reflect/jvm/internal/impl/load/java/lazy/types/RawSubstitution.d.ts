import type { Pair } from '../../../../../../../../../kotlin/Pair.d.ts'
import type { ClassDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { JavaTypeAttributes } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/types/JavaTypeAttributes.d.ts'
import type { RawProjectionComputer } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/types/RawProjectionComputer.d.ts'
import type { RawSubstitution$Companion } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/types/RawSubstitution$Companion.d.ts'
import type { KotlinType } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { SimpleType } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeParameterUpperBoundEraser } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeParameterUpperBoundEraser.d.ts'
import type { TypeProjectionImpl } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjectionImpl.d.ts'
import type { TypeSubstitution } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitution.d.ts'
import type { TypeSubstitution$Companion } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitution$Companion.d.ts'
export class RawSubstitution extends TypeSubstitution {
    static Companion: RawSubstitution$Companion;
    static Companion: TypeSubstitution$Companion;
    static EMPTY: TypeSubstitution;
    constructor()
    constructor(arg0: TypeParameterUpperBoundEraser)
    // private projectionComputer: RawProjectionComputer;
    // private typeParameterUpperBoundEraser: TypeParameterUpperBoundEraser;
    // private eraseInflexibleBasedOnClassDescriptor(arg0: SimpleType, arg1: ClassDescriptor, arg2: JavaTypeAttributes): Pair<SimpleType, boolean>;
    // private eraseType(arg0: KotlinType, arg1: JavaTypeAttributes): KotlinType;
    get(arg0: KotlinType): TypeProjectionImpl;
    isEmpty(): boolean;
}