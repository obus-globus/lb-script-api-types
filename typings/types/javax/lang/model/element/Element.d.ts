import type { Class } from '../../../../java/lang/Class.d.ts'
import type { AnnotatedConstruct } from '../../../../javax/lang/model/AnnotatedConstruct.d.ts'
import type { AnnotationMirror } from '../../../../javax/lang/model/element/AnnotationMirror.d.ts'
import type { ElementKind } from '../../../../javax/lang/model/element/ElementKind.d.ts'
import type { ElementVisitor } from '../../../../javax/lang/model/element/ElementVisitor.d.ts'
import type { Modifier } from '../../../../javax/lang/model/element/Modifier.d.ts'
import type { Name } from '../../../../javax/lang/model/element/Name.d.ts'
import type { TypeMirror } from '../../../../javax/lang/model/type/TypeMirror.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Element extends AnnotatedConstruct, Object{
    accept<R extends Object | number | string | boolean, P extends Object | number | string | boolean>(arg0: ElementVisitor<R, P>, arg1: P): R;
    asType(): TypeMirror;
    getAnnotation<A extends Annotation>(arg0: Class<A>): A;
    getAnnotationMirrors(): AnnotationMirror[];
    getAnnotationsByType<A extends Annotation>(arg0: Class<A>): A[];
    getEnclosedElements(): Element[];
    getEnclosingElement(): Element;
    getKind(): ElementKind;
    getModifiers(): Modifier[];
    getSimpleName(): Name;
}