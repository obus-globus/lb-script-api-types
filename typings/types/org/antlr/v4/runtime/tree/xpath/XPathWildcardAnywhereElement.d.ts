import type { ParseTree } from '../../../../../../org/antlr/v4/runtime/tree/ParseTree.d.ts'
import type { XPathElement } from '../../../../../../org/antlr/v4/runtime/tree/xpath/XPathElement.d.ts'
export class XPathWildcardAnywhereElement extends XPathElement {
    constructor()
    evaluate(arg0: ParseTree): ParseTree[];
}