import type { Element } from '../../../../javax/lang/model/element/Element.d.ts'
import type { ElementKind } from '../../../../javax/lang/model/element/ElementKind.d.ts'
import type { ModuleElement$Directive } from '../../../../javax/lang/model/element/ModuleElement$Directive.d.ts'
import type { Name } from '../../../../javax/lang/model/element/Name.d.ts'
import type { QualifiedNameable } from '../../../../javax/lang/model/element/QualifiedNameable.d.ts'
import type { TypeMirror } from '../../../../javax/lang/model/type/TypeMirror.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ModuleElement extends Element, QualifiedNameable, Object{
    asType(): TypeMirror;
    getDirectives(): ModuleElement$Directive[];
    getEnclosedElements(): Element[];
    getEnclosingElement(): Element;
    getKind(): ElementKind;
    getQualifiedName(): Name;
    getSimpleName(): Name;
    isOpen(): boolean;
    isUnnamed(): boolean;
}