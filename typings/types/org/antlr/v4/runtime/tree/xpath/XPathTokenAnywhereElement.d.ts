import type { ParseTree } from '../../../../../../org/antlr/v4/runtime/tree/ParseTree.d.ts'
import type { XPathElement } from '../../../../../../org/antlr/v4/runtime/tree/xpath/XPathElement.d.ts'
export class XPathTokenAnywhereElement extends XPathElement {
    constructor(arg0: string, arg1: number)
    // private tokenType: number;
    evaluate(arg0: ParseTree): ParseTree[];
}