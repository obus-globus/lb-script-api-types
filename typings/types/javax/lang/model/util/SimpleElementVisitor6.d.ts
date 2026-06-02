import type { Element } from '../../../../javax/lang/model/element/Element.d.ts'
import type { ExecutableElement } from '../../../../javax/lang/model/element/ExecutableElement.d.ts'
import type { PackageElement } from '../../../../javax/lang/model/element/PackageElement.d.ts'
import type { TypeElement } from '../../../../javax/lang/model/element/TypeElement.d.ts'
import type { TypeParameterElement } from '../../../../javax/lang/model/element/TypeParameterElement.d.ts'
import type { VariableElement } from '../../../../javax/lang/model/element/VariableElement.d.ts'
import type { AbstractElementVisitor6 } from '../../../../javax/lang/model/util/AbstractElementVisitor6.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SimpleElementVisitor6<R extends Object | number | string | boolean, P extends Object | number | string | boolean> extends AbstractElementVisitor6<R, P> {
    constructor()
    constructor(arg0: R)
    // private DEFAULT_VALUE: R;
    defaultAction(arg0: Element, arg1: P): R;
    visitExecutable(arg0: ExecutableElement, arg1: P): R;
    visitPackage(arg0: PackageElement, arg1: P): R;
    visitType(arg0: TypeElement, arg1: P): R;
    visitTypeParameter(arg0: TypeParameterElement, arg1: P): R;
    visitVariable(arg0: VariableElement, arg1: P): R;
}