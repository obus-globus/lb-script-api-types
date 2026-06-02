import type { BaseNode } from '../../../../../com/oracle/js/parser/ir/BaseNode.d.ts'
import type { Expression } from '../../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IndexNode extends BaseNode {
    private constructor(indexNode: IndexNode, base: Expression, index: Expression, isSuper: boolean)
    constructor(token: number, finish: number, base: Expression, index: Expression)
    constructor(token: number, finish: number, base: Expression, index: Expression, isSuper: boolean, optional: boolean, optionalChain: boolean)
    readonly index: Expression;
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends Object | number | string | boolean>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getIndex(): Expression;
    // private setBase(base: Expression): IndexNode;
    setIndex(index: Expression): IndexNode;
    setIsSuper(): IndexNode;
    toString(sb: StringBuilder, printType: boolean): void;
}