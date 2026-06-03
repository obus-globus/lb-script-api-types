import type { Expression } from '../../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { Statement } from '../../../../../com/oracle/js/parser/ir/Statement.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ReturnNode extends Statement {
    private constructor(returnNode: ReturnNode, expression: Expression)
    constructor(lineNumber: number, token: number, finish: number, expression: Expression)
    readonly expression: Expression;
    readonly inTerminalPosition: boolean;
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends Object | number | string | boolean>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getExpression(): Expression;
    isCompletionValueNeverEmpty(): boolean;
    isInTerminalPosition(): boolean;
    isTerminal(): boolean;
    setExpression(expression: Expression): ReturnNode;
    setInTerminalPosition(inTerminalPosition: boolean): void;
    toString(): string;
    toString(sb: StringBuilder, printType: boolean): void;
    toString(includeTypeInfo: boolean): string;
}