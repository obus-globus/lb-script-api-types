import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { LazyJavaResolverContext } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/LazyJavaResolverContext.d.ts'
import type { JavaAnnotation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotation.d.ts'
import type { JavaAnnotationOwner } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotationOwner.d.ts'
import type { FqName } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class JavaAnnotationMapper extends Object {
    static INSTANCE: JavaAnnotationMapper;
    private constructor()
    findMappedJavaAnnotation(arg0: FqName, arg1: JavaAnnotationOwner, arg2: LazyJavaResolverContext): AnnotationDescriptor;
    getDEPRECATED_ANNOTATION_MESSAGE$org_jetbrains_kotlin_descriptors_jvm(): Name;
    getRETENTION_ANNOTATION_VALUE$org_jetbrains_kotlin_descriptors_jvm(): Name;
    getTARGET_ANNOTATION_ALLOWED_TARGETS$org_jetbrains_kotlin_descriptors_jvm(): Name;
    mapOrResolveJavaAnnotation(arg0: JavaAnnotation, arg1: LazyJavaResolverContext, arg2: boolean): AnnotationDescriptor;
}