import type { Block } from '../../../../../com/oracle/js/parser/ir/Block.d.ts'
import type { CatchNode } from '../../../../../com/oracle/js/parser/ir/CatchNode.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { Statement } from '../../../../../com/oracle/js/parser/ir/Statement.d.ts'
import type { Symbol } from '../../../../../com/oracle/js/parser/ir/Symbol.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TryNode extends Statement {
    private constructor(tryNode: TryNode, body: Block, catchBlocks: Block[], finallyBody: Block)
    constructor(lineNumber: number, token: number, finish: number, body: Block, catchBlocks: Block[], finallyBody: Block)
    readonly body: Block;
    readonly catchBlocks: Block[];
    readonly exception: Symbol;
    readonly finallyBody: Block;
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends unknown>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getBody(): Block;
    getCatchBlocks(): Block[];
    getCatches(): CatchNode[];
    getException(): Symbol;
    getFinallyBody(): Block;
    isCompletionValueNeverEmpty(): boolean;
    isTerminal(): boolean;
    setBody(body: Block): TryNode;
    setCatchBlocks(catchBlocks: Block[]): TryNode;
    setFinallyBody(finallyBody: Block): TryNode;
    toString(): string;
    toString(sb: StringBuilder, printType: boolean): void;
    toString(includeTypeInfo: boolean): string;
}