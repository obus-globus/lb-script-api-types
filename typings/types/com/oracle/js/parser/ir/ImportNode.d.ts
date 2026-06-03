import type { ImportClauseNode } from '../../../../../com/oracle/js/parser/ir/ImportClauseNode.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { LiteralNode } from '../../../../../com/oracle/js/parser/ir/LiteralNode.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ImportNode extends Node {
    private constructor(node: ImportNode, moduleSpecifier: LiteralNode<TruffleString>, importClause: ImportClauseNode)
    constructor(token: number, start: number, finish: number, importClause: ImportClauseNode, moduleSpecifier: LiteralNode<TruffleString>, attributes: Map<TruffleString, TruffleString>)
    private constructor(token: number, start: number, finish: number, moduleSpecifier: LiteralNode<TruffleString>, importClause: ImportClauseNode, attributes: Map<TruffleString, TruffleString>)
    constructor(token: number, start: number, finish: number, moduleSpecifier: LiteralNode<TruffleString>, attributes: Map<TruffleString, TruffleString>)
    readonly attributes: Map<TruffleString, TruffleString>;
    readonly importClause: ImportClauseNode;
    readonly moduleSpecifier: LiteralNode<TruffleString>;
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends Object | number | string | boolean>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getAttributes(): Map<TruffleString, TruffleString>;
    getImportClause(): ImportClauseNode;
    getModuleSpecifier(): LiteralNode<TruffleString>;
    setImportClause(importClause: ImportClauseNode): ImportNode;
    setModuleSpecifier(moduleSpecifier: LiteralNode<TruffleString>): ImportNode;
    toString(): string;
    toString(sb: StringBuilder, printType: boolean): void;
    toString(includeTypeInfo: boolean): string;
}