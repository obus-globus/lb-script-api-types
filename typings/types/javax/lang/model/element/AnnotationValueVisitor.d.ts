import type { AnnotationMirror } from '../../../../javax/lang/model/element/AnnotationMirror.d.ts'
import type { AnnotationValue } from '../../../../javax/lang/model/element/AnnotationValue.d.ts'
import type { VariableElement } from '../../../../javax/lang/model/element/VariableElement.d.ts'
import type { TypeMirror } from '../../../../javax/lang/model/type/TypeMirror.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface AnnotationValueVisitor<R extends Object | number | string | boolean, P extends Object | number | string | boolean> extends Object{
    visit(arg0: AnnotationValue): R;
    visit(arg0: AnnotationValue, arg1: P): R;
    visitAnnotation(arg0: AnnotationMirror, arg1: P): R;
    visitArray(arg0: AnnotationValue[], arg1: P): R;
    visitBoolean(arg0: boolean, arg1: P): R;
    visitByte(arg0: number, arg1: P): R;
    visitChar(arg0: string, arg1: P): R;
    visitDouble(arg0: number, arg1: P): R;
    visitEnumConstant(arg0: VariableElement, arg1: P): R;
    visitFloat(arg0: number, arg1: P): R;
    visitInt(arg0: number, arg1: P): R;
    visitLong(arg0: number, arg1: P): R;
    visitShort(arg0: number, arg1: P): R;
    visitString(arg0: string, arg1: P): R;
    visitType(arg0: TypeMirror, arg1: P): R;
    visitUnknown(arg0: AnnotationValue, arg1: P): R;
}