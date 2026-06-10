import type { FrameSlotKind } from '../../../../../../com/oracle/truffle/api/frame/FrameSlotKind.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { ApplyDecoratorsToClassDefinitionNode } from '../../../../../../com/oracle/truffle/js/decorators/ApplyDecoratorsToClassDefinitionNode.d.ts'
import type { ApplyDecoratorsToElementDefinition } from '../../../../../../com/oracle/truffle/js/decorators/ApplyDecoratorsToElementDefinition.d.ts'
import type { DecoratorListEvaluationNode } from '../../../../../../com/oracle/truffle/js/decorators/DecoratorListEvaluationNode.d.ts'
import type { JSFrameSlot } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { CreateObjectNode$CreateObjectWithPrototypeNode } from '../../../../../../com/oracle/truffle/js/nodes/access/CreateObjectNode$CreateObjectWithPrototypeNode.d.ts'
import type { InitializeInstanceElementsNode } from '../../../../../../com/oracle/truffle/js/nodes/access/InitializeInstanceElementsNode.d.ts'
import type { JSWriteFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSWriteFrameSlotNode.d.ts'
import type { ObjectLiteralNode$ObjectLiteralMemberNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ObjectLiteralNode$ObjectLiteralMemberNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { ResumableNode$WithObjectState } from '../../../../../../com/oracle/truffle/js/nodes/control/ResumableNode$WithObjectState.d.ts'
import type { ClassDefinitionNode$ClassDefinitionResumptionRecord } from '../../../../../../com/oracle/truffle/js/nodes/function/ClassDefinitionNode$ClassDefinitionResumptionRecord.d.ts'
import type { ClassElementDefinitionRecord } from '../../../../../../com/oracle/truffle/js/nodes/function/ClassElementDefinitionRecord.d.ts'
import type { CreateMethodPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/function/CreateMethodPropertyNode.d.ts'
import type { DefineMethodNode } from '../../../../../../com/oracle/truffle/js/nodes/function/DefineMethodNode.d.ts'
import type { FunctionNameHolder } from '../../../../../../com/oracle/truffle/js/nodes/function/FunctionNameHolder.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSFunctionExpressionNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionExpressionNode.d.ts'
import type { NamedEvaluationTargetNode } from '../../../../../../com/oracle/truffle/js/nodes/function/NamedEvaluationTargetNode.d.ts'
import type { SetFunctionNameNode } from '../../../../../../com/oracle/truffle/js/nodes/function/SetFunctionNameNode.d.ts'
import type { IsConstructorNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsConstructorNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { SimpleArrayList } from '../../../../../../com/oracle/truffle/js/runtime/util/SimpleArrayList.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ClassDefinitionNode extends NamedEvaluationTargetNode implements ResumableNode$WithObjectState, FunctionNameHolder {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: Class<Tag>[]): Object | null;
    static create(paramcontext: JSContext, paramconstructorFunction: JSFunctionExpressionNode, paramclassHeritage: JavaScriptNode, parammembers: (Object | null)[], paramwriteClassBinding: JSWriteFrameSlotNode, paramwriteInternalConstructorBrand: JSWriteFrameSlotNode, paramclassName: TruffleString, paramclassDecorators: (Object | null)[], parammemberDecorators: (Object | null)[], paraminstanceFieldCount: number, paramstaticElementCount: number, paramhasPrivateInstanceMethods: boolean, paramhasInstanceFieldsOrAccessors: boolean, paramblockScopeSlot: JSFrameSlot): ClassDefinitionNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, constructorFunctionNode: JSFunctionExpressionNode, classHeritageNode: JavaScriptNode, memberNodes: ObjectLiteralNode$ObjectLiteralMemberNode[], writeClassBindingNode: JSWriteFrameSlotNode, writeInternalConstructorBrand: JSWriteFrameSlotNode, classDecorators: JavaScriptNode[], memberDecorators: DecoratorListEvaluationNode[], className: TruffleString, instanceElementsCount: number, staticElementCount: number, hasPrivateInstanceMethods: boolean, hasInstanceFieldsOrAccessors: boolean, blockScopeSlot: number)
    // private applyDecoratorsToElementDefinition: ApplyDecoratorsToElementDefinition[];
    // private classDecorators: JavaScriptNode[];
    // private classHeritageNode: JavaScriptNode;
    readonly className: TruffleString;
    // private constructorFunctionNode: JavaScriptNode;
    // private context: JSContext;
    readonly createPrototypeNode: CreateObjectNode$CreateObjectWithPrototypeNode;
    // private decorateClassDefinition: ApplyDecoratorsToClassDefinitionNode;
    // private defineConstructorMethodNode: DefineMethodNode;
    // private errorBranch: BranchProfile;
    // private getPrototypeNode: PropertyGetNode;
    // private hasName: boolean;
    // private instanceElementCount: number;
    // private isConstructorNode: IsConstructorNode;
    // private memberDecorators: DecoratorListEvaluationNode[];
    // private memberNodes: ObjectLiteralNode$ObjectLiteralMemberNode[];
    // private setConstructorNode: CreateMethodPropertyNode;
    // private setElementsNode: PropertySetNode;
    // private setFunctionName: SetFunctionNameNode;
    // private setInitializersNode: PropertySetNode;
    // private setPrivateBrandNode: PropertySetNode;
    // private staticElementCount: number;
    // private staticElementsNode: InitializeInstanceElementsNode;
    // private staticExtraInitializersCallNode: JSFunctionCallNode;
    // private writeClassBindingNode: JSWriteFrameSlotNode;
    // private writeInternalConstructorBrand: JSWriteFrameSlotNode;
    // private applyDecoratorsAndDefineMethods(frame: VirtualFrame, homeObject: JSObject, elements: ClassElementDefinitionRecord[], extraInitializers: SimpleArrayList<Object>, isStatic: boolean): void;
    // private applyDecoratorsAndDefineMethods(frame: VirtualFrame, instanceElements: ClassElementDefinitionRecord[], instanceExtraInitializers: SimpleArrayList<Object>, staticExtraInitializers: SimpleArrayList<Object>, staticElements: ClassElementDefinitionRecord[], constructor: JSObject, proto: JSObject): void;
    // private applyDecoratorsToClassDefinition(name: Object, constructor: JSObject, decorators: Object[], classExtraInitializers: SimpleArrayList<Object>): Object;
    // private applyDecoratorsToElements(frame: VirtualFrame, homeObject: JSObject, elements: ClassElementDefinitionRecord[], extraInitializers: SimpleArrayList<Object>, isStatic: boolean): void;
    // private classDecoratorListEvaluation(frame: VirtualFrame): Object[];
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    // private defineClassElements(frame: VirtualFrame, proto: JSObject, constructor: JSFunctionObject, decorators: Object[], instanceElements: ClassElementDefinitionRecord[], staticElements: ClassElementDefinitionRecord[], startIndex: number, instanceElementIndex: number, staticElementIndex: number, stateSlot: number, realm: JSRealm): Object;
    execute(frame: VirtualFrame): Object;
    // private executeStaticExtraInitializers(target: Object, initializers: Object[]): void;
    executeWithName(frame: VirtualFrame, name: Object): Object;
    // private executeWithName(frame: VirtualFrame, name: Object, resumptionRecord: ClassDefinitionNode$ClassDefinitionResumptionRecord, stateSlot: number): Object;
    getClassName(): TruffleString;
    getCreatePrototypeNode(): CreateObjectNode$CreateObjectWithPrototypeNode;
    getFunctionName(): TruffleString;
    getState(frame: VirtualFrame, stateSlot: number): Object;
    getStateAndReset(frame: VirtualFrame, stateSlot: number): Object;
    getStateSlotKind(): FrameSlotKind;
    // private initializeMembers(frame: VirtualFrame, proto: JSObject, constructor: JSFunctionObject, instanceElements: ClassElementDefinitionRecord[], staticElements: ClassElementDefinitionRecord[], startIndex: number, instanceElementsIdx: number, staticElementIdx: number, stateSlot: number, realm: JSRealm): void;
    isAnonymous(): boolean;
    isResultAlwaysOfType(clazz: Class<Object>): boolean;
    resume(frame: VirtualFrame, stateSlot: number): Object;
    setFunctionName(name: TruffleString): void;
    setState(frame: VirtualFrame, stateSlot: number, state: Object): void;
}