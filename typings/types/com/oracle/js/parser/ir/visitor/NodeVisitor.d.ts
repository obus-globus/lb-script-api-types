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
export abstract class NodeVisitor<T extends LexicalContext> extends Object {
    constructor(lc: T)
    // private lc: T;
    enterAccessNode(accessNode: AccessNode): boolean;
    enterBinaryNode(binaryNode: BinaryNode): boolean;
    enterBlock(block: Block): boolean;
    enterBlockExpression(blockExpression: BlockExpression): boolean;
    enterBlockStatement(blockStatement: BlockStatement): boolean;
    enterBreakNode(breakNode: BreakNode): boolean;
    enterCallNode(callNode: CallNode): boolean;
    enterCaseNode(caseNode: CaseNode): boolean;
    enterCatchNode(catchNode: CatchNode): boolean;
    enterClassElement(element: ClassElement): boolean;
    enterClassNode(classNode: ClassNode): boolean;
    enterContinueNode(continueNode: ContinueNode): boolean;
    enterDebuggerNode(debuggerNode: DebuggerNode): boolean;
    enterDefault(node: Node): boolean;
    enterEmptyNode(emptyNode: EmptyNode): boolean;
    enterErrorNode(errorNode: ErrorNode): boolean;
    enterExportNode(exportNode: ExportNode): boolean;
    enterExportSpecifierNode(exportSpecifierNode: ExportSpecifierNode): boolean;
    enterExpressionStatement(expressionStatement: ExpressionStatement): boolean;
    enterForNode(forNode: ForNode): boolean;
    enterFunctionNode(functionNode: FunctionNode): boolean;
    enterIdentNode(identNode: IdentNode): boolean;
    enterIfNode(ifNode: IfNode): boolean;
    enterImportClauseNode(importClauseNode: ImportClauseNode): boolean;
    enterImportNode(importNode: ImportNode): boolean;
    enterImportSpecifierNode(importSpecifierNode: ImportSpecifierNode): boolean;
    enterIndexNode(indexNode: IndexNode): boolean;
    enterJoinPredecessorExpression(expr: JoinPredecessorExpression): boolean;
    enterLabelNode(labelNode: LabelNode): boolean;
    enterLiteralNode(literalNode: LiteralNode<Object>): boolean;
    enterNameSpaceImportNode(nameSpaceImportNode: NameSpaceImportNode): boolean;
    enterNamedExportsNode(exportClauseNode: NamedExportsNode): boolean;
    enterNamedImportsNode(namedImportsNode: NamedImportsNode): boolean;
    enterObjectNode(objectNode: ObjectNode): boolean;
    enterParameterNode(paramNode: ParameterNode): boolean;
    enterPropertyNode(propertyNode: PropertyNode): boolean;
    enterReturnNode(returnNode: ReturnNode): boolean;
    enterSwitchNode(switchNode: SwitchNode): boolean;
    enterTemplateLiteralNode(templateLiteralNode: TemplateLiteralNode): boolean;
    enterTernaryNode(ternaryNode: TernaryNode): boolean;
    enterThrowNode(throwNode: ThrowNode): boolean;
    enterTryNode(tryNode: TryNode): boolean;
    enterUnaryNode(unaryNode: UnaryNode): boolean;
    enterVarNode(varNode: VarNode): boolean;
    enterWhileNode(whileNode: WhileNode): boolean;
    enterWithNode(withNode: WithNode): boolean;
    getLexicalContext(): T;
    leaveAccessNode(accessNode: AccessNode): Node;
    leaveBinaryNode(binaryNode: BinaryNode): Node;
    leaveBlock(block: Block): Node;
    leaveBlockExpression(blockExpression: BlockExpression): Node;
    leaveBlockStatement(blockStatement: BlockStatement): Node;
    leaveBreakNode(breakNode: BreakNode): Node;
    leaveCallNode(callNode: CallNode): Node;
    leaveCaseNode(caseNode: CaseNode): Node;
    leaveCatchNode(catchNode: CatchNode): Node;
    leaveClassElement(element: ClassElement): Node;
    leaveClassNode(classNode: ClassNode): Node;
    leaveContinueNode(continueNode: ContinueNode): Node;
    leaveDebuggerNode(debuggerNode: DebuggerNode): Node;
    leaveDefault(node: Node): Node;
    leaveEmptyNode(emptyNode: EmptyNode): Node;
    leaveErrorNode(errorNode: ErrorNode): Node;
    leaveExportNode(exportNode: ExportNode): Node;
    leaveExportSpecifierNode(exportSpecifierNode: ExportSpecifierNode): Node;
    leaveExpressionStatement(expressionStatement: ExpressionStatement): Node;
    leaveForNode(forNode: ForNode): Node;
    leaveFunctionNode(functionNode: FunctionNode): Node;
    leaveIdentNode(identNode: IdentNode): Node;
    leaveIfNode(ifNode: IfNode): Node;
    leaveImportClauseNode(importClauseNode: ImportClauseNode): Node;
    leaveImportNode(importNode: ImportNode): Node;
    leaveImportSpecifierNode(importSpecifierNode: ImportSpecifierNode): Node;
    leaveIndexNode(indexNode: IndexNode): Node;
    leaveJoinPredecessorExpression(expr: JoinPredecessorExpression): Node;
    leaveLabelNode(labelNode: LabelNode): Node;
    leaveLiteralNode(literalNode: LiteralNode<Object>): Node;
    leaveNameSpaceImportNode(nameSpaceImportNode: NameSpaceImportNode): Node;
    leaveNamedExportsNode(exportClauseNode: NamedExportsNode): Node;
    leaveNamedImportsNode(namedImportsNode: NamedImportsNode): Node;
    leaveObjectNode(objectNode: ObjectNode): Node;
    leaveParameterNode(paramNode: ParameterNode): Node;
    leavePropertyNode(propertyNode: PropertyNode): Node;
    leaveReturnNode(returnNode: ReturnNode): Node;
    leaveSwitchNode(switchNode: SwitchNode): Node;
    leaveTemplateLiteralNode(templateLiteralNode: TemplateLiteralNode): Node;
    leaveTernaryNode(ternaryNode: TernaryNode): Node;
    leaveThrowNode(throwNode: ThrowNode): Node;
    leaveTryNode(tryNode: TryNode): Node;
    leaveUnaryNode(unaryNode: UnaryNode): Node;
    leaveVarNode(varNode: VarNode): Node;
    leaveWhileNode(whileNode: WhileNode): Node;
    leaveWithNode(withNode: WithNode): Node;
}