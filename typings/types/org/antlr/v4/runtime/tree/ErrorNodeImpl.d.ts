import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Token } from '../../../../../org/antlr/v4/runtime/Token.d.ts'
import type { ErrorNode } from '../../../../../org/antlr/v4/runtime/tree/ErrorNode.d.ts'
import type { ParseTreeVisitor } from '../../../../../org/antlr/v4/runtime/tree/ParseTreeVisitor.d.ts'
import type { TerminalNodeImpl } from '../../../../../org/antlr/v4/runtime/tree/TerminalNodeImpl.d.ts'
export class ErrorNodeImpl extends TerminalNodeImpl implements ErrorNode {
    constructor(arg0: Token)
    accept<T extends unknown>(arg0: ParseTreeVisitor<T>): T;
}