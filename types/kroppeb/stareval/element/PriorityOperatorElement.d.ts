import type { Object } from '../../../java/lang/Object.d.ts'
import type { Element } from '../../../kroppeb/stareval/element/Element.d.ts'
import type { ExpressionElement } from '../../../kroppeb/stareval/element/ExpressionElement.d.ts'
export interface PriorityOperatorElement extends Object, Element{
    getPriority(): number;
    resolveWith(arg0: ExpressionElement): ExpressionElement;
}