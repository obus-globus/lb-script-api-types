import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { KotlinJvmBinaryClass } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass.d.ts'
export abstract class KotlinClassFinder$Result extends Object {
    private constructor()
    constructor(arg0: DefaultConstructorMarker)
    toKotlinJvmBinaryClass(): KotlinJvmBinaryClass;
}