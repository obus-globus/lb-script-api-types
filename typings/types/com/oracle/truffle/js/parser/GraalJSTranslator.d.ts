import type { AccessNode } from '../../../../../com/oracle/js/parser/ir/AccessNode.d.ts'
import type { BinaryNode } from '../../../../../com/oracle/js/parser/ir/BinaryNode.d.ts'
import type { Block } from '../../../../../com/oracle/js/parser/ir/Block.d.ts'
import type { BlockExpression } from '../../../../../com/oracle/js/parser/ir/BlockExpression.d.ts'
import type { BlockStatement } from '../../../../../com/oracle/js/parser/ir/BlockStatement.d.ts'
import type { BreakNode } from '../../../../../com/oracle/js/parser/ir/BreakNode.d.ts'
import type { CallNode } from '../../../../../com/oracle/js/parser/ir/CallNode.d.ts'
import type { CaseNode } from '../../../../../com/oracle/js/parser/ir/CaseNode.d.ts'
import type { ClassElement } from '../../../../../com/oracle/js/parser/ir/ClassElement.d.ts'
import type { ClassNode } from '../../../../../com/oracle/js/parser/ir/ClassNode.d.ts'
import type { ContinueNode } from '../../../../../com/oracle/js/parser/ir/ContinueNode.d.ts'
import type { DebuggerNode } from '../../../../../com/oracle/js/parser/ir/DebuggerNode.d.ts'
import type { EmptyNode } from '../../../../../com/oracle/js/parser/ir/EmptyNode.d.ts'
import type { Expression } from '../../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { ExpressionStatement } from '../../../../../com/oracle/js/parser/ir/ExpressionStatement.d.ts'
import type { ForNode } from '../../../../../com/oracle/js/parser/ir/ForNode.d.ts'
import type { FunctionNode } from '../../../../../com/oracle/js/parser/ir/FunctionNode.d.ts'
import type { IdentNode } from '../../../../../com/oracle/js/parser/ir/IdentNode.d.ts'
import type { IfNode } from '../../../../../com/oracle/js/parser/ir/IfNode.d.ts'
import type { IndexNode } from '../../../../../com/oracle/js/parser/ir/IndexNode.d.ts'
import type { JoinPredecessorExpression } from '../../../../../com/oracle/js/parser/ir/JoinPredecessorExpression.d.ts'
import type { LabelNode } from '../../../../../com/oracle/js/parser/ir/LabelNode.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { LiteralNode } from '../../../../../com/oracle/js/parser/ir/LiteralNode.d.ts'
import type { Module$ImportPhase } from '../../../../../com/oracle/js/parser/ir/Module$ImportPhase.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { ObjectNode } from '../../../../../com/oracle/js/parser/ir/ObjectNode.d.ts'
import type { ParameterNode } from '../../../../../com/oracle/js/parser/ir/ParameterNode.d.ts'
import type { PropertyNode } from '../../../../../com/oracle/js/parser/ir/PropertyNode.d.ts'
import type { ReturnNode } from '../../../../../com/oracle/js/parser/ir/ReturnNode.d.ts'
import type { Scope } from '../../../../../com/oracle/js/parser/ir/Scope.d.ts'
import type { Statement } from '../../../../../com/oracle/js/parser/ir/Statement.d.ts'
import type { SwitchNode } from '../../../../../com/oracle/js/parser/ir/SwitchNode.d.ts'
import type { Symbol } from '../../../../../com/oracle/js/parser/ir/Symbol.d.ts'
import type { TemplateLiteralNode } from '../../../../../com/oracle/js/parser/ir/TemplateLiteralNode.d.ts'
import type { TernaryNode } from '../../../../../com/oracle/js/parser/ir/TernaryNode.d.ts'
import type { ThrowNode } from '../../../../../com/oracle/js/parser/ir/ThrowNode.d.ts'
import type { TryNode } from '../../../../../com/oracle/js/parser/ir/TryNode.d.ts'
import type { UnaryNode } from '../../../../../com/oracle/js/parser/ir/UnaryNode.d.ts'
import type { VarNode } from '../../../../../com/oracle/js/parser/ir/VarNode.d.ts'
import type { WhileNode } from '../../../../../com/oracle/js/parser/ir/WhileNode.d.ts'
import type { WithNode } from '../../../../../com/oracle/js/parser/ir/WithNode.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { FrameSlotKind } from '../../../../../com/oracle/truffle/api/frame/FrameSlotKind.d.ts'
import type { Node as Node_2 } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { DecoratorListEvaluationNode } from '../../../../../com/oracle/truffle/js/decorators/DecoratorListEvaluationNode.d.ts'
import type { JSFrameDescriptor } from '../../../../../com/oracle/truffle/js/nodes/JSFrameDescriptor.d.ts'
import type { JSFrameSlot } from '../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { NodeFactory } from '../../../../../com/oracle/truffle/js/nodes/NodeFactory.d.ts'
import type { NodeFactory$BinaryOperation } from '../../../../../com/oracle/truffle/js/nodes/NodeFactory$BinaryOperation.d.ts'
import type { ObjectLiteralNode$ObjectLiteralMemberNode } from '../../../../../com/oracle/truffle/js/nodes/access/ObjectLiteralNode$ObjectLiteralMemberNode.d.ts'
import type { AbstractBlockNode } from '../../../../../com/oracle/truffle/js/nodes/control/AbstractBlockNode.d.ts'
import type { ContinueTarget } from '../../../../../com/oracle/truffle/js/nodes/control/ContinueTarget.d.ts'
import type { ReturnNode as ReturnNode_2 } from '../../../../../com/oracle/truffle/js/nodes/control/ReturnNode.d.ts'
import type { FunctionRootNode } from '../../../../../com/oracle/truffle/js/nodes/function/FunctionRootNode.d.ts'
import type { GraalJSTranslator$EnvironmentCloseable } from '../../../../../com/oracle/truffle/js/parser/GraalJSTranslator$EnvironmentCloseable.d.ts'
import type { Environment } from '../../../../../com/oracle/truffle/js/parser/env/Environment.d.ts'
import type { Environment$VarRef } from '../../../../../com/oracle/truffle/js/parser/env/Environment$VarRef.d.ts'
import type { FunctionEnvironment } from '../../../../../com/oracle/truffle/js/parser/env/FunctionEnvironment.d.ts'
import type { FunctionEnvironment$JumpTargetCloseable } from '../../../../../com/oracle/truffle/js/parser/env/FunctionEnvironment$JumpTargetCloseable.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSFunctionData } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { ScriptOrModule } from '../../../../../com/oracle/truffle/js/runtime/objects/ScriptOrModule.d.ts'
import type { InternalSlotId } from '../../../../../com/oracle/truffle/js/runtime/util/InternalSlotId.d.ts'
import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class GraalJSTranslator extends TranslatorNodeVisitor<LexicalContext, JavaScriptNode> {
    static ARGUMENTS: string;
    static DIR__: string;
    static EMPTY_NODE_ARRAY: (Object | null)[];
    static FILE__: string;
    static IMPORT: string;
    static IMPORT_META: string;
    static LINE__: string;
    static SUPER_CALLED_TWICE: TruffleString;
    static UNSUPPORTED_REFERENCE_TO_SUPER: TruffleString;
    constructor(lc: LexicalContext, factory: NodeFactory, context: JSContext, source: Source, argumentNames: string[], prologLength: number, environment: Environment, isParentStrict: boolean, scriptOrModule: ScriptOrModule)
    // private activeScriptOrModule: ScriptOrModule;
    // private argumentNames: string[];
    // private context: JSContext;
    // private environment: Environment;
    // private factory: NodeFactory;
    // private isParentStrict: boolean;
    // private prologLength: number;
    // private source: Source;
    // private sourceLength: number;
    // private addFunctionFrameSlots(env: Environment, function_: FunctionNode): void;
    addGeneratorStateSlot(functionFrameDescriptor: JSFrameDescriptor, slotKind: FrameSlotKind): JSFrameSlot;
    // private allowScopeOptimization(): boolean;
    // private allowTDZOptimization(): boolean;
    // private annexBBlockToFunctionTransfer(varNode: VarNode): boolean;
    // private assignSourceSection(resultNode: JavaScriptNode, parseNode: Node): void;
    // private awaitAsyncIteratorNext(iterator: JavaScriptNode): JavaScriptNode;
    // private checkMutableBinding(rhsNode: JavaScriptNode, identifier: Object): JavaScriptNode;
    // private checkThisBindingInitialized(accessThisNode: JavaScriptNode): JavaScriptNode;
    // private collectGlobalVars(functionNode: FunctionNode, configurable: boolean): JavaScriptNode[];
    // private createArrayLiteral(elementExpressions: Expression[]): JavaScriptNode;
    // private createAwaitNode(expression: JavaScriptNode): JavaScriptNode;
    // private createBlock(...statements: JavaScriptNode[]): JavaScriptNode;
    // private createBlock(statements: JavaScriptNode[], terminal: boolean, expressionBlock: boolean): JavaScriptNode;
    // private createCallApplyArgumentsNode(function_: JavaScriptNode, args: JavaScriptNode[]): JavaScriptNode;
    // private createCallDirectSuper(function_: JavaScriptNode, args: JavaScriptNode[], inDefaultDerivedConstructor: boolean): JavaScriptNode;
    // private createCallEvalNode(function_: JavaScriptNode, args: JavaScriptNode[]): JavaScriptNode;
    // private createDoWhile(condition: JavaScriptNode, body: JavaScriptNode): JavaScriptNode;
    // private createDynamicScopeBinding(varName: TruffleString, deleteable: boolean): JavaScriptNode;
    // private createFunctionRoot(functionNode: FunctionNode, functionData: JSFunctionData, currentFunction: FunctionEnvironment, body: JavaScriptNode): FunctionRootNode;
    // private createImportCallNode(args: JavaScriptNode[], phase: Module$ImportPhase): JavaScriptNode;
    // private createModuleRoot(functionNode: FunctionNode, functionData: JSFunctionData, currentFunction: FunctionEnvironment, body: JavaScriptNode): FunctionRootNode;
    // private createOptionalAccessNode(accessNode: AccessNode, base: JavaScriptNode): JavaScriptNode;
    // private createOptionalIndexNode(indexNode: IndexNode, base: JavaScriptNode, index: JavaScriptNode): JavaScriptNode;
    // private createPrivateFieldGet(accessNode: AccessNode, base: JavaScriptNode): JavaScriptNode;
    // private createPrivateFieldSet(accessNode: AccessNode, base: JavaScriptNode, rhs: JavaScriptNode): JavaScriptNode;
    // private createReadProperty(accessNode: AccessNode, base: JavaScriptNode): JavaScriptNode;
    // private createResolveImports(functionNode: FunctionNode, declarations: JavaScriptNode[]): void;
    // private createReturnNode(expression: JavaScriptNode): ReturnNode_2;
    // private createSourceSection(functionNode: FunctionNode): SourceSection;
    // private createSwitchCaseExpr(isSwitchTypeofString: boolean, switchCase: CaseNode, readSwitchVarNode: JavaScriptNode): JavaScriptNode;
    // private createTemporalDeadZoneInit(blockScope: Scope, blockWithInit: JavaScriptNode[]): void;
    // private createThisNode(): JavaScriptNode;
    // private createThisNodeUnchecked(): JavaScriptNode;
    // private createVarAssignNode(varNode: VarNode, varName: TruffleString): JavaScriptNode;
    // private createWhileDo(condition: JavaScriptNode, body: JavaScriptNode): JavaScriptNode;
    // private createWriteProperty(accessNode: AccessNode, base: JavaScriptNode, rhs: JavaScriptNode): JavaScriptNode;
    // private createYieldNode(unaryNode: UnaryNode): JavaScriptNode;
    // private currentFunction(): FunctionEnvironment;
    // private declareParameters(functionNode: FunctionNode): void;
    // private defaultSwitchNode(switchNode: SwitchNode, switchVar: Environment$VarRef, isSwitchTypeofString: boolean): JavaScriptNode;
    // private desugarFor(forNode: ForNode, init: JavaScriptNode, test: JavaScriptNode, modify: JavaScriptNode, wrappedBody: JavaScriptNode): JavaScriptNode;
    // private desugarForAwaitOf(forNode: ForNode, modify: JavaScriptNode, jumpTarget: FunctionEnvironment$JumpTargetCloseable<ContinueTarget>): JavaScriptNode;
    // private desugarForHeadAssignment(forNode: ForNode, next: JavaScriptNode): JavaScriptNode;
    // private desugarForIn(forNode: ForNode, modify: JavaScriptNode, jumpTarget: FunctionEnvironment$JumpTargetCloseable<ContinueTarget>): JavaScriptNode;
    // private desugarForInOrOfBody(forNode: ForNode, iterator: JavaScriptNode, jumpTarget: FunctionEnvironment$JumpTargetCloseable<ContinueTarget>): JavaScriptNode;
    // private desugarForOf(forNode: ForNode, modify: JavaScriptNode, jumpTarget: FunctionEnvironment$JumpTargetCloseable<ContinueTarget>): JavaScriptNode;
    // private discardResult(test: JavaScriptNode): JavaScriptNode;
    // private dropTerminalDirectBreakStatement(pass: JavaScriptNode): JavaScriptNode;
    // private ensureHasSourceSection(resultNode: JavaScriptNode, parseNode: Node): JavaScriptNode;
    enterAccessNode(accessNode: AccessNode): JavaScriptNode;
    // private enterBinaryAssignNode(binaryNode: BinaryNode): JavaScriptNode;
    // private enterBinaryExpressionNode(binaryNode: BinaryNode): JavaScriptNode;
    enterBinaryNode(binaryNode: BinaryNode): JavaScriptNode;
    // private enterBinaryTransformNode(binaryNode: BinaryNode): JavaScriptNode;
    enterBlock(block: Block): JavaScriptNode;
    // private enterBlockEnvironment(block: Block): GraalJSTranslator$EnvironmentCloseable;
    // private enterBlockEnvironment(scope: Scope): GraalJSTranslator$EnvironmentCloseable;
    enterBlockExpression(blockExpression: BlockExpression): JavaScriptNode;
    enterBlockStatement(blockStatement: BlockStatement): JavaScriptNode;
    enterBreakNode(breakNode: BreakNode): JavaScriptNode;
    enterCallNode(callNode: CallNode): JavaScriptNode;
    enterClassNode(classNode: ClassNode): JavaScriptNode;
    enterContinueNode(continueNode: ContinueNode): JavaScriptNode;
    enterDebuggerNode(debuggerNode: DebuggerNode): JavaScriptNode;
    enterDefault(node: Node): JavaScriptNode;
    // private enterDelete(unaryNode: UnaryNode): JavaScriptNode;
    // private enterDeleteIdent(unaryNode: UnaryNode): JavaScriptNode;
    // private enterDeleteProperty(deleteNode: UnaryNode): JavaScriptNode;
    enterEmptyNode(emptyNode: EmptyNode): JavaScriptNode;
    enterExpressionStatement(expressionStatement: ExpressionStatement): JavaScriptNode;
    enterForNode(forNode: ForNode): JavaScriptNode;
    // private enterFunctionEnvironment(function_: FunctionNode, isStrict: boolean, isGlobal: boolean, hasSyntheticArguments: boolean): GraalJSTranslator$EnvironmentCloseable;
    enterFunctionNode(functionNode: FunctionNode): JavaScriptNode;
    enterIdentNode(identNode: IdentNode): JavaScriptNode;
    // private enterIdentNodeSuper(identNode: IdentNode): JavaScriptNode;
    enterIfNode(ifNode: IfNode): JavaScriptNode;
    // private enterImportMeta(): JavaScriptNode;
    enterIndexNode(indexNode: IndexNode): JavaScriptNode;
    enterJoinPredecessorExpression(expr: JoinPredecessorExpression): JavaScriptNode;
    enterLabelNode(labelNode: LabelNode): JavaScriptNode;
    // private enterLiteralDefaultNode(literalNode: LiteralNode<Object>): JavaScriptNode;
    enterLiteralNode(literalNode: LiteralNode<Object>): JavaScriptNode;
    // private enterNamedEvaluation(unaryNode: UnaryNode): JavaScriptNode;
    // private enterNewNode(unaryNode: UnaryNode): JavaScriptNode;
    // private enterNewTarget(): JavaScriptNode;
    // private enterObjectAccessorNode(property: PropertyNode, isClass: boolean): ObjectLiteralNode$ObjectLiteralMemberNode;
    enterObjectNode(objectNode: ObjectNode): JavaScriptNode;
    // private enterObjectPropertyNode(property: PropertyNode, isClass: boolean, classNameSymbol: Symbol): ObjectLiteralNode$ObjectLiteralMemberNode;
    enterParameterNode(paramNode: ParameterNode): JavaScriptNode;
    enterReturnNode(returnNode: ReturnNode): JavaScriptNode;
    enterSwitchNode(switchNode: SwitchNode): JavaScriptNode;
    enterTemplateLiteralNode(templateLiteralNode: TemplateLiteralNode): JavaScriptNode;
    enterTernaryNode(ternaryNode: TernaryNode): JavaScriptNode;
    enterThrowNode(throwNode: ThrowNode): JavaScriptNode;
    enterTryNode(tryNode: TryNode): JavaScriptNode;
    // private enterTypeofNode(unaryNode: UnaryNode): JavaScriptNode;
    // private enterUnaryDefaultNode(unaryNode: UnaryNode): JavaScriptNode;
    // private enterUnaryIncDecNode(unaryNode: UnaryNode): JavaScriptNode;
    enterUnaryNode(unaryNode: UnaryNode): JavaScriptNode;
    enterVarNode(varNode: VarNode): JavaScriptNode;
    enterWhileNode(whileNode: WhileNode): JavaScriptNode;
    // private enterWithEnvironment(withVarName: Object): GraalJSTranslator$EnvironmentCloseable;
    enterWithNode(withNode: WithNode): JavaScriptNode;
    // private extractChildTo(child: Node_2, parent: Node_2, extracted: JavaScriptNode[]): void;
    // private extractChildrenTo(parent: Node_2, extracted: JavaScriptNode[]): void;
    // private filterOptionalChainTarget(target: JavaScriptNode, optional: boolean): JavaScriptNode;
    // private findScopeVar(name: TruffleString, skipWith: boolean): Environment$VarRef;
    // private findScopeVarCheckTDZ(name: TruffleString, initializationAssignment: boolean): Environment$VarRef;
    // private finishDerivedConstructorBody(function_: FunctionNode, body: JavaScriptNode): JavaScriptNode;
    // private finishGeneratorBody(body: JavaScriptNode): JavaScriptNode;
    // private functionEnvInit(functionNode: FunctionNode): JavaScriptNode[];
    // private getAccessor(accessorFunction: FunctionNode): JavaScriptNode;
    // private getActiveModule(): JavaScriptNode;
    // private getConstructorFrameSlotForVariable(privateNameVar: Environment$VarRef): JSFrameSlot;
    // private getFunctionName(functionNode: FunctionNode): TruffleString;
    // private getPrivateBrandNode(frameSlot: JSFrameSlot, privateNameVar: Environment$VarRef): JavaScriptNode;
    // private handleAsyncFunctionBody(body: JavaScriptNode): JavaScriptNode;
    // private handleAsyncGeneratorBody(body: JavaScriptNode): JavaScriptNode;
    // private handleFunctionReturn(functionNode: FunctionNode, body: JavaScriptNode): JavaScriptNode;
    // private handleGeneratorBody(body: JavaScriptNode): JavaScriptNode;
    // private handleModuleBody(body: JavaScriptNode): JavaScriptNode;
    // private ifElseFromSwitch(switchNode: SwitchNode, switchVar: Environment$VarRef, isSwitchTypeofString: boolean): JavaScriptNode;
    // private initializeInstanceElements(thisValueNode: JavaScriptNode): JavaScriptNode;
    // private initializeThis(thisValueNode: JavaScriptNode): JavaScriptNode;
    // private insertNewTargetArg(args: JavaScriptNode[]): JavaScriptNode[];
    // private insertPrivateBrandCheck(base: JavaScriptNode, privateNameVar: Environment$VarRef): JavaScriptNode;
    // private instrumentSuspendHelper(parent: Node_2, grandparent: Node_2): Node_2;
    // private instrumentSuspendNodes(body: JavaScriptNode): JavaScriptNode;
    // private makeUniqueTempVarNameForStatement(prefix: string, lineNumber: number): InternalSlotId;
    // private needsPerIterationScope(forNode: ForNode): boolean;
    // private needsThisSlot(function_: FunctionNode, currentFunction: FunctionEnvironment): boolean;
    // private newClassEnvironment(scope: Scope): Environment;
    // private newPerIterationEnvironment(scope: Scope): Environment;
    // private newPrivateEnvironment(scope: Scope): Environment;
    newTranslator(env: Environment, savedLC: LexicalContext): GraalJSTranslator;
    // private prepareArguments(): JavaScriptNode;
    // private prepareDeclarations(declarations: JavaScriptNode[], body: JavaScriptNode): JavaScriptNode;
    // private prepareNewTarget(): JavaScriptNode;
    // private prepareParameters(init: JavaScriptNode[]): void;
    // private prepareSuper(): JavaScriptNode;
    // private prepareThis(functionNode: FunctionNode): JavaScriptNode;
    // private prependDynamicScopeBindingInit(block: Block, blockWithInit: JavaScriptNode[]): void;
    // private splitModuleBodyAtYield(blockNode: JavaScriptNode, scopeInit: JavaScriptNode[]): JavaScriptNode;
    // private tagBody(resultNode: JavaScriptNode, parseNode: Node): JavaScriptNode;
    // private tagExpression(resultNode: JavaScriptNode, parseNode: Node): JavaScriptNode;
    // private tagStatement(resultNode: JavaScriptNode, parseNode: Node): JavaScriptNode;
    // private toGeneratorBlockNode(blockNode: AbstractBlockNode, suspendableIndices: BitSet): JavaScriptNode;
    transform(node: Node): JavaScriptNode;
    // private transformArgs(argList: Expression[]): JavaScriptNode[];
    // private transformAssignment(assignmentExpression: Expression, lhsExpression: Expression, assignedValue: JavaScriptNode, initializationAssignment: boolean): JavaScriptNode;
    // private transformAssignmentIdent(identNode: IdentNode, assignedValue: JavaScriptNode, binaryOp: NodeFactory$BinaryOperation, returnOldValue: boolean, convertLHSToNumeric: boolean, initializationAssignment: boolean): JavaScriptNode;
    // private transformAssignmentImpl(assignmentExpression: Expression, lhsExpression: Expression, assignedValue: JavaScriptNode, initializationAssignment: boolean, binaryOp: NodeFactory$BinaryOperation, returnOldValue: boolean, convertLHSToNumeric: boolean): JavaScriptNode;
    // private transformClassDecorators(decorators: Expression[]): JavaScriptNode[];
    // private transformClassElementsDecorators(elements: ClassElement[]): DecoratorListEvaluationNode[];
    // private transformCompoundAssignment(assignmentExpression: Expression, lhsExpression: Expression, assignedValue: JavaScriptNode, binaryOp: NodeFactory$BinaryOperation, returnOldValue: boolean, convertLHSToNumeric: boolean): JavaScriptNode;
    // private transformDestructuringArrayAssignment(lhsExpression: Expression, assignedValue: JavaScriptNode, initializationAssignment: boolean): JavaScriptNode;
    // private transformDestructuringObjectAssignment(lhsExpression: Expression, assignedValue: JavaScriptNode, initializationAssignment: boolean): JavaScriptNode;
    transformFunction(functionNode: FunctionNode): JavaScriptNode;
    // private transformIndexAssignment(indexNode: IndexNode, assignedValue: JavaScriptNode, binaryOp: NodeFactory$BinaryOperation, returnOldValue: boolean, convertToNumeric: boolean): JavaScriptNode;
    // private transformPropertyAssignment(accessNode: AccessNode, assignedValue: JavaScriptNode, binaryOp: NodeFactory$BinaryOperation, returnOldValue: boolean, convertToNumeric: boolean): JavaScriptNode;
    // private transformPropertyDefinitionList(properties: PropertyNode[], isClass: boolean, classNameSymbol: Symbol): ObjectLiteralNode$ObjectLiteralMemberNode[];
    // private transformPropertyValue(propertyValue: Expression, classNameSymbol: Symbol): JavaScriptNode;
    // private transformStatementInBlock(statement: Statement): JavaScriptNode;
    // private transformStatements(blockStatements: Statement[], terminal: boolean, expressionBlock: boolean): JavaScriptNode;
    // private transformStatements(blockStatements: Statement[], terminal: boolean, expressionBlock: boolean, statements: JavaScriptNode[], destPos: number): JavaScriptNode;
    // private transformStatements(blockStatements: Statement[], terminal: boolean, expressionBlock: boolean, prolog: JavaScriptNode[]): JavaScriptNode;
    // private translateAwaitNode(unaryNode: UnaryNode): JavaScriptNode;
    translateFunctionBody(functionNode: FunctionNode, declarations: JavaScriptNode[]): JavaScriptNode;
    // private translateFunctionOnDemand(functionNode: FunctionNode, functionData: JSFunctionData, isStrict: boolean, isGlobal: boolean, needsParentFrame: boolean, functionName: TruffleString, hasSyntheticArguments: boolean): FunctionRootNode;
    // private wrapAsyncIteratorClose(body: JavaScriptNode, iterator: JavaScriptNode): JavaScriptNode;
    // private wrapClearAndGetCompletionValue(statement: JavaScriptNode): JavaScriptNode;
    // private wrapClearCompletionValue(statement: JavaScriptNode): JavaScriptNode;
    // private wrapGetCompletionValue(target: JavaScriptNode): JavaScriptNode;
    // private wrapResumableNode(resumableNode: Node_2): JavaScriptNode;
    // private wrapSaveAndRestoreCompletionValue(statement: JavaScriptNode): JavaScriptNode;
    // private wrapSetCompletionValue(statement: JavaScriptNode): JavaScriptNode;
    // private wrapTemporalDeadZoneInit(scope: Scope, blockBody: JavaScriptNode): JavaScriptNode;
}