import type { AnnotationValue } from '../../../../javax/lang/model/element/AnnotationValue.d.ts'
import type { Element } from '../../../../javax/lang/model/element/Element.d.ts'
import type { Name } from '../../../../javax/lang/model/element/Name.d.ts'
import type { Parameterizable } from '../../../../javax/lang/model/element/Parameterizable.d.ts'
import type { TypeParameterElement } from '../../../../javax/lang/model/element/TypeParameterElement.d.ts'
import type { VariableElement } from '../../../../javax/lang/model/element/VariableElement.d.ts'
import type { TypeMirror } from '../../../../javax/lang/model/type/TypeMirror.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ExecutableElement extends Element, Parameterizable, Object{
    asType(): TypeMirror;
    getDefaultValue(): AnnotationValue;
    getEnclosingElement(): Element;
    getParameters(): VariableElement[];
    getReceiverType(): TypeMirror;
    getReturnType(): TypeMirror;
    getSimpleName(): Name;
    getThrownTypes(): TypeMirror[];
    getTypeParameters(): TypeParameterElement[];
    isDefault(): boolean;
    isVarArgs(): boolean;
}