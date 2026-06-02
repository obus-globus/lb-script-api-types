import type { ScriptEnvironment } from '../../../../../../../../com/oracle/js/parser/ScriptEnvironment.d.ts'
import type { AccessNode } from '../../../../../../../../com/oracle/js/parser/ir/AccessNode.d.ts'
import type { BinaryNode } from '../../../../../../../../com/oracle/js/parser/ir/BinaryNode.d.ts'
import type { Block } from '../../../../../../../../com/oracle/js/parser/ir/Block.d.ts'
import type { BlockStatement } from '../../../../../../../../com/oracle/js/parser/ir/BlockStatement.d.ts'
import type { BreakNode } from '../../../../../../../../com/oracle/js/parser/ir/BreakNode.d.ts'
import type { CallNode } from '../../../../../../../../com/oracle/js/parser/ir/CallNode.d.ts'
import type { CaseNode } from '../../../../../../../../com/oracle/js/parser/ir/CaseNode.d.ts'
import type { CatchNode } from '../../../../../../../../com/oracle/js/parser/ir/CatchNode.d.ts'
import type { ClassNode } from '../../../../../../../../com/oracle/js/parser/ir/ClassNode.d.ts'
import type { ContinueNode } from '../../../../../../../../com/oracle/js/parser/ir/ContinueNode.d.ts'
import type { DebuggerNode } from '../../../../../../../../com/oracle/js/parser/ir/DebuggerNode.d.ts'
import type { EmptyNode } from '../../../../../../../../com/oracle/js/parser/ir/EmptyNode.d.ts'
import type { ExpressionStatement } from '../../../../../../../../com/oracle/js/parser/ir/ExpressionStatement.d.ts'
import type { ForNode } from '../../../../../../../../com/oracle/js/parser/ir/ForNode.d.ts'
import type { FunctionNode } from '../../../../../../../../com/oracle/js/parser/ir/FunctionNode.d.ts'
import type { IdentNode } from '../../../../../../../../com/oracle/js/parser/ir/IdentNode.d.ts'
import type { IfNode } from '../../../../../../../../com/oracle/js/parser/ir/IfNode.d.ts'
import type { IndexNode } from '../../../../../../../../com/oracle/js/parser/ir/IndexNode.d.ts'
import type { JoinPredecessorExpression } from '../../../../../../../../com/oracle/js/parser/ir/JoinPredecessorExpression.d.ts'
import type { LabelNode } from '../../../../../../../../com/oracle/js/parser/ir/LabelNode.d.ts'
import type { LexicalContext } from '../../../../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { LiteralNode } from '../../../../../../../../com/oracle/js/parser/ir/LiteralNode.d.ts'
import type { Node } from '../../../../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { ObjectNode } from '../../../../../../../../com/oracle/js/parser/ir/ObjectNode.d.ts'
import type { PropertyNode } from '../../../../../../../../com/oracle/js/parser/ir/PropertyNode.d.ts'
import type { ReturnNode } from '../../../../../../../../com/oracle/js/parser/ir/ReturnNode.d.ts'
import type { SwitchNode } from '../../../../../../../../com/oracle/js/parser/ir/SwitchNode.d.ts'
import type { TemplateLiteralNode } from '../../../../../../../../com/oracle/js/parser/ir/TemplateLiteralNode.d.ts'
import type { TernaryNode } from '../../../../../../../../com/oracle/js/parser/ir/TernaryNode.d.ts'
import type { ThrowNode } from '../../../../../../../../com/oracle/js/parser/ir/ThrowNode.d.ts'
import type { TryNode } from '../../../../../../../../com/oracle/js/parser/ir/TryNode.d.ts'
import type { UnaryNode } from '../../../../../../../../com/oracle/js/parser/ir/UnaryNode.d.ts'
import type { VarNode } from '../../../../../../../../com/oracle/js/parser/ir/VarNode.d.ts'
import type { WhileNode } from '../../../../../../../../com/oracle/js/parser/ir/WhileNode.d.ts'
import type { WithNode } from '../../../../../../../../com/oracle/js/parser/ir/WithNode.d.ts'
import type { NodeVisitor } from '../../../../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { StringBuilder } from '../../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class JSONWriter extends NodeVisitor<LexicalContext> {
    static parse(paramenv: ScriptEnvironment, paramcode: string, paramname: string, paramincludeLoc: boolean): string;
    private constructor(includeLocation: boolean)
    // private buf: StringBuilder;
    // private includeLocation: boolean;
    // private array(name: string, nodes: Node[]): void;
    // private arrayEnd(): void;
    // private arrayStart(name: string): void;
    // private comma(): void;
    // private emitProgram(functionNode: FunctionNode): boolean;
    enterAccessNode(accessNode: AccessNode): boolean;
    enterBinaryNode(binaryNode: BinaryNode): boolean;
    enterBlock(block: Block): boolean;
    enterBlockStatement(blockStatement: BlockStatement): boolean;
    enterBreakNode(breakNode: BreakNode): boolean;
    enterCallNode(callNode: CallNode): boolean;
    enterCaseNode(caseNode: CaseNode): boolean;
    enterCatchNode(catchNode: CatchNode): boolean;
    enterClassNode(classNode: ClassNode): boolean;
    enterContinueNode(continueNode: ContinueNode): boolean;
    enterDebuggerNode(debuggerNode: DebuggerNode): boolean;
    enterDefault(node: Node): boolean;
    enterEmptyNode(emptyNode: EmptyNode): boolean;
    enterExpressionStatement(expressionStatement: ExpressionStatement): boolean;
    enterForNode(forNode: ForNode): boolean;
    enterFunctionNode(functionNode: FunctionNode): boolean;
    enterIdentNode(identNode: IdentNode): boolean;
    enterIfNode(ifNode: IfNode): boolean;
    enterIndexNode(indexNode: IndexNode): boolean;
    enterJoinPredecessorExpression(joinPredecessorExpression: JoinPredecessorExpression): boolean;
    enterLabelNode(labelNode: LabelNode): boolean;
    enterLiteralNode(literalNode: LiteralNode<Object>): boolean;
    enterObjectNode(objectNode: ObjectNode): boolean;
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
    // private getString(): string;
    // private leave(): boolean;
    leaveDefault(node: Node): Node;
    // private location(node: Node): void;
    // private nullValue(): void;
    // private objectEnd(): void;
    // private objectStart(): void;
    // private objectStart(name: string): void;
    // private property(key: string): void;
    // private property(key: string, value: boolean): void;
    // private property(key: string, value: number): void;
    // private property(key: string, value: string): void;
    // private property(key: string, value: string, escape: boolean): void;
    // private type(value: string): void;
}