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
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NodeFactory extends Object {
    static getDefaultInstance(): NodeFactory;
    static getInstance(paramcontext: JSContext): NodeFactory;
    constructor()
    copy(node: JavaScriptNode): JavaScriptNode;
    copyIfWithCondition(origIfNode: IfNode, condition: JavaScriptNode): IfNode;
    createAccessArgument(index: number): JavaScriptNode;
    createAccessArgumentsArrayDirectly(writeArguments: JavaScriptNode, readArguments: JavaScriptNode, leadingArgCount: number): JavaScriptNode;
    createAccessCallee(level: number): JavaScriptNode;
    createAccessFrameArgument(accessFrame: ScopeFrameNode, argIndex: number): JavaScriptNode;
    createAccessHomeObject(context: JSContext): JavaScriptNode;
    createAccessLexicalThis(): JavaScriptNode;
    createAccessNewTarget(): JavaScriptNode;
    createAccessRestArgument(context: JSContext, index: number): JavaScriptNode;
    createAccessThis(): JavaScriptNode;
    createAccessVarArgs(startIndex: number): JavaScriptNode;
    createAccessorMember(keyName: TruffleString, isStatic: boolean, enumerable: boolean, getter: JavaScriptNode, setter: JavaScriptNode): ObjectLiteralNode$ObjectLiteralMemberNode;
    createArgumentsObjectNode(context: JSContext, unmapped: boolean, leadingArgumentCount: number): JavaScriptNode;
    createArrayLiteral(context: JSContext, elements: JavaScriptNode[]): JavaScriptNode;
    createArrayLiteralWithSpread(context: JSContext, elements: JavaScriptNode[]): JavaScriptNode;
    createAsyncFunctionBody(context: JSContext, body: JavaScriptNode, writeAsyncContext: JSWriteFrameSlotNode, readAsyncContext: JSReadFrameSlotNode, writeAsyncResult: JSWriteFrameSlotNode, functionSourceSection: SourceSection, functionName: TruffleString, activeScriptOrModule: ScriptOrModule): JavaScriptNode;
    createAsyncGeneratorBody(context: JSContext, body: JavaScriptNode, writeYieldValue: JSWriteFrameSlotNode, readYieldResult: JSReadFrameSlotNode, writeAsyncContext: JSWriteFrameSlotNode, readAsyncContext: JSReadFrameSlotNode, functionSourceSection: SourceSection, functionName: TruffleString, activeScriptOrModule: ScriptOrModule): JavaScriptNode;
    createAsyncGeneratorYield(context: JSContext, stateSlot: JSFrameSlot, expression: JavaScriptNode, asyncContextNode: JSReadFrameSlotNode, asyncResultNode: JSReadFrameSlotNode, returnNode: ReturnNode): JavaScriptNode;
    createAsyncGeneratorYieldStar(context: JSContext, stateSlot: JSFrameSlot, iteratorTempSlot: JSFrameSlot, expression: JavaScriptNode, asyncContextNode: JSReadFrameSlotNode, asyncResultNode: JSReadFrameSlotNode, returnNode: ReturnNode): JavaScriptNode;
    createAsyncIteratorCloseWrapper(context: JSContext, stateSlot: JSFrameSlot, loopNode: JavaScriptNode, iterator: JavaScriptNode, asyncContextNode: JSReadFrameSlotNode, asyncResultNode: JSReadFrameSlotNode): JavaScriptNode;
    createAsyncIteratorNext(context: JSContext, stateSlot: JSFrameSlot, iterator: JavaScriptNode, asyncContextNode: JSReadFrameSlotNode, asyncResultNode: JSReadFrameSlotNode): JavaScriptNode;
    createAutoAccessor(keyName: TruffleString, isStatic: boolean, enumerable: boolean, value: JavaScriptNode): ObjectLiteralNode$ObjectLiteralMemberNode;
    createAwait(context: JSContext, stateSlot: JSFrameSlot, expression: JavaScriptNode, asyncContextNode: JSReadFrameSlotNode, asyncResultNode: JSReadFrameSlotNode): JavaScriptNode;
    createBinary(context: JSContext, operation: NodeFactory$BinaryOperation, left: JavaScriptNode, right: JavaScriptNode): JavaScriptNode;
    createBlockFrameDescriptor(): JSFrameDescriptor;
    createBlockScope(block: JavaScriptNode, blockScopeSlot: JSFrameSlot, blockFrameDescriptor: FrameDescriptor, parentSlot: JSFrameSlot, functionBlock: boolean, captureFunctionFrame: boolean, generatorFunctionBlock: boolean, hasParentBlock: boolean, frameStart: number, frameEnd: number): JavaScriptNode;
    createBreak(breakTarget: BreakTarget): BreakNode;
    createCallApplyArguments(callNode: JSFunctionCallNode): JavaScriptNode;
    createClassDefinition(context: JSContext, constructorFunction: JSFunctionExpressionNode, classHeritage: JavaScriptNode, members: ObjectLiteralNode$ObjectLiteralMemberNode[], writeClassBinding: JSWriteFrameSlotNode, writeInternalConstructorBrand: JSWriteFrameSlotNode, classDecorators: JavaScriptNode[], memberDecorators: DecoratorListEvaluationNode[], className: TruffleString, instanceFieldCount: number, staticFieldCount: number, hasPrivateInstanceMethods: boolean, hasInstanceFieldsOrAccessors: boolean, blockScopeSlot: JSFrameSlot): JavaScriptNode;
    createClearFrameSlotRange(scope: ScopeFrameNode, start: number, end: number): JavaScriptNode;
    createClearFrameSlots(scope: ScopeFrameNode, slots: number[]): JavaScriptNode;
    createClearFrameSlots(scope: ScopeFrameNode, slots: number[], from: number, to: number): JavaScriptNode;
    createCompoundWriteElementNode(targetNode: JavaScriptNode, indexNode: JavaScriptNode, valueNode: JavaScriptNode, writeIndex: JSWriteFrameSlotNode, context: JSContext, isStrict: boolean): WriteElementNode;
    createComputedAccessorMember(key: JavaScriptNode, isStatic: boolean, enumerable: boolean, getter: JavaScriptNode, setter: JavaScriptNode): ObjectLiteralNode$ObjectLiteralMemberNode;
    createComputedAutoAccessor(key: JavaScriptNode, isStatic: boolean, enumerable: boolean, value: JavaScriptNode): ObjectLiteralNode$ObjectLiteralMemberNode;
    createComputedDataMember(key: JavaScriptNode, isStatic: boolean, enumerable: boolean, value: JavaScriptNode, isField: boolean, isAnonymousFunctionDefinition: boolean): ObjectLiteralNode$ObjectLiteralMemberNode;
    createConstant(value: Object): JavaScriptNode;
    createConstantBoolean(value: boolean): JavaScriptNode;
    createConstantDouble(value: number): JavaScriptNode;
    createConstantInteger(value: number): JavaScriptNode;
    createConstantNull(): JavaScriptNode;
    createConstantSafeInteger(value: number): JavaScriptNode;
    createConstantString(value: TruffleString): JavaScriptNode;
    createConstantUndefined(): JavaScriptNode;
    createConstructorRequiresNewRoot(functionData: JSFunctionData, sourceSection: SourceSection): JavaScriptRootNode;
    createConstructorRootNode(functionData: JSFunctionData, callTarget: CallTarget, newTarget: boolean): ConstructorRootNode;
    createContinue(continueTarget: ContinueTarget): ContinueNode;
    createContinueTarget(block: JavaScriptNode, continueTarget: ContinueTarget): ContinueTargetNode;
    createDataMember(keyName: TruffleString, isStatic: boolean, enumerable: boolean, value: JavaScriptNode, isField: boolean): ObjectLiteralNode$ObjectLiteralMemberNode;
    createDebugScope(context: JSContext, function_: JavaScriptNode): JavaScriptNode;
    createDebugVarWrapper(varName: TruffleString, defaultDelegate: JavaScriptNode, dynamicScope: JavaScriptNode, scopeAccessNode: JSTargetableNode): JavaScriptNode;
    createDebugger(): JavaScriptNode;
    createDeclareGlobalFunction(varName: TruffleString, configurable: boolean): DeclareGlobalNode;
    createDeclareGlobalLexicalVariable(varName: TruffleString, isConst: boolean): DeclareGlobalNode;
    createDeclareGlobalVariable(varName: TruffleString, configurable: boolean): DeclareGlobalNode;
    createDecoratorListEvaluation(decorators: JavaScriptNode[]): DecoratorListEvaluationNode;
    createDefaultDerivedConstructorSuperCall(function_: JavaScriptNode): JavaScriptNode;
    createDeleteProperty(target: JavaScriptNode, property: JavaScriptNode, strictMode: boolean): JSTargetableNode;
    createDerivedConstructorResult(bodyNode: JavaScriptNode, thisNode: JavaScriptNode): JavaScriptNode;
    createDerivedConstructorThis(thisNode: JavaScriptNode): JavaScriptNode;
    createDesugaredFor(loopNode: LoopNode): JavaScriptNode;
    createDesugaredForAwaitOf(loopNode: LoopNode): JavaScriptNode;
    createDesugaredForIn(loopNode: LoopNode): JavaScriptNode;
    createDesugaredForOf(loopNode: LoopNode): JavaScriptNode;
    createDirectBreakTarget(block: JavaScriptNode): DirectBreakTargetNode;
    createDoWhile(loopNode: LoopNode): JavaScriptNode;
    createDoWhileRepeatingNode(condition: JavaScriptNode, body: JavaScriptNode): RepeatingNode;
    createDropNewTarget(context: JSContext, callTarget: CallTarget): JavaScriptRootNode;
    createDual(context: JSContext, left: JavaScriptNode, right: JavaScriptNode): JavaScriptNode;
    createEmpty(): JavaScriptNode;
    createEnumerate(context: JSContext, iteratedObject: JavaScriptNode, values: boolean): JavaScriptNode;
    createExprBlock(statements: JavaScriptNode[]): JavaScriptNode;
    createFor(loopNode: LoopNode): StatementNode;
    createForOfRepeatingNode(nextResultNode: JavaScriptNode, body: JavaScriptNode, writeNextValueNode: JSWriteFrameSlotNode): RepeatingNode;
    createForRepeatingNode(condition: JavaScriptNode, body: JavaScriptNode, modify: JavaScriptNode, frameDescriptor: FrameDescriptor, isFirstNode: JavaScriptNode, setNotFirstNode: JavaScriptNode, blockScopeSlot: JSFrameSlot): RepeatingNode;
    createFrameReturn(expression: JavaScriptNode): ReturnNode;
    createFrameReturnTarget(body: JavaScriptNode, returnValue: JavaScriptNode): ReturnTargetNode;
    createFunctionArguments(context: JSContext, arguments: JavaScriptNode[]): AbstractFunctionArgumentsNode;
    createFunctionBody(body: JavaScriptNode): FunctionBodyNode;
    createFunctionCall(context: JSContext, expression: JavaScriptNode, arguments: JavaScriptNode[]): JavaScriptNode;
    createFunctionCallWithNewTarget(context: JSContext, expression: JavaScriptNode, arguments: JavaScriptNode[]): JavaScriptNode;
    createFunctionData(context: JSContext, length: number, name: TruffleString, isConstructor: boolean, isDerived: boolean, isStrict: boolean, isBuiltin: boolean, needsParentFrame: boolean, isGenerator: boolean, isAsync: boolean, isClassConstructor: boolean, strictProperties: boolean, needsNewTarget: boolean): JSFunctionData;
    createFunctionExpression(function_: JSFunctionData, functionNode: FunctionRootNode, blockScopeSlot: JSFrameSlot): JSFunctionExpressionNode;
    createFunctionExpressionLexicalThis(function_: JSFunctionData, functionNode: FunctionRootNode, blockScopeSlot: JSFrameSlot, thisNode: JavaScriptNode): JSFunctionExpressionNode;
    createFunctionFrameDescriptor(): JSFrameDescriptor;
    createFunctionRootNode(body: AbstractBodyNode, frameDescriptor: FrameDescriptor, functionData: JSFunctionData, sourceSection: SourceSection, activeScriptOrModule: ScriptOrModule, internalFunctionName: TruffleString): FunctionRootNode;
    createGeneratorBody(context: JSContext, body: JavaScriptNode, writeYieldValue: JSWriteFrameSlotNode, readYieldResult: JSReadFrameSlotNode, functionSourceSection: SourceSection, functionName: TruffleString, activeScriptOrModule: ScriptOrModule): JavaScriptNode;
    createGeneratorExprBlock(statements: JavaScriptNode[], stateSlot: JSFrameSlot): JavaScriptNode;
    createGeneratorVoidBlock(statements: JavaScriptNode[], stateSlot: JSFrameSlot): JavaScriptNode;
    createGeneratorWrapper(child: JavaScriptNode, stateSlot: JSFrameSlot): JavaScriptNode;
    createGetAsyncIterator(iteratedObject: JavaScriptNode): JavaScriptNode;
    createGetIterator(iteratedObject: JavaScriptNode): GetIteratorUnaryNode;
    createGetPrivateBrand(context: JSContext, constructorNode: JavaScriptNode): JavaScriptNode;
    createGetPrototype(object: JavaScriptNode): JavaScriptNode;
    createGlobalDeclarationInstantiation(context: JSContext, declarations: DeclareGlobalNode[]): JavaScriptNode;
    createGlobalObject(): JavaScriptNode;
    createGlobalScope(context: JSContext): JavaScriptNode;
    createGlobalScopeTDZCheck(context: JSContext, name: TruffleString, checkTDZ: boolean): JavaScriptNode;
    createGlobalVarWrapper(varName: TruffleString, defaultDelegate: JavaScriptNode, dynamicScope: JavaScriptNode, scopeAccessNode: JSTargetableNode): JavaScriptNode;
    createGuardDisconnectedArgumentRead(index: number, readElementNode: ReadElementNode, argumentsArray: JavaScriptNode, slot: JSFrameSlot): JavaScriptNode;
    createGuardDisconnectedArgumentWrite(index: number, argumentsArrayAccess: WriteElementNode, argumentsArray: JavaScriptNode, rhs: JavaScriptNode, slot: JSFrameSlot): JavaScriptNode;
    createIf(condition: JavaScriptNode, pass: JavaScriptNode, fail: JavaScriptNode): IfNode;
    createImportCall(context: JSContext, phase: Module$ImportPhase, argument: JavaScriptNode, options: JavaScriptNode, activeScriptOrModule: ScriptOrModule): JavaScriptNode;
    createImportMeta(moduleNode: JavaScriptNode): JavaScriptNode;
    createInitializeInstanceElements(context: JSContext, target: JavaScriptNode, constructor: JavaScriptNode): JavaScriptNode;
    createInternalSlotId(description: string, ordinal: number): InternalSlotId;
    createIterationScope(frameDescriptor: FrameDescriptor, blockScopeSlot: JSFrameSlot): IterationScopeNode;
    createIteratorCloseWrapper(context: JSContext, block: JavaScriptNode, iterator: JavaScriptNode, arrayDestructuring: boolean): JavaScriptNode;
    createIteratorComplete(context: JSContext, iterResult: JavaScriptNode): JavaScriptNode;
    createIteratorGetNextValue(context: JSContext, iterator: JavaScriptNode, doneNode: JavaScriptNode, setDoneOnError: boolean, readValue: boolean): JavaScriptNode;
    createIteratorIsDone(iterator: JavaScriptNode): JavaScriptNode;
    createIteratorNext(iterator: JavaScriptNode): JavaScriptNode;
    createIteratorSetDone(iterator: JavaScriptNode, isDone: JavaScriptNode): JavaScriptNode;
    createIteratorToArray(context: JSContext, iterator: JavaScriptNode): IteratorToArrayNode;
    createIteratorValue(iterator: JavaScriptNode): JavaScriptNode;
    createLabel(block: JavaScriptNode, target: BreakTarget): LabelNode;
    createLocal(frameSlot: JSFrameSlot, frameLevel: number, scopeLevel: number): JavaScriptNode;
    createLocalVarInc(operation: NodeFactory$UnaryOperation, frameSlot: JSFrameSlot, hasTemporalDeadZone: boolean, scopeFrameNode: ScopeFrameNode): JavaScriptNode;
    createLogicalOr(left: JavaScriptNode, right: JavaScriptNode): JavaScriptNode;
    createLoopNode(repeatingNode: RepeatingNode): LoopNode;
    createMakeMethod(context: JSContext, function_: JavaScriptNode): JavaScriptNode;
    createModuleBody(moduleBody: JavaScriptNode): JavaScriptNode;
    createModuleInitializeEnvironment(moduleBody: JavaScriptNode): JavaScriptNode;
    createModuleRootNode(linkBody: AbstractBodyNode, evalBody: AbstractBodyNode, frameDescriptor: FrameDescriptor, functionData: JSFunctionData, sourceSection: SourceSection, activeScriptOrModule: ScriptOrModule, internalFunctionName: TruffleString): FunctionRootNode;
    createModuleYield(): JavaScriptNode;
    createNamedEvaluation(expressionNode: JavaScriptNode, nameNode: JavaScriptNode): JavaScriptNode;
    createNew(context: JSContext, function_: JavaScriptNode, arguments: AbstractFunctionArgumentsNode): JavaScriptNode;
    createNewPrivateName(description: TruffleString): JavaScriptNode;
    createNewTargetCall(context: JSContext, callTarget: CallTarget): JavaScriptRootNode;
    createNewTargetConstruct(context: JSContext, callTarget: CallTarget): JavaScriptRootNode;
    createNotUndefinedOr(left: JavaScriptNode, right: JavaScriptNode): JavaScriptNode;
    createObjectLiteral(context: JSContext, members: ObjectLiteralNode$ObjectLiteralMemberNode[]): JavaScriptNode;
    createOptionalChain(accessNode: JavaScriptNode): JavaScriptNode;
    createOptionalChainShortCircuit(valueNode: JavaScriptNode): JavaScriptNode;
    createPrepareThisBinding(context: JSContext, child: JavaScriptNode): JavaScriptNode;
    createPrivateAccessorMember(isStatic: boolean, getterNode: JavaScriptNode, setterNode: JavaScriptNode, writePrivateNode: JSWriteFrameSlotNode, privateBrandSlotIndex: number): ObjectLiteralNode$ObjectLiteralMemberNode;
    createPrivateAutoAccessorMember(isStatic: boolean, valueNode: JavaScriptNode, writePrivateAccessor: JSWriteFrameSlotNode, storageKey: JavaScriptNode, privateBrandSlotIndex: number): ObjectLiteralNode$ObjectLiteralMemberNode;
    createPrivateBrandCheck(targetNode: JavaScriptNode, brandNode: JavaScriptNode): JavaScriptNode;
    createPrivateFieldGet(context: JSContext, target: JavaScriptNode, key: JavaScriptNode): JavaScriptNode;
    createPrivateFieldIn(left: JavaScriptNode, right: JavaScriptNode): JavaScriptNode;
    createPrivateFieldMember(keyNode: JavaScriptNode, isStatic: boolean, valueNode: JavaScriptNode, writePrivateNode: JSWriteFrameSlotNode): ObjectLiteralNode$ObjectLiteralMemberNode;
    createPrivateFieldSet(context: JSContext, targetNode: JavaScriptNode, indexNode: JavaScriptNode, valueNode: JavaScriptNode): JavaScriptNode;
    createPrivateMethodMember(privateName: TruffleString, isStatic: boolean, valueNode: JavaScriptNode, writePrivateNode: JSWriteFrameSlotNode, privateBrandSlotIndex: number): ObjectLiteralNode$ObjectLiteralMemberNode;
    createProtoMember(keyName: TruffleString, isStatic: boolean, value: JavaScriptNode): ObjectLiteralNode$ObjectLiteralMemberNode;
    createReadCurrentFrameSlot(frameSlot: JSFrameSlot): JavaScriptNode;
    createReadElementNode(context: JSContext, target: JavaScriptNode, element: JavaScriptNode): ReadElementNode;
    createReadFrameSlot(frameSlot: JSFrameSlot, scope: ScopeFrameNode): JavaScriptNode;
    createReadFrameSlot(frameSlot: JSFrameSlot, scope: ScopeFrameNode, hasTemporalDeadZone: boolean): JavaScriptNode;
    createReadGlobalProperty(context: JSContext, name: TruffleString): JSTargetableNode;
    createReadImportBinding(readLocal: JavaScriptNode): JavaScriptNode;
    createReadLexicalGlobal(name: TruffleString, hasTemporalDeadZone: boolean, context: JSContext): JavaScriptNode;
    createReadProperty(context: JSContext, base: JavaScriptNode, propertyName: TruffleString): JSTargetableNode;
    createReadProperty(context: JSContext, base: JavaScriptNode, propertyName: TruffleString, method: boolean): JSTargetableNode;
    createRegExpLiteral(context: JSContext, pattern: TruffleString, flags: TruffleString): JavaScriptNode;
    createRequireObjectCoercible(argument: JavaScriptNode): JavaScriptNode;
    createResolveNamedImport(context: JSContext, moduleNode: JavaScriptNode, moduleRequest: Module$ModuleRequest, importName: TruffleString, writeLocalNode: JSWriteFrameSlotNode): JavaScriptNode;
    createResolveSourceImport(context: JSContext, moduleNode: JavaScriptNode, moduleRequest: Module$ModuleRequest, writeLocalNode: JSWriteFrameSlotNode): JavaScriptNode;
    createResolveStarImport(context: JSContext, moduleNode: JavaScriptNode, moduleRequest: Module$ModuleRequest, writeLocalNode: JSWriteFrameSlotNode): JavaScriptNode;
    createRestObject(context: JSContext, source: JavaScriptNode, excludedNames: JavaScriptNode): JavaScriptNode;
    createReturn(expression: JavaScriptNode): ReturnNode;
    createReturnTarget(body: JavaScriptNode): ReturnTargetNode;
    createScopeFrame(frameLevel: number, scopeLevel: number, blockScopeSlot: JSFrameSlot): ScopeFrameNode;
    createScript(context: JSContext, source: Source): ScriptOrModule;
    createSpreadArgument(context: JSContext, getIterator: GetIteratorUnaryNode): JavaScriptNode;
    createSpreadArray(context: JSContext, getIterator: GetIteratorUnaryNode): JavaScriptNode;
    createSpreadObjectMember(isStatic: boolean, value: JavaScriptNode): ObjectLiteralNode$ObjectLiteralMemberNode;
    createStaticBlockMember(value: JavaScriptNode): ObjectLiteralNode$ObjectLiteralMemberNode;
    createSuperPropertyReference(delegate: JavaScriptNode, target: JavaScriptNode): JSTargetableNode;
    createSwitch(declarations: JavaScriptNode[], caseExpressions: JavaScriptNode[], jumptable: number[], statements: JavaScriptNode[]): SwitchNode;
    createTargetableWrapper(delegate: JavaScriptNode, target: JavaScriptNode): JSTargetableNode;
    createTemplateObject(context: JSContext, rawStrings: JavaScriptNode, cookedStrings: JavaScriptNode): JavaScriptNode;
    createTerminalPositionReturn(expression: JavaScriptNode): ReturnNode;
    createThrow(context: JSContext, expression: JavaScriptNode): JavaScriptNode;
    createThrowError(errorType: JSErrorType, message: TruffleString): JavaScriptNode;
    createToNumericOperand(operand: JavaScriptNode): JavaScriptNode;
    createToObject(operand: JavaScriptNode): JavaScriptNode;
    createToObjectForWithStatement(context: JSContext, operand: JavaScriptNode): JavaScriptNode;
    createToPropertyKey(key: JavaScriptNode): JavaScriptNode;
    createToString(operand: JavaScriptNode): JavaScriptNode;
    createTopLevelAsyncModuleBody(context: JSContext, moduleBody: JavaScriptNode, writeAsyncResult: JSWriteFrameSlotNode, writeAsyncContext: JSWriteFrameSlotNode, functionSourceSection: SourceSection, activeScriptOrModule: ScriptOrModule): JavaScriptNode;
    createTryCatch(context: JSContext, tryNode: JavaScriptNode, catchBlock: JavaScriptNode, writeErrorVar: JavaScriptNode, blockScope: BlockScopeNode, destructuring: JavaScriptNode, conditionExpression: JavaScriptNode): JavaScriptNode;
    createTryFinally(tryNode: JavaScriptNode, finallyBlock: JavaScriptNode): JavaScriptNode;
    createTypeofIdentical(subject: JavaScriptNode, typeString: TruffleString): JavaScriptNode;
    createUnary(operation: NodeFactory$UnaryOperation, operand: JavaScriptNode): JavaScriptNode;
    createVirtualBlockScope(block: JavaScriptNode, start: number, end: number): JavaScriptNode;
    createVoidBlock(statements: JavaScriptNode[]): JavaScriptNode;
    createWhileDo(loopNode: LoopNode): JavaScriptNode;
    createWhileDoRepeatingNode(condition: JavaScriptNode, body: JavaScriptNode): RepeatingNode;
    createWith(expression: JavaScriptNode, statement: JavaScriptNode): JavaScriptNode;
    createWithTarget(context: JSContext, propertyName: TruffleString, withVariable: JavaScriptNode): JavaScriptNode;
    createWithVarWrapper(context: JSContext, propertyName: TruffleString, isStrict: boolean, withTarget: JavaScriptNode, withAccessNode: JSTargetableNode, globalDelegate: JavaScriptNode): JavaScriptNode;
    createWriteConstantVariable(rhs: JavaScriptNode, doThrow: boolean, name: Object): ConstantVariableWriteNode;
    createWriteCurrentFrameSlot(frameSlot: JSFrameSlot, rhs: JavaScriptNode): JSWriteFrameSlotNode;
    createWriteElementNode(targetNode: JavaScriptNode, indexNode: JavaScriptNode, valueNode: JavaScriptNode, context: JSContext, isStrict: boolean): WriteElementNode;
    createWriteFrameSlot(frameSlot: JSFrameSlot, scope: ScopeFrameNode, rhs: JavaScriptNode): JSWriteFrameSlotNode;
    createWriteFrameSlot(frameSlot: JSFrameSlot, scope: ScopeFrameNode, rhs: JavaScriptNode, hasTemporalDeadZone: boolean): JSWriteFrameSlotNode;
    createWriteProperty(target: JavaScriptNode, name: TruffleString, rhs: JavaScriptNode, context: JSContext, strictMode: boolean): WritePropertyNode;
    createWriteProperty(target: JavaScriptNode, name: TruffleString, rhs: JavaScriptNode, context: JSContext, isStrict: boolean, isGlobal: boolean, verifyHasProperty: boolean): WritePropertyNode;
    createYield(context: JSContext, stateSlot: JSFrameSlot, expression: JavaScriptNode, yieldValue: JavaScriptNode, yieldStar: boolean, returnNode: ReturnNode, writeYieldResultNode: JSWriteFrameSlotNode): JavaScriptNode;
    fixBlockNodeChild(blockNode: AbstractBlockNode, index: number, newChild: JavaScriptNode): AbstractBlockNode;
    fixNodeChild(parent: Node, child: Node, newChild: Node): Node;
}