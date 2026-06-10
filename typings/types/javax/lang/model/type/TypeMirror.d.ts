import type { Class } from '../../../../java/lang/Class.d.ts'
import type { AnnotatedConstruct } from '../../../../javax/lang/model/AnnotatedConstruct.d.ts'
import type { AnnotationMirror } from '../../../../javax/lang/model/element/AnnotationMirror.d.ts'
import type { TypeKind } from '../../../../javax/lang/model/type/TypeKind.d.ts'
import type { TypeVisitor } from '../../../../javax/lang/model/type/TypeVisitor.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TypeMirror extends AnnotatedConstruct, Object{
    accept<R extends Object | number | string | boolean, P extends Object | number | string | boolean>(arg0: TypeVisitor<R, P>, arg1: P): R;
    getAnnotation<A extends Annotation>(arg0: Class<A>): A;
    getAnnotationMirrors(): AnnotationMirror[];
    getAnnotationsByType<A extends Annotation>(arg0: Class<A>): A[];
    getKind(): TypeKind;
}