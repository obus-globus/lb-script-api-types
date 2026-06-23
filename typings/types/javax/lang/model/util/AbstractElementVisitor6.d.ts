import type { Element } from '../../../../javax/lang/model/element/Element.d.ts'
import type { ElementVisitor } from '../../../../javax/lang/model/element/ElementVisitor.d.ts'
import type { ModuleElement } from '../../../../javax/lang/model/element/ModuleElement.d.ts'
import type { RecordComponentElement } from '../../../../javax/lang/model/element/RecordComponentElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractElementVisitor6<R extends unknown, P extends unknown> extends Object implements ElementVisitor<R, P> {
    constructor()
    visit(arg0: Element): R;
    visit(arg0: Element, arg1: P): R;
    visitModule(arg0: ModuleElement, arg1: P): R;
    visitRecordComponent(arg0: RecordComponentElement, arg1: P): R;
    visitUnknown(arg0: Element, arg1: P): R;
}