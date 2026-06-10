import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Parser } from '../../../../../../org/antlr/v4/runtime/Parser.d.ts'
import type { Token } from '../../../../../../org/antlr/v4/runtime/Token.d.ts'
import type { ParseTree } from '../../../../../../org/antlr/v4/runtime/tree/ParseTree.d.ts'
import type { XPathElement } from '../../../../../../org/antlr/v4/runtime/tree/xpath/XPathElement.d.ts'
export class XPath extends Object {
    static NOT: string;
    static WILDCARD: string;
    static findAll(paramarg0: ParseTree, paramarg1: string, paramarg2: Parser): ParseTree[];
    constructor(arg0: Parser, arg1: string)
    // private elements: XPathElement[];
    // private parser: Parser;
    // private path: string;
    evaluate(arg0: ParseTree): ParseTree[];
    getXPathElement(arg0: Token, arg1: boolean): XPathElement;
    split(arg0: string): XPathElement[];
}