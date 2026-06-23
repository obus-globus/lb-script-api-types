import type { ImportSpecifierNode } from '../../../../../com/oracle/js/parser/ir/ImportSpecifierNode.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NamedImportsNode extends Node {
    private constructor(node: NamedImportsNode, importSpecifiers: ImportSpecifierNode[])
    constructor(token: number, start: number, finish: number, importSpecifiers: ImportSpecifierNode[])
    readonly importSpecifiers: ImportSpecifierNode[];
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends unknown>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getImportSpecifiers(): ImportSpecifierNode[];
    setImportSpecifiers(importSpecifiers: ImportSpecifierNode[]): NamedImportsNode;
    toString(): string;
    toString(sb: StringBuilder, printType: boolean): void;
    toString(includeTypeInfo: boolean): string;
}