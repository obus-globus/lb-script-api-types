import type { VariableElement } from '../../../../javax/lang/model/element/VariableElement.d.ts'
import type { SimpleElementVisitor6 } from '../../../../javax/lang/model/util/SimpleElementVisitor6.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SimpleElementVisitor7<R extends Object | number | string | boolean, P extends Object | number | string | boolean> extends SimpleElementVisitor6<R, P> {
    constructor()
    constructor(arg0: R)
    visitVariable(arg0: VariableElement, arg1: P): R;
}