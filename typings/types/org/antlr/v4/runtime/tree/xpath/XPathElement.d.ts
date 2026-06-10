import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ParseTree } from '../../../../../../org/antlr/v4/runtime/tree/ParseTree.d.ts'
export abstract class XPathElement extends Object {
    constructor(arg0: string)
    // private invert: boolean;
    // private nodeName: string;
    evaluate(arg0: ParseTree): ParseTree[];
    toString(): string;
}