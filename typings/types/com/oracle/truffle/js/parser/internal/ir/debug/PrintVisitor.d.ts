import type { BinaryNode } from '../../../../../../../../com/oracle/js/parser/ir/BinaryNode.d.ts'
import type { Block } from '../../../../../../../../com/oracle/js/parser/ir/Block.d.ts'
import type { BlockStatement } from '../../../../../../../../com/oracle/js/parser/ir/BlockStatement.d.ts'
import type { BreakNode } from '../../../../../../../../com/oracle/js/parser/ir/BreakNode.d.ts'
import type { ContinueNode } from '../../../../../../../../com/oracle/js/parser/ir/ContinueNode.d.ts'
import type { ExpressionStatement } from '../../../../../../../../com/oracle/js/parser/ir/ExpressionStatement.d.ts'
import type { ForNode } from '../../../../../../../../com/oracle/js/parser/ir/ForNode.d.ts'
import type { FunctionNode } from '../../../../../../../../com/oracle/js/parser/ir/FunctionNode.d.ts'
import type { IdentNode } from '../../../../../../../../com/oracle/js/parser/ir/IdentNode.d.ts'
import type { IfNode } from '../../../../../../../../com/oracle/js/parser/ir/IfNode.d.ts'
import type { JoinPredecessorExpression } from '../../../../../../../../com/oracle/js/parser/ir/JoinPredecessorExpression.d.ts'
import type { LabelNode } from '../../../../../../../../com/oracle/js/parser/ir/LabelNode.d.ts'
import type { LexicalContext } from '../../../../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { Node } from '../../../../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { Statement } from '../../../../../../../../com/oracle/js/parser/ir/Statement.d.ts'
import type { SwitchNode } from '../../../../../../../../com/oracle/js/parser/ir/SwitchNode.d.ts'
import type { ThrowNode } from '../../../../../../../../com/oracle/js/parser/ir/ThrowNode.d.ts'
import type { TryNode } from '../../../../../../../../com/oracle/js/parser/ir/TryNode.d.ts'
import type { UnaryNode } from '../../../../../../../../com/oracle/js/parser/ir/UnaryNode.d.ts'
import type { VarNode } from '../../../../../../../../com/oracle/js/parser/ir/VarNode.d.ts'
import type { WhileNode } from '../../../../../../../../com/oracle/js/parser/ir/WhileNode.d.ts'
import type { WithNode } from '../../../../../../../../com/oracle/js/parser/ir/WithNode.d.ts'
import type { NodeVisitor } from '../../../../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { StringBuilder } from '../../../../../../../../java/lang/StringBuilder.d.ts'
export class PrintVisitor extends NodeVisitor<LexicalContext> {
    constructor()
    constructor(root: Node)
    constructor(root: Node, printLineNumbers: boolean, printTypes: boolean)
    constructor(printLineNumbers: boolean, printTypes: boolean)
    // private indent: number;
    // private lastLineNumber: number;
    // private printLineNumbers: boolean;
    // private printTypes: boolean;
    // private sb: StringBuilder;
    enterBinaryNode(binaryNode: BinaryNode): boolean;
    enterBlock(block: Block): boolean;
    enterBlockStatement(statement: BlockStatement): boolean;
    enterBreakNode(node: BreakNode): boolean;
    enterContinueNode(node: ContinueNode): boolean;
    enterDefault(node: Node): boolean;
    enterExpressionStatement(expressionStatement: ExpressionStatement): boolean;
    enterForNode(forNode: ForNode): boolean;
    enterFunctionNode(functionNode: FunctionNode): boolean;
    enterIdentNode(identNode: IdentNode): boolean;
    enterIfNode(ifNode: IfNode): boolean;
    enterJoinPredecessorExpression(expr: JoinPredecessorExpression): boolean;
    enterLabelNode(labeledNode: LabelNode): boolean;
    enterSwitchNode(switchNode: SwitchNode): boolean;
    enterThrowNode(node: ThrowNode): boolean;
    enterTryNode(tryNode: TryNode): boolean;
    enterUnaryNode(unaryNode: UnaryNode): boolean;
    enterVarNode(varNode: VarNode): boolean;
    enterWhileNode(whileNode: WhileNode): boolean;
    enterWithNode(withNode: WithNode): boolean;
    // private indent(): void;
    // private printStatements(statements: Statement[]): void;
    toString(): string;
    // private visit(root: Node): void;
}