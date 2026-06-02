import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Parser } from '../../../../../org/antlr/v4/runtime/Parser.d.ts'
import type { RuleContext } from '../../../../../org/antlr/v4/runtime/RuleContext.d.ts'
import type { Token } from '../../../../../org/antlr/v4/runtime/Token.d.ts'
import type { Interval } from '../../../../../org/antlr/v4/runtime/misc/Interval.d.ts'
import type { ParseTree } from '../../../../../org/antlr/v4/runtime/tree/ParseTree.d.ts'
import type { ParseTreeVisitor } from '../../../../../org/antlr/v4/runtime/tree/ParseTreeVisitor.d.ts'
import type { TerminalNode } from '../../../../../org/antlr/v4/runtime/tree/TerminalNode.d.ts'
export class TerminalNodeImpl extends Object implements TerminalNode {
    constructor(arg0: Token)
    parent: ParseTree;
    symbol: Token;
    accept<T extends Object | number | string | boolean>(arg0: ParseTreeVisitor<T>): T;
    getChild(arg0: number): ParseTree;
    getChildCount(): number;
    getParent(): ParseTree;
    getPayload(): Token;
    getSourceInterval(): Interval;
    getSymbol(): Token;
    getText(): string;
    setParent(arg0: RuleContext): void;
    toString(): string;
    toStringTree(): string;
    toStringTree(arg0: Parser): string;
}