import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParserRuleContext } from '../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { Token } from '../../../../org/antlr/v4/runtime/Token.d.ts'
import type { ParseTreeListener } from '../../../../org/antlr/v4/runtime/tree/ParseTreeListener.d.ts'
import type { ParseTreeVisitor } from '../../../../org/antlr/v4/runtime/tree/ParseTreeVisitor.d.ts'
import type { TerminalNode } from '../../../../org/antlr/v4/runtime/tree/TerminalNode.d.ts'
export class GLSLParser$PragmaDirectiveContext extends ParserRuleContext {
    static EMPTY: ParserRuleContext;
    constructor(arg0: ParserRuleContext, arg1: number)
    option: Token;
    state: Token;
    stdGL: Token;
    type: Token;
    NR(): TerminalNode;
    NR_ALL(): TerminalNode;
    NR_EOL(): TerminalNode;
    NR_FASTMATH(): TerminalNode;
    NR_FASTPRECISION(): TerminalNode;
    NR_IDENTIFIER(): TerminalNode;
    NR_IFCVT(): TerminalNode;
    NR_INLINE(): TerminalNode;
    NR_LPAREN(): TerminalNode;
    NR_NONE(): TerminalNode;
    NR_OFF(): TerminalNode;
    NR_ON(): TerminalNode;
    NR_PRAGMA(): TerminalNode;
    NR_PRAGMA_DEBUG(): TerminalNode;
    NR_PRAGMA_INVARIANT(): TerminalNode;
    NR_PRAGMA_OPTIMIZE(): TerminalNode;
    NR_PRAGMA_OPTIONNV(): TerminalNode;
    NR_RPAREN(): TerminalNode;
    NR_STDGL(): TerminalNode;
    NR_STRICT(): TerminalNode;
    NR_UNROLL(): TerminalNode;
    accept<T extends Object | number | string | boolean>(arg0: ParseTreeVisitor<T>): T;
    enterRule(arg0: ParseTreeListener): void;
    exitRule(arg0: ParseTreeListener): void;
    getRuleIndex(): number;
}