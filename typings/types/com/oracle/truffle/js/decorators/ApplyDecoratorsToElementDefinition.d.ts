import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { CreateDecoratorContextObjectNode } from '../../../../../com/oracle/truffle/js/decorators/CreateDecoratorContextObjectNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { CreateDataPropertyNode } from '../../../../../com/oracle/truffle/js/nodes/access/CreateDataPropertyNode.d.ts'
import type { CreateObjectNode } from '../../../../../com/oracle/truffle/js/nodes/access/CreateObjectNode.d.ts'
import type { IsObjectNode } from '../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { ObjectLiteralNode$ObjectLiteralMemberNode } from '../../../../../com/oracle/truffle/js/nodes/access/ObjectLiteralNode$ObjectLiteralMemberNode.d.ts'
import type { PropertyGetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { ClassElementDefinitionRecord } from '../../../../../com/oracle/truffle/js/nodes/function/ClassElementDefinitionRecord.d.ts'
import type { JSFunctionCallNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { SetFunctionNameNode } from '../../../../../com/oracle/truffle/js/nodes/function/SetFunctionNameNode.d.ts'
import type { IsCallableNode } from '../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { SimpleArrayList } from '../../../../../com/oracle/truffle/js/runtime/util/SimpleArrayList.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ApplyDecoratorsToElementDefinition extends JavaScriptBaseNode {
    static create(paramcontext: JSContext, parammember: ObjectLiteralNode$ObjectLiteralMemberNode): ApplyDecoratorsToElementDefinition;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, createDecoratorContextObjectNode: CreateDecoratorContextObjectNode)
    // private context: JSContext;
    // private createDecoratorContextNode: CreateDecoratorContextObjectNode;
    decorateAuto(frame: VirtualFrame, proto: JSDynamicObject, record: ClassElementDefinitionRecord, extraInitializers: SimpleArrayList<Object>, node: Node, callNode: JSFunctionCallNode, isCallableNode: IsCallableNode, getGetterNode: PropertyGetNode, getSetterNode: PropertyGetNode, getInitNode: PropertyGetNode, createObjectNode: CreateObjectNode, createGetDataPropertyNode: CreateDataPropertyNode, createSetDataPropertyNode: CreateDataPropertyNode, isObjectNode: IsObjectNode, errorBranch: InlinedBranchProfile): void;
    decorateField(frame: VirtualFrame, proto: JSDynamicObject, record: ClassElementDefinitionRecord, extraInitializers: SimpleArrayList<Object>, callNode: JSFunctionCallNode, isCallableNode: IsCallableNode, errorBranch: InlinedBranchProfile): void;
    decorateGetterSetter(frame: VirtualFrame, proto: JSDynamicObject, record: ClassElementDefinitionRecord, extraInitializers: SimpleArrayList<Object>, node: Node, callNode: JSFunctionCallNode, isCallableNode: IsCallableNode, errorBranch: InlinedBranchProfile, setFunctionName: SetFunctionNameNode): void;
    decorateMethod(frame: VirtualFrame, proto: JSDynamicObject, record: ClassElementDefinitionRecord, extraInitializers: SimpleArrayList<Object>, callNode: JSFunctionCallNode, isCallableNode: IsCallableNode, errorBranch: InlinedBranchProfile, setFunctionName: SetFunctionNameNode): void;
    executeDecorator(frame: VirtualFrame, proto: JSDynamicObject, record: ClassElementDefinitionRecord, extraInitializers: SimpleArrayList<Object>): void;
}