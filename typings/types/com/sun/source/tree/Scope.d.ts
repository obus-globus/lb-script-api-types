import type { Element } from '../../../../javax/lang/model/element/Element.d.ts'
import type { ExecutableElement } from '../../../../javax/lang/model/element/ExecutableElement.d.ts'
import type { TypeElement } from '../../../../javax/lang/model/element/TypeElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Scope extends Object{
    getEnclosingClass(): TypeElement;
    getEnclosingMethod(): ExecutableElement;
    getEnclosingScope(): Scope;
    getLocalElements(): Element[];
}