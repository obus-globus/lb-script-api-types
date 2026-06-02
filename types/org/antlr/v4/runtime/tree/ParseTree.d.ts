import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Parser } from '../../../../../org/antlr/v4/runtime/Parser.d.ts'
import type { RuleContext } from '../../../../../org/antlr/v4/runtime/RuleContext.d.ts'
import type { ParseTreeVisitor } from '../../../../../org/antlr/v4/runtime/tree/ParseTreeVisitor.d.ts'
import type { SyntaxTree } from '../../../../../org/antlr/v4/runtime/tree/SyntaxTree.d.ts'
export interface ParseTree extends Object, SyntaxTree{
    accept<T extends Object | number | string | boolean>(arg0: ParseTreeVisitor<T>): T;
    getChild(arg0: number): ParseTree;
    getParent(): ParseTree;
    getText(): string;
    setParent(arg0: RuleContext): void;
    toStringTree(arg0: Parser): string;
}