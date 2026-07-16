import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ApplyDecoratorsToElementDefinition } from '../../../../../com/oracle/truffle/js/decorators/ApplyDecoratorsToElementDefinition.d.ts'
import type { ApplyDecoratorsToElementDefinitionNodeGen$DecorateAutoData } from '../../../../../com/oracle/truffle/js/decorators/ApplyDecoratorsToElementDefinitionNodeGen$DecorateAutoData.d.ts'
import type { CreateDecoratorContextObjectNode } from '../../../../../com/oracle/truffle/js/decorators/CreateDecoratorContextObjectNode.d.ts'
import type { ObjectLiteralNode$ObjectLiteralMemberNode } from '../../../../../com/oracle/truffle/js/nodes/access/ObjectLiteralNode$ObjectLiteralMemberNode.d.ts'
import type { ClassElementDefinitionRecord } from '../../../../../com/oracle/truffle/js/nodes/function/ClassElementDefinitionRecord.d.ts'
import type { JSFunctionCallNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { SetFunctionNameNode } from '../../../../../com/oracle/truffle/js/nodes/function/SetFunctionNameNode.d.ts'
import type { IsCallableNode } from '../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { SimpleArrayList } from '../../../../../com/oracle/truffle/js/runtime/util/SimpleArrayList.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ApplyDecoratorsToElementDefinitionNodeGen extends ApplyDecoratorsToElementDefinition {
    static create(paramcontext: JSContext, parammember: ObjectLiteralNode$ObjectLiteralMemberNode): ApplyDecoratorsToElementDefinition;
    static create(paramcontext: JSContext, paramcreateDecoratorContextObjectNode: CreateDecoratorContextObjectNode): ApplyDecoratorsToElementDefinition;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext, createDecoratorContextObjectNode: CreateDecoratorContextObjectNode)
    // private callNode: JSFunctionCallNode;
    // private decorateAuto_cache: ApplyDecoratorsToElementDefinitionNodeGen$DecorateAutoData;
    // private isCallableNode: IsCallableNode;
    // private setFunctionName: SetFunctionNameNode;
    // private state_0_: number;
    // private executeAndSpecialize(frameValue: VirtualFrame, arg0Value: JSDynamicObject, arg1Value: ClassElementDefinitionRecord, arg2Value: SimpleArrayList<Object>): void;
    executeDecorator(frameValue: VirtualFrame, arg0Value: JSDynamicObject, arg1Value: ClassElementDefinitionRecord, arg2Value: SimpleArrayList<Object>): void;
}