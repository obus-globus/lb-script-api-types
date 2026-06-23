import type { Expression } from '../../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { TemplateLiteralNode } from '../../../../../com/oracle/js/parser/ir/TemplateLiteralNode.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TemplateLiteralNode$TaggedTemplateLiteralNode extends TemplateLiteralNode {
    static newTagged(paramtoken: number, paramfinish: number, paramrawStrings: Expression[], paramcookedStrings: Expression[]): TemplateLiteralNode;
    static newUntagged(paramtoken: number, paramfinish: number, paramexpressions: Expression[]): TemplateLiteralNode;
    constructor(token: number, finish: number, rawStrings: Expression[], cookedStrings: Expression[])
    readonly cookedStrings: Expression[];
    readonly rawStrings: Expression[];
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends unknown>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getCookedStrings(): Expression[];
    getRawStrings(): Expression[];
    toString(): string;
    toString(sb: StringBuilder, printType: boolean): void;
    toString(includeTypeInfo: boolean): string;
}