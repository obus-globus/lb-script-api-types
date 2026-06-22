import type { Element } from '../../../../javax/lang/model/element/Element.d.ts'
import type { ElementKind } from '../../../../javax/lang/model/element/ElementKind.d.ts'
import type { Name } from '../../../../javax/lang/model/element/Name.d.ts'
import type { NestingKind } from '../../../../javax/lang/model/element/NestingKind.d.ts'
import type { Parameterizable } from '../../../../javax/lang/model/element/Parameterizable.d.ts'
import type { QualifiedNameable } from '../../../../javax/lang/model/element/QualifiedNameable.d.ts'
import type { RecordComponentElement } from '../../../../javax/lang/model/element/RecordComponentElement.d.ts'
import type { TypeParameterElement } from '../../../../javax/lang/model/element/TypeParameterElement.d.ts'
import type { TypeMirror } from '../../../../javax/lang/model/type/TypeMirror.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TypeElement extends Element, Parameterizable, QualifiedNameable, Object{
    asType(): TypeMirror;
    getEnclosedElements(): Element[];
    getEnclosingElement(): Element;
    getInterfaces(): TypeMirror[];
    getKind(): ElementKind;
    getNestingKind(): NestingKind;
    getPermittedSubclasses(): TypeMirror[];
    getQualifiedName(): Name;
    getRecordComponents(): RecordComponentElement[];
    getSimpleName(): Name;
    getSuperclass(): TypeMirror;
    getTypeParameters(): TypeParameterElement[];
}