import type { AccessNode } from '../../../../../../com/oracle/js/parser/ir/AccessNode.d.ts'
import type { BinaryNode } from '../../../../../../com/oracle/js/parser/ir/BinaryNode.d.ts'
import type { Block } from '../../../../../../com/oracle/js/parser/ir/Block.d.ts'
import type { BlockExpression } from '../../../../../../com/oracle/js/parser/ir/BlockExpression.d.ts'
import type { BlockStatement } from '../../../../../../com/oracle/js/parser/ir/BlockStatement.d.ts'
import type { BreakNode } from '../../../../../../com/oracle/js/parser/ir/BreakNode.d.ts'
import type { CallNode } from '../../../../../../com/oracle/js/parser/ir/CallNode.d.ts'
import type { CaseNode } from '../../../../../../com/oracle/js/parser/ir/CaseNode.d.ts'
import type { CatchNode } from '../../../../../../com/oracle/js/parser/ir/CatchNode.d.ts'
import type { ClassElement } from '../../../../../../com/oracle/js/parser/ir/ClassElement.d.ts'
import type { ClassNode } from '../../../../../../com/oracle/js/parser/ir/ClassNode.d.ts'
import type { ContinueNode } from '../../../../../../com/oracle/js/parser/ir/ContinueNode.d.ts'
import type { DebuggerNode } from '../../../../../../com/oracle/js/parser/ir/DebuggerNode.d.ts'
import type { EmptyNode } from '../../../../../../com/oracle/js/parser/ir/EmptyNode.d.ts'
import type { ErrorNode } from '../../../../../../com/oracle/js/parser/ir/ErrorNode.d.ts'
import type { ExportNode } from '../../../../../../com/oracle/js/parser/ir/ExportNode.d.ts'
import type { ExportSpecifierNode } from '../../../../../../com/oracle/js/parser/ir/ExportSpecifierNode.d.ts'
import type { ExpressionStatement } from '../../../../../../com/oracle/js/parser/ir/ExpressionStatement.d.ts'
import type { ForNode } from '../../../../../../com/oracle/js/parser/ir/ForNode.d.ts'
import type { FunctionNode } from '../../../../../../com/oracle/js/parser/ir/FunctionNode.d.ts'
import type { IdentNode } from '../../../../../../com/oracle/js/parser/ir/IdentNode.d.ts'
import type { IfNode } from '../../../../../../com/oracle/js/parser/ir/IfNode.d.ts'
import type { ImportClauseNode } from '../../../../../../com/oracle/js/parser/ir/ImportClauseNode.d.ts'
import type { ImportNode } from '../../../../../../com/oracle/js/parser/ir/ImportNode.d.ts'
import type { ImportSpecifierNode } from '../../../../../../com/oracle/js/parser/ir/ImportSpecifierNode.d.ts'
import type { IndexNode } from '../../../../../../com/oracle/js/parser/ir/IndexNode.d.ts'
import type { JoinPredecessorExpression } from '../../../../../../com/oracle/js/parser/ir/JoinPredecessorExpression.d.ts'
import type { LabelNode } from '../../../../../../com/oracle/js/parser/ir/LabelNode.d.ts'
import type { LexicalContext } from '../../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { LiteralNode } from '../../../../../../com/oracle/js/parser/ir/LiteralNode.d.ts'
import type { NameSpaceImportNode } from '../../../../../../com/oracle/js/parser/ir/NameSpaceImportNode.d.ts'
import type { NamedExportsNode } from '../../../../../../com/oracle/js/parser/ir/NamedExportsNode.d.ts'
import type { NamedImportsNode } from '../../../../../../com/oracle/js/parser/ir/NamedImportsNode.d.ts'
import type { Node } from '../../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { ObjectNode } from '../../../../../../com/oracle/js/parser/ir/ObjectNode.d.ts'
import type { ParameterNode } from '../../../../../../com/oracle/js/parser/ir/ParameterNode.d.ts'
import type { PropertyNode } from '../../../../../../com/oracle/js/parser/ir/PropertyNode.d.ts'
import type { ReturnNode } from '../../../../../../com/oracle/js/parser/ir/ReturnNode.d.ts'
import type { SwitchNode } from '../../../../../../com/oracle/js/parser/ir/SwitchNode.d.ts'
import type { TemplateLiteralNode } from '../../../../../../com/oracle/js/parser/ir/TemplateLiteralNode.d.ts'
import type { TernaryNode } from '../../../../../../com/oracle/js/parser/ir/TernaryNode.d.ts'
import type { ThrowNode } from '../../../../../../com/oracle/js/parser/ir/ThrowNode.d.ts'
import type { TryNode } from '../../../../../../com/oracle/js/parser/ir/TryNode.d.ts'
import type { UnaryNode } from '../../../../../../com/oracle/js/parser/ir/UnaryNode.d.ts'
import type { VarNode } from '../../../../../../com/oracle/js/parser/ir/VarNode.d.ts'
import type { WhileNode } from '../../../../../../com/oracle/js/parser/ir/WhileNode.d.ts'
import type { WithNode } from '../../../../../../com/oracle/js/parser/ir/WithNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class TranslatorNodeVisitor<T extends LexicalContext, R extends unknown> extends Object {
    constructor(lc: T)
    // private lc: T;
    enterAccessNode(accessNode: AccessNode): R;
    enterBinaryNode(binaryNode: BinaryNode): R;
    enterBlock(block: Block): R;
    enterBlockExpression(blockExpression: BlockExpression): R;
    enterBlockStatement(blockStatement: BlockStatement): R;
    enterBreakNode(breakNode: BreakNode): R;
    enterCallNode(callNode: CallNode): R;
    enterCaseNode(caseNode: CaseNode): R;
    enterCatchNode(catchNode: CatchNode): R;
    enterClassElement(element: ClassElement): R;
    enterClassNode(classNode: ClassNode): R;
    enterContinueNode(continueNode: ContinueNode): R;
    enterDebuggerNode(debuggerNode: DebuggerNode): R;
    enterDefault(node: Node): R;
    enterEmptyNode(emptyNode: EmptyNode): R;
    enterErrorNode(errorNode: ErrorNode): R;
    enterExportNode(exportNode: ExportNode): R;
    enterExportSpecifierNode(exportSpecifierNode: ExportSpecifierNode): R;
    enterExpressionStatement(expressionStatement: ExpressionStatement): R;
    enterForNode(forNode: ForNode): R;
    enterFunctionNode(functionNode: FunctionNode): R;
    enterIdentNode(identNode: IdentNode): R;
    enterIfNode(ifNode: IfNode): R;
    enterImportClauseNode(importClauseNode: ImportClauseNode): R;
    enterImportNode(importNode: ImportNode): R;
    enterImportSpecifierNode(importSpecifierNode: ImportSpecifierNode): R;
    enterIndexNode(indexNode: IndexNode): R;
    enterJoinPredecessorExpression(expr: JoinPredecessorExpression): R;
    enterLabelNode(labelNode: LabelNode): R;
    enterLiteralNode(literalNode: LiteralNode<Object>): R;
    enterNameSpaceImportNode(nameSpaceImportNode: NameSpaceImportNode): R;
    enterNamedExportsNode(exportClauseNode: NamedExportsNode): R;
    enterNamedImportsNode(namedImportsNode: NamedImportsNode): R;
    enterObjectNode(objectNode: ObjectNode): R;
    enterParameterNode(paramNode: ParameterNode): R;
    enterPropertyNode(propertyNode: PropertyNode): R;
    enterReturnNode(returnNode: ReturnNode): R;
    enterSwitchNode(switchNode: SwitchNode): R;
    enterTemplateLiteralNode(templateLiteralNode: TemplateLiteralNode): R;
    enterTernaryNode(ternaryNode: TernaryNode): R;
    enterThrowNode(throwNode: ThrowNode): R;
    enterTryNode(tryNode: TryNode): R;
    enterUnaryNode(unaryNode: UnaryNode): R;
    enterVarNode(varNode: VarNode): R;
    enterWhileNode(whileNode: WhileNode): R;
    enterWithNode(withNode: WithNode): R;
    getLexicalContext(): T;
}