import type { Element } from '../../../../javax/lang/model/element/Element.d.ts'
import type { Name } from '../../../../javax/lang/model/element/Name.d.ts'
import type { QualifiedNameable } from '../../../../javax/lang/model/element/QualifiedNameable.d.ts'
import type { TypeMirror } from '../../../../javax/lang/model/type/TypeMirror.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface PackageElement extends Element, QualifiedNameable, Object{
    asType(): TypeMirror;
    getEnclosedElements(): Element[];
    getEnclosingElement(): Element;
    getQualifiedName(): Name;
    getSimpleName(): Name;
    isUnnamed(): boolean;
}