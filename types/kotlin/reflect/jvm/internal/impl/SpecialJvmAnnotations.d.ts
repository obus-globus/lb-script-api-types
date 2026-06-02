import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KotlinJvmBinaryClass } from '../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass.d.ts'
import type { ClassId } from '../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
export class SpecialJvmAnnotations extends Object {
    static INSTANCE: SpecialJvmAnnotations;
    private constructor()
    getJAVA_LANG_ANNOTATION_REPEATABLE(): ClassId;
    getSPECIAL_ANNOTATIONS(): ClassId[];
    isAnnotatedWithContainerMetaAnnotation(arg0: KotlinJvmBinaryClass): boolean;
}