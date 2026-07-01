import type { Expression } from '../../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { LiteralNode } from '../../../../../com/oracle/js/parser/ir/LiteralNode.d.ts'
import type { NamedExportsNode } from '../../../../../com/oracle/js/parser/ir/NamedExportsNode.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { PropertyKey } from '../../../../../com/oracle/js/parser/ir/PropertyKey.d.ts'
import type { VarNode } from '../../../../../com/oracle/js/parser/ir/VarNode.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ExportNode extends Node {
    constructor(token: number, start: number, finish: number, exportClause: NamedExportsNode, moduleSpecifier: LiteralNode<TruffleString>, attributes: Map<TruffleString, TruffleString>)
    constructor(token: number, start: number, finish: number, ident: PropertyKey, expression: Expression, isDefault: boolean)
    constructor(token: number, start: number, finish: number, ident: PropertyKey, moduleSpecifier: LiteralNode<TruffleString>, attributes: Map<TruffleString, TruffleString>)
    constructor(token: number, start: number, finish: number, ident: PropertyKey, var_: VarNode)
    readonly attributes: Map<TruffleString, TruffleString>;
    // private exportIdent: PropertyKey;
    readonly expression: Expression;
    // private isDefault: boolean;
    readonly moduleSpecifier: LiteralNode<TruffleString>;
    readonly namedExports: NamedExportsNode;
    readonly var: VarNode;
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends unknown>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getAttributes(): Map<TruffleString, TruffleString>;
    getExportIdentifier(): PropertyKey;
    getExpression(): Expression;
    getModuleSpecifier(): LiteralNode<TruffleString>;
    getNamedExports(): NamedExportsNode;
    getVar(): VarNode;
    isDefault(): boolean;
    setExportClause(exportClause: NamedExportsNode): ExportNode;
    setFromSpecifier(from: LiteralNode<TruffleString>): ExportNode;
    toString(): string;
    toString(sb: StringBuilder, printType: boolean): void;
    toString(includeTypeInfo: boolean): string;
}