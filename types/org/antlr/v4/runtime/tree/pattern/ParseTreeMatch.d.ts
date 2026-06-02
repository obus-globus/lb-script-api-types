import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ParseTree } from '../../../../../../org/antlr/v4/runtime/tree/ParseTree.d.ts'
import type { ParseTreePattern } from '../../../../../../org/antlr/v4/runtime/tree/pattern/ParseTreePattern.d.ts'
export class ParseTreeMatch extends Object {
    constructor(arg0: ParseTree, arg1: ParseTreePattern, arg2: { [key: string]: ParseTree }, arg3: ParseTree)
    readonly labels: { [key: string]: ParseTree };
    readonly mismatchedNode: ParseTree;
    readonly pattern: ParseTreePattern;
    readonly tree: ParseTree;
    get(arg0: string): ParseTree;
    getAll(arg0: string): ParseTree[];
    getLabels(): { [key: string]: ParseTree };
    getMismatchedNode(): ParseTree;
    getPattern(): ParseTreePattern;
    getTree(): ParseTree;
    succeeded(): boolean;
    toString(): string;
}