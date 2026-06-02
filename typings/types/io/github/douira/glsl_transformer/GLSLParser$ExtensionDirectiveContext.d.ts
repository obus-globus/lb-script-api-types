import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParserRuleContext } from '../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { Token } from '../../../../org/antlr/v4/runtime/Token.d.ts'
import type { ParseTreeListener } from '../../../../org/antlr/v4/runtime/tree/ParseTreeListener.d.ts'
import type { ParseTreeVisitor } from '../../../../org/antlr/v4/runtime/tree/ParseTreeVisitor.d.ts'
import type { TerminalNode } from '../../../../org/antlr/v4/runtime/tree/TerminalNode.d.ts'
export class GLSLParser$ExtensionDirectiveContext extends ParserRuleContext {
    static EMPTY: ParserRuleContext;
    constructor(arg0: ParserRuleContext, arg1: number)
    extensionBehavior: Token;
    extensionName: Token;
    NR(): TerminalNode;
    NR_COLON(): TerminalNode;
    NR_DISABLE(): TerminalNode;
    NR_ENABLE(): TerminalNode;
    NR_EOL(): TerminalNode;
    NR_EXTENSION(): TerminalNode;
    NR_IDENTIFIER(): TerminalNode;
    NR_REQUIRE(): TerminalNode;
    NR_WARN(): TerminalNode;
    accept<T extends Object | number | string | boolean>(arg0: ParseTreeVisitor<T>): T;
    enterRule(arg0: ParseTreeListener): void;
    exitRule(arg0: ParseTreeListener): void;
    getRuleIndex(): number;
}