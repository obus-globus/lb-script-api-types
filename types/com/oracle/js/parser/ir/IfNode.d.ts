import type { Block } from '../../../../../com/oracle/js/parser/ir/Block.d.ts'
import type { Expression } from '../../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { Statement } from '../../../../../com/oracle/js/parser/ir/Statement.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IfNode extends Statement {
    private constructor(ifNode: IfNode, test: Expression, pass: Block, fail: Block)
    constructor(lineNumber: number, token: number, finish: number, test: Expression, pass: Block, fail: Block)
    readonly fail: Block;
    readonly pass: Block;
    readonly test: Expression;
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends Object | number | string | boolean>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getFail(): Block;
    getPass(): Block;
    getTest(): Expression;
    isCompletionValueNeverEmpty(): boolean;
    isTerminal(): boolean;
    // private setFail(fail: Block): IfNode;
    // private setPass(pass: Block): IfNode;
    setTest(test: Expression): IfNode;
    toString(sb: StringBuilder, printTypes: boolean): void;
}