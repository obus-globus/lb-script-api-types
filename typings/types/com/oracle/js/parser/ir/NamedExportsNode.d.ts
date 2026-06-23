import type { ExportSpecifierNode } from '../../../../../com/oracle/js/parser/ir/ExportSpecifierNode.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NamedExportsNode extends Node {
    private constructor(node: NamedExportsNode, exportSpecifiers: ExportSpecifierNode[])
    constructor(token: number, start: number, finish: number, exportSpecifiers: ExportSpecifierNode[])
    readonly exportSpecifiers: ExportSpecifierNode[];
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends unknown>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getExportSpecifiers(): ExportSpecifierNode[];
    setExportSpecifiers(exportSpecifiers: ExportSpecifierNode[]): NamedExportsNode;
    toString(): string;
    toString(sb: StringBuilder, printType: boolean): void;
    toString(includeTypeInfo: boolean): string;
}