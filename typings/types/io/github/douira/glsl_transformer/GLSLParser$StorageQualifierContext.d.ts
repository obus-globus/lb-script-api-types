import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParserRuleContext } from '../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { Token } from '../../../../org/antlr/v4/runtime/Token.d.ts'
import type { ParseTreeListener } from '../../../../org/antlr/v4/runtime/tree/ParseTreeListener.d.ts'
import type { ParseTreeVisitor } from '../../../../org/antlr/v4/runtime/tree/ParseTreeVisitor.d.ts'
import type { TerminalNode } from '../../../../org/antlr/v4/runtime/tree/TerminalNode.d.ts'
export class GLSLParser$StorageQualifierContext extends ParserRuleContext {
    static EMPTY: ParserRuleContext;
    constructor(arg0: ParserRuleContext, arg1: number)
    typeNames: Token[];
    ATTRIBUTE(): TerminalNode;
    BUFFER(): TerminalNode;
    CALLABLE_DATA_EXT(): TerminalNode;
    CALLABLE_DATA_IN_EXT(): TerminalNode;
    CENTROID(): TerminalNode;
    COHERENT(): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(arg0: number): TerminalNode;
    CONST(): TerminalNode;
    DEVICECOHERENT(): TerminalNode;
    HIT_ATTRIBUTE_EXT(): TerminalNode;
    IDENTIFIER(): TerminalNode[];
    IDENTIFIER(arg0: number): TerminalNode;
    IN(): TerminalNode;
    INOUT(): TerminalNode;
    LPAREN(): TerminalNode;
    NONPRIVATE(): TerminalNode;
    OUT(): TerminalNode;
    PATCH(): TerminalNode;
    QUEUEFAMILYCOHERENT(): TerminalNode;
    RAY_PAYLOAD_EXT(): TerminalNode;
    RAY_PAYLOAD_IN_EXT(): TerminalNode;
    READONLY(): TerminalNode;
    RESTRICT(): TerminalNode;
    RPAREN(): TerminalNode;
    SAMPLE(): TerminalNode;
    SHARED(): TerminalNode;
    SUBGROUPCOHERENT(): TerminalNode;
    SUBROUTINE(): TerminalNode;
    TASKNV(): TerminalNode;
    UNIFORM(): TerminalNode;
    VARYING(): TerminalNode;
    VOLATILE(): TerminalNode;
    WORKGROUPCOHERENT(): TerminalNode;
    WRITEONLY(): TerminalNode;
    accept<T extends Object | number | string | boolean>(arg0: ParseTreeVisitor<T>): T;
    enterRule(arg0: ParseTreeListener): void;
    exitRule(arg0: ParseTreeListener): void;
    getRuleIndex(): number;
}