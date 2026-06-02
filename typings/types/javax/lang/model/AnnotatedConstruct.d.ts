import type { Class } from '../../../java/lang/Class.d.ts'
import type { AnnotationMirror } from '../../../javax/lang/model/element/AnnotationMirror.d.ts'
import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface AnnotatedConstruct extends Object{
    getAnnotation<A extends Annotation>(arg0: Class<A>): A;
    getAnnotationMirrors(): AnnotationMirror[];
    getAnnotationsByType(arg0: Class<A>): A[];
}