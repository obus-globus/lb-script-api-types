import type { IdentNode } from '../../../../../com/oracle/js/parser/ir/IdentNode.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { PropertyKey } from '../../../../../com/oracle/js/parser/ir/PropertyKey.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ImportSpecifierNode extends Node {
    private constructor(node: ImportSpecifierNode, bindingIdentifier: IdentNode, identifier: PropertyKey)
    constructor(token: number, start: number, finish: number, bindingIdentifier: IdentNode, identifier: PropertyKey)
    readonly bindingIdentifier: IdentNode;
    readonly identifier: PropertyKey;
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends Object | number | string | boolean>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getBindingIdentifier(): IdentNode;
    getIdentifier(): PropertyKey;
    setBindingIdentifier(bindingIdentifier: IdentNode): ImportSpecifierNode;
    setIdentifier(identifier: PropertyKey): ImportSpecifierNode;
    toString(): string;
    toString(sb: StringBuilder, printType: boolean): void;
    toString(includeTypeInfo: boolean): string;
}