import type { Module$ImportPhase } from '../../../../../com/oracle/js/parser/ir/Module$ImportPhase.d.ts'
import type { Module$ModuleRequest } from '../../../../../com/oracle/js/parser/ir/Module$ModuleRequest.d.ts'
import type { CallTarget } from '../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { FrameDescriptor } from '../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { LoopNode } from '../../../../../com/oracle/truffle/api/nodes/LoopNode.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RepeatingNode } from '../../../../../com/oracle/truffle/api/nodes/RepeatingNode.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { DecoratorListEvaluationNode } from '../../../../../com/oracle/truffle/js/decorators/DecoratorListEvaluationNode.d.ts'
import type { JSFrameDescriptor } from '../../../../../com/oracle/truffle/js/nodes/JSFrameDescriptor.d.ts'
import type { JSFrameSlot } from '../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { NodeFactory } from '../../../../../com/oracle/truffle/js/nodes/NodeFactory.d.ts'
import type { NodeFactory$BinaryOperation } from '../../../../../com/oracle/truffle/js/nodes/NodeFactory$BinaryOperation.d.ts'
import type { NodeFactory$UnaryOperation } from '../../../../../com/oracle/truffle/js/nodes/NodeFactory$UnaryOperation.d.ts'
import type { ConstantVariableWriteNode } from '../../../../../com/oracle/truffle/js/nodes/access/ConstantVariableWriteNode.d.ts'
import type { DeclareGlobalNode } from '../../../../../com/oracle/truffle/js/nodes/access/DeclareGlobalNode.d.ts'
import type { GetIteratorUnaryNode } from '../../../../../com/oracle/truffle/js/nodes/access/GetIteratorUnaryNode.d.ts'
import type { IteratorToArrayNode } from '../../../../../com/oracle/truffle/js/nodes/access/IteratorToArrayNode.d.ts'
import type { JSReadFrameSlotNode } from '../../../../../com/oracle/truffle/js/nodes/access/JSReadFrameSlotNode.d.ts'
import type { JSTargetableNode } from '../../../../../com/oracle/truffle/js/nodes/access/JSTargetableNode.d.ts'
import type { JSWriteFrameSlotNode } from '../../../../../com/oracle/truffle/js/nodes/access/JSWriteFrameSlotNode.d.ts'
import type { ObjectLiteralNode$ObjectLiteralMemberNode } from '../../../../../com/oracle/truffle/js/nodes/access/ObjectLiteralNode$ObjectLiteralMemberNode.d.ts'
import type { ReadElementNode } from '../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode.d.ts'
import type { ScopeFrameNode } from '../../../../../com/oracle/truffle/js/nodes/access/ScopeFrameNode.d.ts'
import type { WriteElementNode } from '../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode.d.ts'
import type { WritePropertyNode } from '../../../../../com/oracle/truffle/js/nodes/access/WritePropertyNode.d.ts'
import type { AbstractBlockNode } from '../../../../../com/oracle/truffle/js/nodes/control/AbstractBlockNode.d.ts'
import type { BreakNode } from '../../../../../com/oracle/truffle/js/nodes/control/BreakNode.d.ts'
import type { BreakTarget } from '../../../../../com/oracle/truffle/js/nodes/control/BreakTarget.d.ts'
import type { ContinueNode } from '../../../../../com/oracle/truffle/js/nodes/control/ContinueNode.d.ts'
import type { ContinueTarget } from '../../../../../com/oracle/truffle/js/nodes/control/ContinueTarget.d.ts'
import type { ContinueTargetNode } from '../../../../../com/oracle/truffle/js/nodes/control/ContinueTargetNode.d.ts'
import type { DirectBreakTargetNode } from '../../../../../com/oracle/truffle/js/nodes/control/DirectBreakTargetNode.d.ts'
import type { IfNode } from '../../../../../com/oracle/truffle/js/nodes/control/IfNode.d.ts'
import type { LabelNode } from '../../../../../com/oracle/truffle/js/nodes/control/LabelNode.d.ts'
import type { ReturnNode } from '../../../../../com/oracle/truffle/js/nodes/control/ReturnNode.d.ts'
import type { ReturnTargetNode } from '../../../../../com/oracle/truffle/js/nodes/control/ReturnTargetNode.d.ts'
import type { StatementNode } from '../../../../../com/oracle/truffle/js/nodes/control/StatementNode.d.ts'
import type { SwitchNode } from '../../../../../com/oracle/truffle/js/nodes/control/SwitchNode.d.ts'
import type { AbstractBodyNode } from '../../../../../com/oracle/truffle/js/nodes/function/AbstractBodyNode.d.ts'
import type { AbstractFunctionArgumentsNode } from '../../../../../com/oracle/truffle/js/nodes/function/AbstractFunctionArgumentsNode.d.ts'
import type { BlockScopeNode } from '../../../../../com/oracle/truffle/js/nodes/function/BlockScopeNode.d.ts'
import type { ConstructorRootNode } from '../../../../../com/oracle/truffle/js/nodes/function/ConstructorRootNode.d.ts'
import type { FunctionBodyNode } from '../../../../../com/oracle/truffle/js/nodes/function/FunctionBodyNode.d.ts'
import type { FunctionRootNode } from '../../../../../com/oracle/truffle/js/nodes/function/FunctionRootNode.d.ts'
import type { IterationScopeNode } from '../../../../../com/oracle/truffle/js/nodes/function/IterationScopeNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSFunctionExpressionNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSFunctionExpressionNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSErrorType } from '../../../../../com/oracle/truffle/js/runtime/JSErrorType.d.ts'
import type { JavaScriptRootNode } from '../../../../../com/oracle/truffle/js/runtime/JavaScriptRootNode.d.ts'
import type { JSFunctionData } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { ScriptOrModule } from '../../../../../com/oracle/truffle/js/runtime/objects/ScriptOrModule.d.ts'
import type { InternalSlotId } from '../../../../../com/oracle/truffle/js/runtime/util/InternalSlotId.d.ts'
import type { InvocationHandler } from '../../../../../java/lang/reflect/InvocationHandler.d.ts'
import type { Method } from '../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NodeFactoryProxyGen extends NodeFactory {
    static create(paramhandler: InvocationHandler): NodeFactory;
    static getDefaultInstance(): NodeFactory;
    static getInstance(paramcontext: JSContext): NodeFactory;
    private constructor(handler: InvocationHandler)
    // private handler: InvocationHandler;
    // private methods: Method[];
    copy(arg0: JavaScriptNode): JavaScriptNode;
    copyIfWithCondition(arg0: IfNode, arg1: JavaScriptNode): IfNode;
    createAccessArgument(arg0: number): JavaScriptNode;
    createAccessArgumentsArrayDirectly(arg0: JavaScriptNode, arg1: JavaScriptNode, arg2: number): JavaScriptNode;
    createAccessCallee(arg0: number): JavaScriptNode;
    createAccessFrameArgument(arg0: ScopeFrameNode, arg1: number): JavaScriptNode;
    createAccessHomeObject(arg0: JSContext): JavaScriptNode;
    createAccessLexicalThis(): JavaScriptNode;
    createAccessNewTarget(): JavaScriptNode;
    createAccessRestArgument(arg0: JSContext, arg1: number): JavaScriptNode;
    createAccessThis(): JavaScriptNode;
    createAccessVarArgs(arg0: number): JavaScriptNode;
    createAccessorMember(arg0: TruffleString, arg1: boolean, arg2: boolean, arg3: JavaScriptNode, arg4: JavaScriptNode): ObjectLiteralNode$ObjectLiteralMemberNode;
    createArgumentsObjectNode(arg0: JSContext, arg1: boolean, arg2: number): JavaScriptNode;
    createArrayLiteral(arg0: JSContext, arg1: JavaScriptNode[]): JavaScriptNode;
    createArrayLiteralWithSpread(arg0: JSContext, arg1: JavaScriptNode[]): JavaScriptNode;
    createAsyncFunctionBody(arg0: JSContext, arg1: JavaScriptNode, arg2: JSWriteFrameSlotNode, arg3: JSReadFrameSlotNode, arg4: JSWriteFrameSlotNode, arg5: SourceSection, arg6: TruffleString, arg7: ScriptOrModule): JavaScriptNode;
    createAsyncGeneratorBody(arg0: JSContext, arg1: JavaScriptNode, arg2: JSWriteFrameSlotNode, arg3: JSReadFrameSlotNode, arg4: JSWriteFrameSlotNode, arg5: JSReadFrameSlotNode, arg6: SourceSection, arg7: TruffleString, arg8: ScriptOrModule): JavaScriptNode;
    createAsyncGeneratorYield(arg0: JSContext, arg1: JSFrameSlot, arg2: JavaScriptNode, arg3: JSReadFrameSlotNode, arg4: JSReadFrameSlotNode, arg5: ReturnNode): JavaScriptNode;
    createAsyncGeneratorYieldStar(arg0: JSContext, arg1: JSFrameSlot, arg2: JSFrameSlot, arg3: JavaScriptNode, arg4: JSReadFrameSlotNode, arg5: JSReadFrameSlotNode, arg6: ReturnNode): JavaScriptNode;
    createAsyncIteratorCloseWrapper(arg0: JSContext, arg1: JSFrameSlot, arg2: JavaScriptNode, arg3: JavaScriptNode, arg4: JSReadFrameSlotNode, arg5: JSReadFrameSlotNode): JavaScriptNode;
    createAsyncIteratorNext(arg0: JSContext, arg1: JSFrameSlot, arg2: JavaScriptNode, arg3: JSReadFrameSlotNode, arg4: JSReadFrameSlotNode): JavaScriptNode;
    createAutoAccessor(arg0: TruffleString, arg1: boolean, arg2: boolean, arg3: JavaScriptNode): ObjectLiteralNode$ObjectLiteralMemberNode;
    createAwait(arg0: JSContext, arg1: JSFrameSlot, arg2: JavaScriptNode, arg3: JSReadFrameSlotNode, arg4: JSReadFrameSlotNode): JavaScriptNode;
    createBinary(arg0: JSContext, arg1: NodeFactory$BinaryOperation, arg2: JavaScriptNode, arg3: JavaScriptNode): JavaScriptNode;
    createBlockFrameDescriptor(): JSFrameDescriptor;
    createBlockScope(arg0: JavaScriptNode, arg1: JSFrameSlot, arg2: FrameDescriptor, arg3: JSFrameSlot, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean, arg8: number, arg9: number): JavaScriptNode;
    createBreak(arg0: BreakTarget): BreakNode;
    createCallApplyArguments(arg0: JSFunctionCallNode): JavaScriptNode;
    createClassDefinition(arg0: JSContext, arg1: JSFunctionExpressionNode, arg2: JavaScriptNode, arg3: ObjectLiteralNode$ObjectLiteralMemberNode[], arg4: JSWriteFrameSlotNode, arg5: JSWriteFrameSlotNode, arg6: JavaScriptNode[], arg7: DecoratorListEvaluationNode[], arg8: TruffleString, arg9: number, arg10: number, arg11: boolean, arg12: boolean, arg13: JSFrameSlot): JavaScriptNode;
    createClearFrameSlotRange(arg0: ScopeFrameNode, arg1: number, arg2: number): JavaScriptNode;
    createClearFrameSlots(arg0: ScopeFrameNode, arg1: number[]): JavaScriptNode;
    createCompoundWriteElementNode(arg0: JavaScriptNode, arg1: JavaScriptNode, arg2: JavaScriptNode, arg3: JSWriteFrameSlotNode, arg4: JSContext, arg5: boolean): WriteElementNode;
    createComputedAccessorMember(arg0: JavaScriptNode, arg1: boolean, arg2: boolean, arg3: JavaScriptNode, arg4: JavaScriptNode): ObjectLiteralNode$ObjectLiteralMemberNode;
    createComputedAutoAccessor(arg0: JavaScriptNode, arg1: boolean, arg2: boolean, arg3: JavaScriptNode): ObjectLiteralNode$ObjectLiteralMemberNode;
    createComputedDataMember(arg0: JavaScriptNode, arg1: boolean, arg2: boolean, arg3: JavaScriptNode, arg4: boolean, arg5: boolean): ObjectLiteralNode$ObjectLiteralMemberNode;
    createConstant(arg0: Object): JavaScriptNode;
    createConstantBoolean(arg0: boolean): JavaScriptNode;
    createConstantDouble(arg0: number): JavaScriptNode;
    createConstantInteger(arg0: number): JavaScriptNode;
    createConstantNull(): JavaScriptNode;
    createConstantSafeInteger(arg0: number): JavaScriptNode;
    createConstantString(arg0: TruffleString): JavaScriptNode;
    createConstantUndefined(): JavaScriptNode;
    createConstructorRequiresNewRoot(arg0: JSFunctionData, arg1: SourceSection): JavaScriptRootNode;
    createConstructorRootNode(arg0: JSFunctionData, arg1: CallTarget, arg2: boolean): ConstructorRootNode;
    createContinue(arg0: ContinueTarget): ContinueNode;
    createContinueTarget(arg0: JavaScriptNode, arg1: ContinueTarget): ContinueTargetNode;
    createDataMember(arg0: TruffleString, arg1: boolean, arg2: boolean, arg3: JavaScriptNode, arg4: boolean): ObjectLiteralNode$ObjectLiteralMemberNode;
    createDebugScope(arg0: JSContext, arg1: JavaScriptNode): JavaScriptNode;
    createDebugVarWrapper(arg0: TruffleString, arg1: JavaScriptNode, arg2: JavaScriptNode, arg3: JSTargetableNode): JavaScriptNode;
    createDebugger(): JavaScriptNode;
    createDeclareGlobalFunction(arg0: TruffleString, arg1: boolean): DeclareGlobalNode;
    createDeclareGlobalLexicalVariable(arg0: TruffleString, arg1: boolean): DeclareGlobalNode;
    createDeclareGlobalVariable(arg0: TruffleString, arg1: boolean): DeclareGlobalNode;
    createDecoratorListEvaluation(arg0: JavaScriptNode[]): DecoratorListEvaluationNode;
    createDefaultDerivedConstructorSuperCall(arg0: JavaScriptNode): JavaScriptNode;
    createDeleteProperty(arg0: JavaScriptNode, arg1: JavaScriptNode, arg2: boolean): JSTargetableNode;
    createDerivedConstructorResult(arg0: JavaScriptNode, arg1: JavaScriptNode): JavaScriptNode;
    createDerivedConstructorThis(arg0: JavaScriptNode): JavaScriptNode;
    createDesugaredFor(arg0: LoopNode): JavaScriptNode;
    createDesugaredForAwaitOf(arg0: LoopNode): JavaScriptNode;
    createDesugaredForIn(arg0: LoopNode): JavaScriptNode;
    createDesugaredForOf(arg0: LoopNode): JavaScriptNode;
    createDirectBreakTarget(arg0: JavaScriptNode): DirectBreakTargetNode;
    createDoWhile(arg0: LoopNode): JavaScriptNode;
    createDoWhileRepeatingNode(arg0: JavaScriptNode, arg1: JavaScriptNode): RepeatingNode;
    createDropNewTarget(arg0: JSContext, arg1: CallTarget): JavaScriptRootNode;
    createDual(arg0: JSContext, arg1: JavaScriptNode, arg2: JavaScriptNode): JavaScriptNode;
    createEmpty(): JavaScriptNode;
    createEnumerate(arg0: JSContext, arg1: JavaScriptNode, arg2: boolean): JavaScriptNode;
    createExprBlock(arg0: JavaScriptNode[]): JavaScriptNode;
    createFor(arg0: LoopNode): StatementNode;
    createForOfRepeatingNode(arg0: JavaScriptNode, arg1: JavaScriptNode, arg2: JSWriteFrameSlotNode): RepeatingNode;
    createForRepeatingNode(arg0: JavaScriptNode, arg1: JavaScriptNode, arg2: JavaScriptNode, arg3: FrameDescriptor, arg4: JavaScriptNode, arg5: JavaScriptNode, arg6: JSFrameSlot): RepeatingNode;
    createFrameReturn(arg0: JavaScriptNode): ReturnNode;
    createFrameReturnTarget(arg0: JavaScriptNode, arg1: JavaScriptNode): ReturnTargetNode;
    createFunctionArguments(arg0: JSContext, arg1: JavaScriptNode[]): AbstractFunctionArgumentsNode;
    createFunctionBody(arg0: JavaScriptNode): FunctionBodyNode;
    createFunctionCall(arg0: JSContext, arg1: JavaScriptNode, arg2: JavaScriptNode[]): JavaScriptNode;
    createFunctionCallWithNewTarget(arg0: JSContext, arg1: JavaScriptNode, arg2: JavaScriptNode[]): JavaScriptNode;
    createFunctionData(arg0: JSContext, arg1: number, arg2: TruffleString, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean, arg8: boolean, arg9: boolean, arg10: boolean, arg11: boolean, arg12: boolean): JSFunctionData;
    createFunctionExpression(arg0: JSFunctionData, arg1: FunctionRootNode, arg2: JSFrameSlot): JSFunctionExpressionNode;
    createFunctionExpressionLexicalThis(arg0: JSFunctionData, arg1: FunctionRootNode, arg2: JSFrameSlot, arg3: JavaScriptNode): JSFunctionExpressionNode;
    createFunctionFrameDescriptor(): JSFrameDescriptor;
    createFunctionRootNode(arg0: AbstractBodyNode, arg1: FrameDescriptor, arg2: JSFunctionData, arg3: SourceSection, arg4: ScriptOrModule, arg5: TruffleString): FunctionRootNode;
    createGeneratorBody(arg0: JSContext, arg1: JavaScriptNode, arg2: JSWriteFrameSlotNode, arg3: JSReadFrameSlotNode, arg4: SourceSection, arg5: TruffleString, arg6: ScriptOrModule): JavaScriptNode;
    createGeneratorExprBlock(arg0: JavaScriptNode[], arg1: JSFrameSlot): JavaScriptNode;
    createGeneratorVoidBlock(arg0: JavaScriptNode[], arg1: JSFrameSlot): JavaScriptNode;
    createGeneratorWrapper(arg0: JavaScriptNode, arg1: JSFrameSlot): JavaScriptNode;
    createGetAsyncIterator(arg0: JavaScriptNode): JavaScriptNode;
    createGetIterator(arg0: JavaScriptNode): GetIteratorUnaryNode;
    createGetPrivateBrand(arg0: JSContext, arg1: JavaScriptNode): JavaScriptNode;
    createGetPrototype(arg0: JavaScriptNode): JavaScriptNode;
    createGlobalDeclarationInstantiation(arg0: JSContext, arg1: DeclareGlobalNode[]): JavaScriptNode;
    createGlobalObject(): JavaScriptNode;
    createGlobalScope(arg0: JSContext): JavaScriptNode;
    createGlobalScopeTDZCheck(arg0: JSContext, arg1: TruffleString, arg2: boolean): JavaScriptNode;
    createGlobalVarWrapper(arg0: TruffleString, arg1: JavaScriptNode, arg2: JavaScriptNode, arg3: JSTargetableNode): JavaScriptNode;
    createGuardDisconnectedArgumentRead(arg0: number, arg1: ReadElementNode, arg2: JavaScriptNode, arg3: JSFrameSlot): JavaScriptNode;
    createGuardDisconnectedArgumentWrite(arg0: number, arg1: WriteElementNode, arg2: JavaScriptNode, arg3: JavaScriptNode, arg4: JSFrameSlot): JavaScriptNode;
    createIf(arg0: JavaScriptNode, arg1: JavaScriptNode, arg2: JavaScriptNode): IfNode;
    createImportCall(arg0: JSContext, arg1: Module$ImportPhase, arg2: JavaScriptNode, arg3: JavaScriptNode, arg4: ScriptOrModule): JavaScriptNode;
    createImportMeta(arg0: JavaScriptNode): JavaScriptNode;
    createInitializeInstanceElements(arg0: JSContext, arg1: JavaScriptNode, arg2: JavaScriptNode): JavaScriptNode;
    createInternalSlotId(arg0: string, arg1: number): InternalSlotId;
    createIterationScope(arg0: FrameDescriptor, arg1: JSFrameSlot): IterationScopeNode;
    createIteratorCloseWrapper(arg0: JSContext, arg1: JavaScriptNode, arg2: JavaScriptNode, arg3: boolean): JavaScriptNode;
    createIteratorComplete(arg0: JSContext, arg1: JavaScriptNode): JavaScriptNode;
    createIteratorGetNextValue(arg0: JSContext, arg1: JavaScriptNode, arg2: JavaScriptNode, arg3: boolean, arg4: boolean): JavaScriptNode;
    createIteratorIsDone(arg0: JavaScriptNode): JavaScriptNode;
    createIteratorNext(arg0: JavaScriptNode): JavaScriptNode;
    createIteratorSetDone(arg0: JavaScriptNode, arg1: JavaScriptNode): JavaScriptNode;
    createIteratorToArray(arg0: JSContext, arg1: JavaScriptNode): IteratorToArrayNode;
    createIteratorValue(arg0: JavaScriptNode): JavaScriptNode;
    createLabel(arg0: JavaScriptNode, arg1: BreakTarget): LabelNode;
    createLocal(arg0: JSFrameSlot, arg1: number, arg2: number): JavaScriptNode;
    createLocalVarInc(arg0: NodeFactory$UnaryOperation, arg1: JSFrameSlot, arg2: boolean, arg3: ScopeFrameNode): JavaScriptNode;
    createLogicalOr(arg0: JavaScriptNode, arg1: JavaScriptNode): JavaScriptNode;
    createLoopNode(arg0: RepeatingNode): LoopNode;
    createMakeMethod(arg0: JSContext, arg1: JavaScriptNode): JavaScriptNode;
    createModuleBody(arg0: JavaScriptNode): JavaScriptNode;
    createModuleInitializeEnvironment(arg0: JavaScriptNode): JavaScriptNode;
    createModuleRootNode(arg0: AbstractBodyNode, arg1: AbstractBodyNode, arg2: FrameDescriptor, arg3: JSFunctionData, arg4: SourceSection, arg5: ScriptOrModule, arg6: TruffleString): FunctionRootNode;
    createModuleYield(): JavaScriptNode;
    createNamedEvaluation(arg0: JavaScriptNode, arg1: JavaScriptNode): JavaScriptNode;
    createNew(arg0: JSContext, arg1: JavaScriptNode, arg2: AbstractFunctionArgumentsNode): JavaScriptNode;
    createNewPrivateName(arg0: TruffleString): JavaScriptNode;
    createNewTargetCall(arg0: JSContext, arg1: CallTarget): JavaScriptRootNode;
    createNewTargetConstruct(arg0: JSContext, arg1: CallTarget): JavaScriptRootNode;
    createNotUndefinedOr(arg0: JavaScriptNode, arg1: JavaScriptNode): JavaScriptNode;
    createObjectLiteral(arg0: JSContext, arg1: ObjectLiteralNode$ObjectLiteralMemberNode[]): JavaScriptNode;
    createOptionalChain(arg0: JavaScriptNode): JavaScriptNode;
    createOptionalChainShortCircuit(arg0: JavaScriptNode): JavaScriptNode;
    createPrepareThisBinding(arg0: JSContext, arg1: JavaScriptNode): JavaScriptNode;
    createPrivateAccessorMember(arg0: boolean, arg1: JavaScriptNode, arg2: JavaScriptNode, arg3: JSWriteFrameSlotNode, arg4: number): ObjectLiteralNode$ObjectLiteralMemberNode;
    createPrivateAutoAccessorMember(arg0: boolean, arg1: JavaScriptNode, arg2: JSWriteFrameSlotNode, arg3: JavaScriptNode, arg4: number): ObjectLiteralNode$ObjectLiteralMemberNode;
    createPrivateBrandCheck(arg0: JavaScriptNode, arg1: JavaScriptNode): JavaScriptNode;
    createPrivateFieldGet(arg0: JSContext, arg1: JavaScriptNode, arg2: JavaScriptNode): JavaScriptNode;
    createPrivateFieldIn(arg0: JavaScriptNode, arg1: JavaScriptNode): JavaScriptNode;
    createPrivateFieldMember(arg0: JavaScriptNode, arg1: boolean, arg2: JavaScriptNode, arg3: JSWriteFrameSlotNode): ObjectLiteralNode$ObjectLiteralMemberNode;
    createPrivateFieldSet(arg0: JSContext, arg1: JavaScriptNode, arg2: JavaScriptNode, arg3: JavaScriptNode): JavaScriptNode;
    createPrivateMethodMember(arg0: TruffleString, arg1: boolean, arg2: JavaScriptNode, arg3: JSWriteFrameSlotNode, arg4: number): ObjectLiteralNode$ObjectLiteralMemberNode;
    createProtoMember(arg0: TruffleString, arg1: boolean, arg2: JavaScriptNode): ObjectLiteralNode$ObjectLiteralMemberNode;
    createReadCurrentFrameSlot(arg0: JSFrameSlot): JavaScriptNode;
    createReadElementNode(arg0: JSContext, arg1: JavaScriptNode, arg2: JavaScriptNode): ReadElementNode;
    createReadFrameSlot(arg0: JSFrameSlot, arg1: ScopeFrameNode): JavaScriptNode;
    createReadFrameSlot(arg0: JSFrameSlot, arg1: ScopeFrameNode, arg2: boolean): JavaScriptNode;
    createReadGlobalProperty(arg0: JSContext, arg1: TruffleString): JSTargetableNode;
    createReadImportBinding(arg0: JavaScriptNode): JavaScriptNode;
    createReadLexicalGlobal(arg0: TruffleString, arg1: boolean, arg2: JSContext): JavaScriptNode;
    createReadProperty(arg0: JSContext, arg1: JavaScriptNode, arg2: TruffleString): JSTargetableNode;
    createReadProperty(arg0: JSContext, arg1: JavaScriptNode, arg2: TruffleString, arg3: boolean): JSTargetableNode;
    createRegExpLiteral(arg0: JSContext, arg1: TruffleString, arg2: TruffleString): JavaScriptNode;
    createRequireObjectCoercible(arg0: JavaScriptNode): JavaScriptNode;
    createResolveNamedImport(arg0: JSContext, arg1: JavaScriptNode, arg2: Module$ModuleRequest, arg3: TruffleString, arg4: JSWriteFrameSlotNode): JavaScriptNode;
    createResolveSourceImport(arg0: JSContext, arg1: JavaScriptNode, arg2: Module$ModuleRequest, arg3: JSWriteFrameSlotNode): JavaScriptNode;
    createResolveStarImport(arg0: JSContext, arg1: JavaScriptNode, arg2: Module$ModuleRequest, arg3: JSWriteFrameSlotNode): JavaScriptNode;
    createRestObject(arg0: JSContext, arg1: JavaScriptNode, arg2: JavaScriptNode): JavaScriptNode;
    createReturn(arg0: JavaScriptNode): ReturnNode;
    createReturnTarget(arg0: JavaScriptNode): ReturnTargetNode;
    createScopeFrame(arg0: number, arg1: number, arg2: JSFrameSlot): ScopeFrameNode;
    createScript(arg0: JSContext, arg1: Source): ScriptOrModule;
    createSpreadArgument(arg0: JSContext, arg1: GetIteratorUnaryNode): JavaScriptNode;
    createSpreadArray(arg0: JSContext, arg1: GetIteratorUnaryNode): JavaScriptNode;
    createSpreadObjectMember(arg0: boolean, arg1: JavaScriptNode): ObjectLiteralNode$ObjectLiteralMemberNode;
    createStaticBlockMember(arg0: JavaScriptNode): ObjectLiteralNode$ObjectLiteralMemberNode;
    createSuperPropertyReference(arg0: JavaScriptNode, arg1: JavaScriptNode): JSTargetableNode;
    createSwitch(arg0: JavaScriptNode[], arg1: JavaScriptNode[], arg2: number[], arg3: JavaScriptNode[]): SwitchNode;
    createTargetableWrapper(arg0: JavaScriptNode, arg1: JavaScriptNode): JSTargetableNode;
    createTemplateObject(arg0: JSContext, arg1: JavaScriptNode, arg2: JavaScriptNode): JavaScriptNode;
    createTerminalPositionReturn(arg0: JavaScriptNode): ReturnNode;
    createThrow(arg0: JSContext, arg1: JavaScriptNode): JavaScriptNode;
    createThrowError(arg0: JSErrorType, arg1: TruffleString): JavaScriptNode;
    createToNumericOperand(arg0: JavaScriptNode): JavaScriptNode;
    createToObject(arg0: JavaScriptNode): JavaScriptNode;
    createToObjectForWithStatement(arg0: JSContext, arg1: JavaScriptNode): JavaScriptNode;
    createToPropertyKey(arg0: JavaScriptNode): JavaScriptNode;
    createToString(arg0: JavaScriptNode): JavaScriptNode;
    createTopLevelAsyncModuleBody(arg0: JSContext, arg1: JavaScriptNode, arg2: JSWriteFrameSlotNode, arg3: JSWriteFrameSlotNode, arg4: SourceSection, arg5: ScriptOrModule): JavaScriptNode;
    createTryCatch(arg0: JSContext, arg1: JavaScriptNode, arg2: JavaScriptNode, arg3: JavaScriptNode, arg4: BlockScopeNode, arg5: JavaScriptNode, arg6: JavaScriptNode): JavaScriptNode;
    createTryFinally(arg0: JavaScriptNode, arg1: JavaScriptNode): JavaScriptNode;
    createTypeofIdentical(arg0: JavaScriptNode, arg1: TruffleString): JavaScriptNode;
    createUnary(arg0: NodeFactory$UnaryOperation, arg1: JavaScriptNode): JavaScriptNode;
    createVirtualBlockScope(arg0: JavaScriptNode, arg1: number, arg2: number): JavaScriptNode;
    createVoidBlock(arg0: JavaScriptNode[]): JavaScriptNode;
    createWhileDo(arg0: LoopNode): JavaScriptNode;
    createWhileDoRepeatingNode(arg0: JavaScriptNode, arg1: JavaScriptNode): RepeatingNode;
    createWith(arg0: JavaScriptNode, arg1: JavaScriptNode): JavaScriptNode;
    createWithTarget(arg0: JSContext, arg1: TruffleString, arg2: JavaScriptNode): JavaScriptNode;
    createWithVarWrapper(arg0: JSContext, arg1: TruffleString, arg2: boolean, arg3: JavaScriptNode, arg4: JSTargetableNode, arg5: JavaScriptNode): JavaScriptNode;
    createWriteConstantVariable(arg0: JavaScriptNode, arg1: boolean, arg2: Object): ConstantVariableWriteNode;
    createWriteCurrentFrameSlot(arg0: JSFrameSlot, arg1: JavaScriptNode): JSWriteFrameSlotNode;
    createWriteElementNode(arg0: JavaScriptNode, arg1: JavaScriptNode, arg2: JavaScriptNode, arg3: JSContext, arg4: boolean): WriteElementNode;
    createWriteFrameSlot(arg0: JSFrameSlot, arg1: ScopeFrameNode, arg2: JavaScriptNode): JSWriteFrameSlotNode;
    createWriteFrameSlot(arg0: JSFrameSlot, arg1: ScopeFrameNode, arg2: JavaScriptNode, arg3: boolean): JSWriteFrameSlotNode;
    createWriteProperty(arg0: JavaScriptNode, arg1: TruffleString, arg2: JavaScriptNode, arg3: JSContext, arg4: boolean): WritePropertyNode;
    createWriteProperty(arg0: JavaScriptNode, arg1: TruffleString, arg2: JavaScriptNode, arg3: JSContext, arg4: boolean, arg5: boolean, arg6: boolean): WritePropertyNode;
    createYield(arg0: JSContext, arg1: JSFrameSlot, arg2: JavaScriptNode, arg3: JavaScriptNode, arg4: boolean, arg5: ReturnNode, arg6: JSWriteFrameSlotNode): JavaScriptNode;
    fixBlockNodeChild(arg0: AbstractBlockNode, arg1: number, arg2: JavaScriptNode): AbstractBlockNode;
    fixNodeChild(arg0: Node, arg1: Node, arg2: Node): Node;
}