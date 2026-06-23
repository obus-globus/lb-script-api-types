import type { Element } from '../../../../javax/lang/model/element/Element.d.ts'
import type { ExecutableElement } from '../../../../javax/lang/model/element/ExecutableElement.d.ts'
import type { ModuleElement } from '../../../../javax/lang/model/element/ModuleElement.d.ts'
import type { PackageElement } from '../../../../javax/lang/model/element/PackageElement.d.ts'
import type { RecordComponentElement } from '../../../../javax/lang/model/element/RecordComponentElement.d.ts'
import type { TypeElement } from '../../../../javax/lang/model/element/TypeElement.d.ts'
import type { TypeParameterElement } from '../../../../javax/lang/model/element/TypeParameterElement.d.ts'
import type { VariableElement } from '../../../../javax/lang/model/element/VariableElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ElementVisitor<R extends unknown, P extends unknown> extends Object{
    visit(arg0: Element): R;
    visit(arg0: Element, arg1: P): R;
    visitExecutable(arg0: ExecutableElement, arg1: P): R;
    visitModule(arg0: ModuleElement, arg1: P): R;
    visitPackage(arg0: PackageElement, arg1: P): R;
    visitRecordComponent(arg0: RecordComponentElement, arg1: P): R;
    visitType(arg0: TypeElement, arg1: P): R;
    visitTypeParameter(arg0: TypeParameterElement, arg1: P): R;
    visitUnknown(arg0: Element, arg1: P): R;
    visitVariable(arg0: VariableElement, arg1: P): R;
}