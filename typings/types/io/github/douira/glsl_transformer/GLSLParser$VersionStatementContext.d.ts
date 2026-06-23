import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParserRuleContext } from '../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { Token } from '../../../../org/antlr/v4/runtime/Token.d.ts'
import type { ParseTreeListener } from '../../../../org/antlr/v4/runtime/tree/ParseTreeListener.d.ts'
import type { ParseTreeVisitor } from '../../../../org/antlr/v4/runtime/tree/ParseTreeVisitor.d.ts'
import type { TerminalNode } from '../../../../org/antlr/v4/runtime/tree/TerminalNode.d.ts'
export class GLSLParser$VersionStatementContext extends ParserRuleContext {
    static EMPTY: ParserRuleContext;
    constructor(arg0: ParserRuleContext, arg1: number)
    profile: Token;
    version: Token;
    NR(): TerminalNode;
    NR_COMPATIBILITY(): TerminalNode;
    NR_CORE(): TerminalNode;
    NR_EOL(): TerminalNode;
    NR_ES(): TerminalNode;
    NR_GLSLES_100(): TerminalNode;
    NR_GLSLES_300(): TerminalNode;
    NR_GLSLES_310(): TerminalNode;
    NR_GLSLES_320(): TerminalNode;
    NR_GLSL_110(): TerminalNode;
    NR_GLSL_120(): TerminalNode;
    NR_GLSL_130(): TerminalNode;
    NR_GLSL_140(): TerminalNode;
    NR_GLSL_150(): TerminalNode;
    NR_GLSL_330(): TerminalNode;
    NR_GLSL_400(): TerminalNode;
    NR_GLSL_410(): TerminalNode;
    NR_GLSL_420(): TerminalNode;
    NR_GLSL_430(): TerminalNode;
    NR_GLSL_440(): TerminalNode;
    NR_GLSL_450(): TerminalNode;
    NR_GLSL_460(): TerminalNode;
    NR_VERSION(): TerminalNode;
    accept<T extends unknown>(arg0: ParseTreeVisitor<T>): T;
    enterRule(arg0: ParseTreeListener): void;
    exitRule(arg0: ParseTreeListener): void;
    getRuleIndex(): number;
}