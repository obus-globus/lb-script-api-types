import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { KotlinClassFinder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinClassFinder.d.ts'
import type { KotlinJvmBinaryClass } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass.d.ts'
import type { MetadataVersion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/MetadataVersion.d.ts'
import type { ProtoContainer } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ProtoContainer.d.ts'
export class AbstractBinaryClassAnnotationLoader$Companion extends Object {
    private constructor()
    getSpecialCaseContainerClass(arg0: ProtoContainer, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: KotlinClassFinder, arg6: MetadataVersion): KotlinJvmBinaryClass;
}