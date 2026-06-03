import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObjectLibrary } from '../../../../../../com/oracle/truffle/api/object/DynamicObjectLibrary.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { SpecializedNewObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/function/SpecializedNewObjectNode.d.ts'
import type { SpecializedNewObjectNodeGen$CachedProtoData } from '../../../../../../com/oracle/truffle/js/nodes/function/SpecializedNewObjectNodeGen$CachedProtoData.d.ts'
import type { SpecializedNewObjectNodeGen$CreateWithProtoCachedClassData } from '../../../../../../com/oracle/truffle/js/nodes/function/SpecializedNewObjectNodeGen$CreateWithProtoCachedClassData.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSFunctionData } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { JSNonProxy } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSNonProxy.d.ts'
import type { JSOrdinary } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSOrdinary.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SpecializedNewObjectNodeGen extends SpecializedNewObjectNode {
    static create(paramfunctionData: JSFunctionData, paraminstanceLayout: JSOrdinary): SpecializedNewObjectNode;
    static create(paramcontext: JSContext, paramisBuiltin: boolean, paramisConstructor: boolean, paramisGenerator: boolean, paramisAsyncGenerator: boolean, paraminstanceLayout: JSNonProxy): SpecializedNewObjectNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext, isBuiltin: boolean, isConstructor: boolean, isGenerator: boolean, isAsyncGenerator: boolean, instanceLayout: JSNonProxy)
    // private cachedProto_cache: SpecializedNewObjectNodeGen$CachedProtoData;
    // private cachedShape: Shape;
    // private createWithProtoCachedClass_cache: SpecializedNewObjectNodeGen$CreateWithProtoCachedClassData;
    // private setProtoNode: DynamicObjectLibrary;
    // private state_0_: number;
    // private checkForPolymorphicSpecialize(oldState_0: number): void;
    execute(frame: VirtualFrame, newTarget: JSDynamicObject): JSDynamicObject;
    execute(arg0Value: JSDynamicObject, arg1Value: Object): JSDynamicObject;
    // private executeAndSpecialize(arg0Value: JSDynamicObject, arg1Value: Object): JSDynamicObject;
}