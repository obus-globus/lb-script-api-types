import type { Element } from '../../../javax/swing/text/Element.d.ts'
import type { View } from '../../../javax/swing/text/View.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ViewFactory extends Object{
    create(arg0: Element): View;
}