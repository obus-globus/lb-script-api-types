import type { Element } from '../../../../../javax/lang/model/element/Element.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface IJavadocProvider extends Object{
    getJavadoc(arg0: Element): string;
}