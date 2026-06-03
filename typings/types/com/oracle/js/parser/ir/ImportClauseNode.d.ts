import type { IdentNode } from '../../../../../com/oracle/js/parser/ir/IdentNode.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { NameSpaceImportNode } from '../../../../../com/oracle/js/parser/ir/NameSpaceImportNode.d.ts'
import type { NamedImportsNode } from '../../../../../com/oracle/js/parser/ir/NamedImportsNode.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ImportClauseNode extends Node {
    private constructor(node: ImportClauseNode, defaultBinding: IdentNode, nameSpaceImport: NameSpaceImportNode, namedImports: NamedImportsNode)
    constructor(token: number, start: number, finish: number, defaultBinding: IdentNode)
    constructor(token: number, start: number, finish: number, defaultBinding: IdentNode, nameSpaceImport: NameSpaceImportNode)
    private constructor(token: number, start: number, finish: number, defaultBinding: IdentNode, nameSpaceImport: NameSpaceImportNode, namedImports: NamedImportsNode)
    constructor(token: number, start: number, finish: number, defaultBinding: IdentNode, namedImports: NamedImportsNode)
    constructor(token: number, start: number, finish: number, nameSpaceImport: NameSpaceImportNode)
    constructor(token: number, start: number, finish: number, namedImportsNode: NamedImportsNode)
    readonly defaultBinding: IdentNode;
    readonly nameSpaceImport: NameSpaceImportNode;
    readonly namedImports: NamedImportsNode;
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends Object | number | string | boolean>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getDefaultBinding(): IdentNode;
    getNameSpaceImport(): NameSpaceImportNode;
    getNamedImports(): NamedImportsNode;
    setDefaultBinding(defaultBinding: IdentNode): ImportClauseNode;
    setNameSpaceImport(nameSpaceImport: NameSpaceImportNode): ImportClauseNode;
    setNamedImports(namedImports: NamedImportsNode): ImportClauseNode;
    toString(): string;
    toString(sb: StringBuilder, printType: boolean): void;
    toString(includeTypeInfo: boolean): string;
}