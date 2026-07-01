import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { PropertyKey } from '../../../../../com/oracle/js/parser/ir/PropertyKey.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ExportSpecifierNode extends Node {
    constructor(token: number, start: number, finish: number, identifier: PropertyKey, exportIdentifier: PropertyKey)
    readonly exportIdentifier: PropertyKey;
    readonly identifier: PropertyKey;
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends unknown>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getExportIdentifier(): PropertyKey;
    getIdentifier(): PropertyKey;
    setExportIdentifier(exportIdentifier: PropertyKey): ExportSpecifierNode;
    setIdentifier(identifier: PropertyKey): ExportSpecifierNode;
    toString(): string;
    toString(sb: StringBuilder, printType: boolean): void;
    toString(includeTypeInfo: boolean): string;
}