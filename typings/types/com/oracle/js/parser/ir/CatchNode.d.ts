import type { Block } from '../../../../../com/oracle/js/parser/ir/Block.d.ts'
import type { Expression } from '../../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { IdentNode } from '../../../../../com/oracle/js/parser/ir/IdentNode.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { Statement } from '../../../../../com/oracle/js/parser/ir/Statement.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CatchNode extends Statement {
    constructor(lineNumber: number, token: number, finish: number, exception: IdentNode, pattern: Expression, exceptionCondition: Expression, body: Block, isSyntheticRethrow: boolean)
    readonly body: Block;
    readonly exception: IdentNode;
    readonly exceptionCondition: Expression;
    // private isSyntheticRethrow: boolean;
    // private pattern: Expression;
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends unknown>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getBody(): Block;
    getDestructuringPattern(): Expression;
    getException(): Expression;
    getExceptionCondition(): Expression;
    isSyntheticRethrow(): boolean;
    isTerminal(): boolean;
    // private setBody(body: Block): CatchNode;
    setDestructuringPattern(pattern: Expression): CatchNode;
    setException(exception: IdentNode): CatchNode;
    setExceptionCondition(exceptionCondition: Expression): CatchNode;
    toString(): string;
    toString(sb: StringBuilder, printTypes: boolean): void;
    toString(includeTypeInfo: boolean): string;
}