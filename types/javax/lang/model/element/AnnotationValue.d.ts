import type { AnnotationValueVisitor } from '../../../../javax/lang/model/element/AnnotationValueVisitor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface AnnotationValue extends Object{
    accept<R extends Object | number | string | boolean, P extends Object | number | string | boolean>(arg0: AnnotationValueVisitor<R, P>, arg1: P): R;
    getValue(): Object;
}