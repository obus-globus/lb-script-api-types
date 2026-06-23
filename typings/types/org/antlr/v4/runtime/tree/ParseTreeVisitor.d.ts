import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ErrorNode } from '../../../../../org/antlr/v4/runtime/tree/ErrorNode.d.ts'
import type { ParseTree } from '../../../../../org/antlr/v4/runtime/tree/ParseTree.d.ts'
import type { RuleNode } from '../../../../../org/antlr/v4/runtime/tree/RuleNode.d.ts'
import type { TerminalNode } from '../../../../../org/antlr/v4/runtime/tree/TerminalNode.d.ts'
export interface ParseTreeVisitor<T extends unknown> extends Object{
    visit(arg0: ParseTree): T;
    visitChildren(arg0: RuleNode): T;
    visitErrorNode(arg0: ErrorNode): T;
    visitTerminal(arg0: TerminalNode): T;
}