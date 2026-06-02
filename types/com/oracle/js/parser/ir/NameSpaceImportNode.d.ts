import type { IdentNode } from '../../../../../com/oracle/js/parser/ir/IdentNode.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NameSpaceImportNode extends Node {
    private constructor(node: NameSpaceImportNode, bindingIdentifier: IdentNode)
    constructor(token: number, start: number, finish: number, bindingIdentifier: IdentNode)
    readonly bindingIdentifier: IdentNode;
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends Object | number | string | boolean>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getBindingIdentifier(): IdentNode;
    setBindingIdentifier(bindingIdentifier: IdentNode): NameSpaceImportNode;
    toString(sb: StringBuilder, printType: boolean): void;
}