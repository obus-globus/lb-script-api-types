import type { GLSLParser$CaseLabelContext } from '../../../../io/github/douira/glsl_transformer/GLSLParser$CaseLabelContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParserRuleContext } from '../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { ParseTreeListener } from '../../../../org/antlr/v4/runtime/tree/ParseTreeListener.d.ts'
import type { ParseTreeVisitor } from '../../../../org/antlr/v4/runtime/tree/ParseTreeVisitor.d.ts'
import type { TerminalNode } from '../../../../org/antlr/v4/runtime/tree/TerminalNode.d.ts'
export class GLSLParser$DefaultCaseLabelContext extends GLSLParser$CaseLabelContext {
    static EMPTY: ParserRuleContext;
    constructor(arg0: GLSLParser$CaseLabelContext)
    COLON(): TerminalNode;
    DEFAULT(): TerminalNode;
    accept<T extends Object | number | string | boolean>(arg0: ParseTreeVisitor<T>): T;
    enterRule(arg0: ParseTreeListener): void;
    exitRule(arg0: ParseTreeListener): void;
}