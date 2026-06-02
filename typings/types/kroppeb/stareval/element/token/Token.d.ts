import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Element } from '../../../../kroppeb/stareval/element/Element.d.ts'
export abstract class Token extends Object implements Element {
    constructor()
    toString(): string;
}