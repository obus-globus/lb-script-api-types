import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParserRuleContext } from '../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { ParseTreeListener } from '../../../../org/antlr/v4/runtime/tree/ParseTreeListener.d.ts'
import type { ParseTreeVisitor } from '../../../../org/antlr/v4/runtime/tree/ParseTreeVisitor.d.ts'
import type { TerminalNode } from '../../../../org/antlr/v4/runtime/tree/TerminalNode.d.ts'
export class GLSLParser$BuiltinTypeSpecifierParseableContext extends ParserRuleContext {
    static EMPTY: ParserRuleContext;
    constructor(arg0: ParserRuleContext, arg1: number)
    BOOL(): TerminalNode;
    BVEC2(): TerminalNode;
    BVEC3(): TerminalNode;
    BVEC4(): TerminalNode;
    F16MAT2X2(): TerminalNode;
    F16MAT2X3(): TerminalNode;
    F16MAT2X4(): TerminalNode;
    F16MAT3X2(): TerminalNode;
    F16MAT3X3(): TerminalNode;
    F16MAT3X4(): TerminalNode;
    F16MAT4X2(): TerminalNode;
    F16MAT4X3(): TerminalNode;
    F16MAT4X4(): TerminalNode;
    F16VEC2(): TerminalNode;
    F16VEC3(): TerminalNode;
    F16VEC4(): TerminalNode;
    F32MAT2X2(): TerminalNode;
    F32MAT2X3(): TerminalNode;
    F32MAT2X4(): TerminalNode;
    F32MAT3X2(): TerminalNode;
    F32MAT3X3(): TerminalNode;
    F32MAT3X4(): TerminalNode;
    F32MAT4X2(): TerminalNode;
    F32MAT4X3(): TerminalNode;
    F32MAT4X4(): TerminalNode;
    F32VEC2(): TerminalNode;
    F32VEC3(): TerminalNode;
    F32VEC4(): TerminalNode;
    F64MAT2X2(): TerminalNode;
    F64MAT2X3(): TerminalNode;
    F64MAT2X4(): TerminalNode;
    F64MAT3X2(): TerminalNode;
    F64MAT3X3(): TerminalNode;
    F64MAT3X4(): TerminalNode;
    F64MAT4X2(): TerminalNode;
    F64MAT4X3(): TerminalNode;
    F64MAT4X4(): TerminalNode;
    F64VEC2(): TerminalNode;
    F64VEC3(): TerminalNode;
    F64VEC4(): TerminalNode;
    FLOAT16(): TerminalNode;
    FLOAT32(): TerminalNode;
    FLOAT64(): TerminalNode;
    I16VEC2(): TerminalNode;
    I16VEC3(): TerminalNode;
    I16VEC4(): TerminalNode;
    I32VEC2(): TerminalNode;
    I32VEC3(): TerminalNode;
    I32VEC4(): TerminalNode;
    I64VEC2(): TerminalNode;
    I64VEC3(): TerminalNode;
    I64VEC4(): TerminalNode;
    I8VEC2(): TerminalNode;
    I8VEC3(): TerminalNode;
    I8VEC4(): TerminalNode;
    INT16(): TerminalNode;
    INT32(): TerminalNode;
    INT64(): TerminalNode;
    INT8(): TerminalNode;
    U16VEC2(): TerminalNode;
    U16VEC3(): TerminalNode;
    U16VEC4(): TerminalNode;
    U32VEC2(): TerminalNode;
    U32VEC3(): TerminalNode;
    U32VEC4(): TerminalNode;
    U64VEC2(): TerminalNode;
    U64VEC3(): TerminalNode;
    U64VEC4(): TerminalNode;
    U8VEC2(): TerminalNode;
    U8VEC3(): TerminalNode;
    U8VEC4(): TerminalNode;
    UINT16(): TerminalNode;
    UINT32(): TerminalNode;
    UINT64(): TerminalNode;
    UINT8(): TerminalNode;
    accept<T extends Object | number | string | boolean>(arg0: ParseTreeVisitor<T>): T;
    enterRule(arg0: ParseTreeListener): void;
    exitRule(arg0: ParseTreeListener): void;
    getRuleIndex(): number;
}