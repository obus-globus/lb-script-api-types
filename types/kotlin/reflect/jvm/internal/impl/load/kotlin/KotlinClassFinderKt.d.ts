import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { JavaClass } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaClass.d.ts'
import type { KotlinClassFinder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinClassFinder.d.ts'
import type { KotlinJvmBinaryClass } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass.d.ts'
import type { MetadataVersion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/MetadataVersion.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
export class KotlinClassFinderKt extends Object {
    static findKotlinClass(paramarg0: KotlinClassFinder, paramarg1: JavaClass, paramarg2: MetadataVersion): KotlinJvmBinaryClass;
    static findKotlinClass(paramarg0: KotlinClassFinder, paramarg1: ClassId, paramarg2: MetadataVersion): KotlinJvmBinaryClass;
}