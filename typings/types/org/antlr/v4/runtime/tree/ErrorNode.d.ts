import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Parser } from '../../../../../org/antlr/v4/runtime/Parser.d.ts'
import type { RuleContext } from '../../../../../org/antlr/v4/runtime/RuleContext.d.ts'
import type { Token } from '../../../../../org/antlr/v4/runtime/Token.d.ts'
import type { Interval } from '../../../../../org/antlr/v4/runtime/misc/Interval.d.ts'
import type { ParseTree } from '../../../../../org/antlr/v4/runtime/tree/ParseTree.d.ts'
import type { TerminalNode } from '../../../../../org/antlr/v4/runtime/tree/TerminalNode.d.ts'
import type { Tree } from '../../../../../org/antlr/v4/runtime/tree/Tree.d.ts'
export interface ErrorNode extends Object, TerminalNode{
    getChild(arg0: number): ParseTree;
    getChild(arg0: number): Tree;
    getChildCount(): number;
    getParent(): ParseTree;
    getParent(): Tree;
    getPayload(): Object;
    getSourceInterval(): Interval;
    getSymbol(): Token;
    getText(): string;
    setParent(arg0: RuleContext): void;
    toStringTree(arg0: Parser): string;
    toStringTree(): string;
}