import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Annotation } from '../../../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { KotlinJvmBinaryClass$AnnotationArgumentVisitor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass$AnnotationArgumentVisitor.d.ts'
import type { KotlinJvmBinaryClass$AnnotationVisitor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass$AnnotationVisitor.d.ts'
import type { KotlinJvmBinaryClass$MemberVisitor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass$MemberVisitor.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { ClassLiteralValue } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ClassLiteralValue.d.ts'
export class ReflectClassStructure extends Object {
    static INSTANCE: ReflectClassStructure;
    private constructor()
    // private classLiteralValue(arg0: Class<Object>): ClassLiteralValue;
    loadClassAnnotations(arg0: Class<Object>, arg1: KotlinJvmBinaryClass$AnnotationVisitor): void;
    // private loadConstructorAnnotations(arg0: Class<Object>, arg1: KotlinJvmBinaryClass$MemberVisitor): void;
    // private loadFieldAnnotations(arg0: Class<Object>, arg1: KotlinJvmBinaryClass$MemberVisitor): void;
    // private loadMethodAnnotations(arg0: Class<Object>, arg1: KotlinJvmBinaryClass$MemberVisitor): void;
    // private processAnnotation(arg0: KotlinJvmBinaryClass$AnnotationVisitor, arg1: Annotation): void;
    // private processAnnotationArgumentValue(arg0: KotlinJvmBinaryClass$AnnotationArgumentVisitor, arg1: Name, arg2: Object): void;
    // private processAnnotationArguments(arg0: KotlinJvmBinaryClass$AnnotationArgumentVisitor, arg1: Annotation, arg2: Class<Object>): void;
    visitMembers(arg0: Class<Object>, arg1: KotlinJvmBinaryClass$MemberVisitor): void;
}