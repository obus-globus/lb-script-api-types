import type { Expression } from '../../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { TemplateLiteralNode } from '../../../../../com/oracle/js/parser/ir/TemplateLiteralNode.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TemplateLiteralNode$UntaggedTemplateLiteralNode extends TemplateLiteralNode {
    static newTagged(paramtoken: number, paramfinish: number, paramrawStrings: Expression[], paramcookedStrings: Expression[]): TemplateLiteralNode;
    static newUntagged(paramtoken: number, paramfinish: number, paramexpressions: Expression[]): TemplateLiteralNode;
    constructor(literalNode: TemplateLiteralNode$UntaggedTemplateLiteralNode, expressions: Expression[])
    constructor(token: number, finish: number, expressions: Expression[])
    readonly expressions: Expression[];
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends Object | number | string | boolean>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getExpressions(): Expression[];
    toString(): string;
    toString(sb: StringBuilder, printType: boolean): void;
    toString(includeTypeInfo: boolean): string;
}